import GeneralLayout from "@shared/Layouts/GeneralLayout/GeneralLayout";
import useWeblogApi from "apis/Weblog.api";
import BlogList from "components/Blog/BlogList/BlogList";
import { IWeblog } from "interfaces/weblog";
import Head from "next/head";
import { useEffect, useState } from "react";
import errorHandler from "utils/error-handler";
import { NextPageWithLayout } from "../_app";

const Blog: NextPageWithLayout = () => {
  const [blogList, setBlogList] = useState<IWeblog[]>([]);
  const [loading, setLoading] = useState(false);
  const { getAllWeblogs } = useWeblogApi();

  useEffect(() => {
    async function getAllWeblogsFunc() {
      try {
        setLoading(true);
        const res = await getAllWeblogs();

        setBlogList(res.data.weblogs);
        setLoading(false);
      } catch (error) {
        errorHandler(error);
      }
    }

    getAllWeblogsFunc();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Head>
        <title>Albantsho || Blog</title>
      </Head>

      <BlogList loading={loading} blogList={blogList} />
    </>
  );
};

Blog.getLayout = (page) => <GeneralLayout title="Blog">{page}</GeneralLayout>;

export default Blog;
