import { Divider } from "@mui/material";
import AdminDashboardLayout from "@shared/Layouts/AdminDashboardLayout/AdminDashboardLayout";
import Loader from "@shared/Loader/Loader";
import useWeblogApi from "apis/Weblog.api";
import BreadcrumbsEditBlog from "components/Dashboard/Admin/Blogs/EditBlogs/BreadcrumbsEditBlog/BreadcrumbsEditBlog";
import EditBlog from "components/Dashboard/Admin/Blogs/EditBlogs/EditBlog/EditBlog";
import Head from "next/head";
import { useRouter } from "next/router";
import { NextPageWithLayout } from "pages/_app";
import { useQuery } from "react-query";
import errorHandler from "utils/error-handler";

const EditBlogPage: NextPageWithLayout = () => {
  const { query } = useRouter();
  const { getWeblog } = useWeblogApi();

  const blogSlug = typeof query?.slug === "string" ? query.slug : "";

  const { data, isLoading } = useQuery(
    ["weblog", blogSlug],
    () => getWeblog(blogSlug),
    {
      onError: (err) => {
        errorHandler(err);
      },
      enabled: blogSlug.length > 0,
    }
  );

  return (
    <>
      <Head>
        <title>Albantsho || Admin Edit Blog</title>
      </Head>

      {data && !isLoading ? (
        <div className="bg-white shadow-primary min-h-full rounded-lg pt-4 lg:pt-8 pb-10 lg:pb-24 px-5 lg:px-14 my-16">
          <BreadcrumbsEditBlog oneWeblog={data.weblog} />
          <Divider className="mt-2 lg:mt-6 mb-6 lg:mb-10" />
          <EditBlog oneWeblog={data.weblog} />
        </div>
      ) : (
        <Loader setCustomHeight="min-h-[60vh]" />
      )}
    </>
  );
};

EditBlogPage.getLayout = (page) => (
  <AdminDashboardLayout>{page}</AdminDashboardLayout>
);

export default EditBlogPage;
