import { Fab } from "@mui/material";
import CustomPaginationComponent from "@shared/CustomPaginationComponent/CustomPaginationComponent";
import AdminDashboardLayout from "@shared/Layouts/AdminDashboardLayout/AdminDashboardLayout";
import AdminDashboardSearch from "@shared/Layouts/AdminDashboardLayout/AdminDashboardSearch/AminDashboardSearch";
import useWeblogApi from "apis/Weblog.api";
import ArchiveBlogsList from "components/Dashboard/Admin/Blogs/Index/ArchiveBlogsList/ArchiveBlogsList";
import LiveBlogsList from "components/Dashboard/Admin/Blogs/Index/LiveBlogsList/LiveBlogsList";
import TabButtons from "components/Dashboard/Admin/Blogs/Index/TabButtons/TabButtons";
import TrashBlogsList from "components/Dashboard/Admin/Blogs/Index/TrashBlogsList/TrashBlogsList";
import debounce from "lodash/debounce";
import Head from "next/head";
import { useRouter } from "next/router";
import queryString from "query-string";
import { useCallback, useEffect, useState } from "react";
import { useQuery } from "react-query";
import { DotLoader } from "react-spinners";
import routes from "routes/routes";
import errorHandler from "utils/error-handler";
import { NextPageWithLayout } from "../../../_app";

const BlogsPage: NextPageWithLayout = () => {
  const { query, push } = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const { getAllWeblogsForAdmin } = useWeblogApi();
  const [currentPage, setCurrentPage] = useState(1);

  const { data, isLoading } = useQuery(
    ["weblog", queryString.stringify(query), searchQuery, currentPage],
    () => getAllWeblogsForAdmin(queryString.stringify(query), searchQuery),
    {
      onError: (err) => {
        errorHandler(err);
      },
      refetchInterval: 1000,
      refetchIntervalInBackground: true,
    }
  );

  useEffect(() => {
    setCurrentPage(+`${query.page}` || 1);
  }, [query]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleSearch = useCallback(
    debounce(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value.trim());
      },
      2000,
      { leading: false }
    ),
    [searchQuery]
  );

  const handleActivePage = (
    _event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    setCurrentPage(page);
    !query
      ? push(
          routes.blogsAdminDashboardTabs.url("", `?page=${page}`),
          undefined,
          { shallow: true }
        )
      : query.archive
      ? push(
          routes.blogsAdminDashboardTabs.url(`?archive=true`, `&page=${page}`),
          undefined,
          { shallow: true }
        )
      : query.trash
      ? push(
          routes.blogsAdminDashboardTabs.url(`?trash=true`, `&page=${page}`),
          undefined,
          { shallow: true }
        )
      : push(
          routes.blogsAdminDashboardTabs.url("", `?page=${page}`),
          undefined,
          { shallow: true }
        );
  };

  return (
    <>
      <Head>
        <title>Albantsho || Admin Blogs</title>
      </Head>
      <TabButtons />
      <AdminDashboardSearch
        handleSearch={handleSearch}
        placeholder="Search for blog by title"
      />
      {!isLoading && data ? (
        <>
          {!query.archive && !query.trash && (
            <LiveBlogsList blogList={data.weblogs} />
          )}
          {query.archive && <ArchiveBlogsList blogList={data.weblogs} />}
          {query.trash && <TrashBlogsList blogList={data.weblogs} />}
          {data.pagesCount >= 2 && (
            <CustomPaginationComponent
              pageCount={data.pagesCount}
              currentPage={currentPage}
              handleActivePage={handleActivePage}
            />
          )}
          <Fab
            color="primary"
            href={routes.createBlogAdminDashboard.url}
            className="flex items-center justify-center md:hidden fixed right-10 bottom-6  text-3xl rounded-2xl"
          >
            +
          </Fab>
        </>
      ) : (
        <DotLoader color="#7953B5" className="mx-auto mt-10" />
      )}
    </>
  );
};

BlogsPage.getLayout = (page) => (
  <AdminDashboardLayout>{page}</AdminDashboardLayout>
);

export default BlogsPage;
