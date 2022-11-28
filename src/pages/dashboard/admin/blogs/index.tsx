import { Fab } from "@mui/material";
import AdminDashboardLayout from "@shared/Layouts/AdminDashboardLayout/AdminDashboardLayout";
import AdminDashboardSearch from "@shared/Layouts/AdminDashboardLayout/AdminDashboardSearch/AminDashboardSearch";
import ArchiveBlogsList from "components/Dashboard/Admin/Blogs/Index/ArchiveBlogsList/ArchiveBlogsList";
import LiveBlogsList from "components/Dashboard/Admin/Blogs/Index/LiveBlogsList/LiveBlogsList";
import TabButtons from "components/Dashboard/Admin/Blogs/Index/TabButtons/TabButtons";
import TrashBlogsList from "components/Dashboard/Admin/Blogs/Index/TrashBlogsList/TrashBlogsList";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import routes from "routes/routes";
import errorHandler from "utils/error-handler";
import { NextPageWithLayout } from "../../../_app";
import queryString from "query-string";
import { IWeblog } from "interfaces/weblog";
import useWeblogApi from "apis/Weblog.api";
import { DotLoader } from "react-spinners";

const BlogsPage: NextPageWithLayout = () => {
  const { query } = useRouter();
  const [loading, setLoading] = useState(false);
  const [blogList, setBlogList] = useState<Array<IWeblog>>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const { getAllWeblogsForAdmin } = useWeblogApi();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value.trim());
  };

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
        setLoading(false);
      } catch (error) {
        errorHandler(error);
        console.log(error);
      }
    }
    getAllWeblogs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery, query]);

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
