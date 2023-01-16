import { Fab } from "@mui/material";
import CustomPaginationComponent from "@shared/CustomPaginationComponent/CustomPaginationComponent";
import AdminDashboardLayout from "@shared/Layouts/AdminDashboardLayout/AdminDashboardLayout";
import AdminDashboardSearch from "@shared/Layouts/AdminDashboardLayout/AdminDashboardSearch/AminDashboardSearch";
import useWeblogApi from "apis/Weblog.api";
import ArchiveBlogsList from "components/Dashboard/Admin/Blogs/Index/ArchiveBlogsList/ArchiveBlogsList";
import LiveBlogsList from "components/Dashboard/Admin/Blogs/Index/LiveBlogsList/LiveBlogsList";
import TabButtons from "components/Dashboard/Admin/Blogs/Index/TabButtons/TabButtons";
import TrashBlogsList from "components/Dashboard/Admin/Blogs/Index/TrashBlogsList/TrashBlogsList";
import { IWeblog } from "interfaces/weblog";
import debounce from "lodash/debounce";
import Head from "next/head";
import { useRouter } from "next/router";
import queryString from "query-string";
import { useCallback, useEffect, useState } from "react";
import { DotLoader } from "react-spinners";
import routes from "routes/routes";
import { NextPageWithLayout } from "../../../_app";

const BlogsPage: NextPageWithLayout = () => {
  const { query, push } = useRouter();
  const [loading, setLoading] = useState(false);
  const [blogList, setBlogList] = useState<Array<IWeblog>>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const { getAllWeblogsForAdmin } = useWeblogApi();
  const [currentPage, setCurrentPage] = useState(1);
  const [pageCount, setPageCount] = useState(1);

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

  useEffect(() => {
    async function getAllWeblogs() {
      try {
        setBlogList([]);
        setLoading(true);
        const res = await getAllWeblogsForAdmin(
          queryString.stringify(query),
          searchQuery
        );
        setBlogList(res.data.weblogs);
        setPageCount(res.data.pagesCount);
        setCurrentPage(res.data.currentPage);
        setLoading(false);
      } catch (error) {
        ("");
      }
    }
    getAllWeblogs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery, query]);

  const handleActivePage = (
    event: React.ChangeEvent<unknown>,
    page: number
  ) => {
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
      {loading ? (
        <DotLoader color="#7953B5" className="mx-auto mt-10" />
      ) : (
        <>
          {!query.archive && !query.trash && (
            <LiveBlogsList blogList={blogList} setBlogList={setBlogList} />
          )}
          {query.archive && (
            <ArchiveBlogsList blogList={blogList} setBlogList={setBlogList} />
          )}
          {query.trash && (
            <TrashBlogsList blogList={blogList} setBlogList={setBlogList} />
          )}
          {pageCount >= 2 && (
            <CustomPaginationComponent
              pageCount={pageCount}
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
      )}
    </>
  );
};

BlogsPage.getLayout = (page) => (
  <AdminDashboardLayout>{page}</AdminDashboardLayout>
);

export default BlogsPage;
