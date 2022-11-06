import { Fab } from "@mui/material";
import AdminDashboardLayout from "@shared/Layouts/AdminDashboardLayout/AdminDashboardLayout";
import AdminDashboardSearch from "@shared/Layouts/AdminDashboardLayout/AdminDashboardSearch/AminDashboardSearch";
import ArchiveBlogsList from "components/Admin/Blogs/Index/ArchiveBlogsList/ArchiveBlogsList";
import LiveBlogsList from "components/Admin/Blogs/Index/LiveBlogsList/LiveBlogsList";
import TabButtons from "components/Admin/Blogs/Index/TabButtons/TabButtons";
import TrashBlogsList from "components/Admin/Blogs/Index/TrashBlogsList/TrashBlogsList";
import Head from "next/head";
import { useRouter } from "next/router";
import { NextPageWithLayout } from "../../_app";

const BlogsPage: NextPageWithLayout = () => {
  const { query } = useRouter();

  return (
    <>
      <Head>
        <title>Albantsho || Admin Blogs</title>
      </Head>
      <TabButtons />
      <AdminDashboardSearch placeholder="Search for blog by title" />
      {(!query.tab || query.tab === "live-blogs") && <LiveBlogsList />}
      {query.tab === "archive" && <ArchiveBlogsList />}
      {query.tab === "trash" && <TrashBlogsList />}

      <Fab
        color="primary"
        href="/admin/blogs/add-blog/2"
        className="block md:hidden fixed right-10 bottom-6  text-3xl rounded-2xl"
      >
        +
      </Fab>
    </>
  );
};

BlogsPage.getLayout = (page) => (
  <AdminDashboardLayout>{page}</AdminDashboardLayout>
);

export default BlogsPage;
