import { Divider } from "@mui/material";
import AdminDashboardLayout from "@shared/Layouts/AdminDashboardLayout/AdminDashboardLayout";
import BreadcrumbsEditBlog from "components/Admin/Blogs/EditBlogs/BreadcrumbsEditBlog/BreadcrumbsEditBlog";
import EditBlog from "components/Admin/Blogs/EditBlogs/EditBlog/EditBlog";
import Head from "next/head";
import { NextPageWithLayout } from "pages/_app";

const EditBlogPage: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Albantsho || Admin Edit Blog</title>
      </Head>
      <div className="bg-white shadow-primary rounded-lg pt-4 lg:pt-8 pb-10 lg:pb-24 px-5 lg:px-14">
        <BreadcrumbsEditBlog />
        <Divider className="mt-2 lg:mt-6 mb-6 lg:mb-10" />
        <EditBlog />
      </div>
    </>
  );
};

EditBlogPage.getLayout = (page) => (
  <AdminDashboardLayout>{page}</AdminDashboardLayout>
);

export default EditBlogPage;
