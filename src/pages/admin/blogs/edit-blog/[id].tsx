import { Divider } from "@mui/material";
import AdminDashboardLayout from "@shared/Layouts/AdminDashboardLayout/AdminDashboardLayout";
import useWeblogApi from "apis/Weblog.api";
import BreadcrumbsEditBlog from "components/Admin/Blogs/EditBlogs/BreadcrumbsEditBlog/BreadcrumbsEditBlog";
import EditBlog from "components/Admin/Blogs/EditBlogs/EditBlog/EditBlog";
import { IWeblog } from "interfaces/weblog";
import Head from "next/head";
import { useRouter } from "next/router";
import { NextPageWithLayout } from "pages/_app";
import { useEffect, useState } from "react";
import { DotLoader } from "react-spinners";

const EditBlogPage: NextPageWithLayout = () => {
  const { query } = useRouter();
  const { getWeblog } = useWeblogApi();
  const [loading, setLoading] = useState(true);
  const [oneWeblog, setOneWeblog] = useState<IWeblog | null>(null);

  useEffect(() => {
    console.log("hi");

    async function getWeblogFunc() {
      try {
        console.log(query.id);

        console.log("renderer");
        if (query.id !== undefined) {
          const res = await getWeblog(query.id);
          setLoading(false);
          console.log(
            "🚀 ~ file: [id].tsx ~ line 33 ~ getWeblogFunc ~ res",
            res
          );
          setOneWeblog(res.data.weblog);
          console.log(oneWeblog);
        }
      } catch (error) {
        console.log(error);
      }
    }

    getWeblogFunc();
  }, [query.id!]);

  return (
    <>
      <Head>
        <title>Albantsho || Admin Edit Blog</title>
      </Head>

      {oneWeblog === null ? (
        <DotLoader color="#7953B5" className="mx-auto mt-10" />
      ) : (
        <div className="bg-white shadow-primary min-h-full rounded-lg pt-4 lg:pt-8 pb-10 lg:pb-24 px-5 lg:px-14">
          <BreadcrumbsEditBlog oneWeblog={oneWeblog} />
          <Divider className="mt-2 lg:mt-6 mb-6 lg:mb-10" />
          <EditBlog oneWeblog={oneWeblog} />
        </div>
      )}
    </>
  );
};

EditBlogPage.getLayout = (page) => (
  <AdminDashboardLayout>{page}</AdminDashboardLayout>
);

export default EditBlogPage;
