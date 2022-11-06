import { Divider } from "@mui/material";
import AdminDashboardLayout from "@shared/Layouts/AdminDashboardLayout/AdminDashboardLayout";
import AddBlog from "components/Admin/Blogs/AddBlogEntry/AddBlog/AddBlog";
import BreadcrumbsAddBlogEntry from "components/Admin/Blogs/AddBlogEntry/BreadcrumbsAddBlogEntry/BreadcrumbsAddBlogEntry";
import Head from "next/head";
import { NextPageWithLayout } from "pages/_app";

const EditBlogPage: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Albantsho || Admin Add blog</title>
      </Head>
      <div className="bg-white shadow-primary rounded-lg pt-4 lg:pt-8 pb-10 lg:pb-24 px-5 lg:px-14">
        <BreadcrumbsAddBlogEntry />
        <Divider className="mt-2 lg:mt-6 mb-6 lg:mb-10" />
        <AddBlog />
      </div>
    </>
  );
};

EditBlogPage.getLayout = (page) => (
  <AdminDashboardLayout>{page}</AdminDashboardLayout>
);

export default EditBlogPage;
