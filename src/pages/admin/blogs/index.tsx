import { Fab } from "@mui/material";
import AdminDashboardLayout from "@shared/Layouts/AdminDashboardLayout/AdminDashboardLayout";
import AdminDashboardSearch from "@shared/Layouts/AdminDashboardLayout/AdminDashboardSearch/AminDashboardSearch";
import useWeblogApi from "apis/Weblog.api";
import ArchiveBlogsList from "components/Admin/Blogs/Index/ArchiveBlogsList/ArchiveBlogsList";
import LiveBlogsList from "components/Admin/Blogs/Index/LiveBlogsList/LiveBlogsList";
import TabButtons from "components/Admin/Blogs/Index/TabButtons/TabButtons";
import TrashBlogsList from "components/Admin/Blogs/Index/TrashBlogsList/TrashBlogsList";
import { IWeblog } from "interfaces/weblog";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { DotLoader } from "react-spinners";
import routes from "routes/routes";
import { NextPageWithLayout } from "../../_app";
import queryString from "query-string";

const BlogsPage: NextPageWithLayout = () => {
  const { query } = useRouter();
  const { getAllWeblogsForAdmin } = useWeblogApi();
  const [allBlogs, setAllBlogs] = useState<Array<IWeblog>>([]);
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   async function getAllWeblogs() {
  //     try {
  //       const res = await getAllWeblogsForAdmin(queryString.stringify(query));
  //       console.log(res.data.weblogs);
  //       setAllBlogs(res.data.weblogs);
  //       setLoading(false);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  //   getAllWeblogs();
  // }, [query!]);

  return (
    <>
      <Head>
        <title>Albantsho || Admin Blogs</title>
      </Head>
      {/* {loading && allBlogs.length === 0 ? (
        <DotLoader color="#7953B5" className="mx-auto mt-10" />
      ) : (
        <> */}
      <TabButtons />
      <AdminDashboardSearch placeholder="Search for blog by title" />
      {!query.archive && !query.trash && <LiveBlogsList liveBlogs={allBlogs} />}
      {query.archive && <ArchiveBlogsList archiveBlogs={allBlogs} />}
      {query.trash && <TrashBlogsList trashBlogs={allBlogs} />}

      <Fab
        color="primary"
        href={routes.createBlogAdminDashboard}
        className="flex items-center justify-center md:hidden fixed right-10 bottom-6  text-3xl rounded-2xl"
      >
        +
      </Fab>
    </>
    //   )}
    // </>
  );
};

BlogsPage.getLayout = (page) => (
  <AdminDashboardLayout>{page}</AdminDashboardLayout>
);

export default BlogsPage;
