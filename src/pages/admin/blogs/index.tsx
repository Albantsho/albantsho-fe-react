import { Fab } from "@mui/material";
import AdminDashboardLayout from "@shared/Layouts/AdminDashboardLayout/AdminDashboardLayout";
import AdminDashboardSearch from "@shared/Layouts/AdminDashboardLayout/AdminDashboardSearch/AminDashboardSearch";
import LiveBlogsList from "components/Admin/Blogs/Index/LiveBlogsList/LiveBlogsList";
import TabButtons from "components/Admin/Blogs/Index/TabButtons/TabButtons";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import { NextPageWithLayout } from "../../_app";

const BlogsPage: NextPageWithLayout = () => {
  const { query } = useRouter();
  const [openAddNewBlog, setOpenAddNewBlog] = useState(false);
  const handleOpenAddNewBlog = () => setOpenAddNewBlog(true);

  return (
    <>
      <Head>
        <title>Albantsho || Admin Blogs </title>
      </Head>
      <TabButtons />
      <AdminDashboardSearch setOpenAddNewBlog={setOpenAddNewBlog} />
      {(!query.tab || query.tab === "live-blogs") && (
        <>
          <h1>live-blogs</h1>
        </>
      )}
      {query.tab === "archive" && (
        <>
          <h1>archive</h1>
        </>
      )}
      {query.tab === "trash" && <h1>trash</h1>}
      <LiveBlogsList />
      <Fab
        color="primary"
        onClick={handleOpenAddNewBlog}
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
