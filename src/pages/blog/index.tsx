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
  const [currentPage, setCurrentPage] = useState(1);
  const [pageCount, setPageCount] = useState(1);

  useEffect(() => {
    async function getAllWeblogsFunc() {
      try {
        setLoading(true);
        const res = await getAllWeblogs(currentPage);
        setPageCount(res.data.pagesCount);
        setBlogList(res.data.weblogs);
        setLoading(false);
      } catch (error) {
        errorHandler(error);
      }
    }

    getAllWeblogsFunc();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageCount]);

  return (
    <>
      <Head>
        <title>Albantsho || Blog</title>
      </Head>

      <BlogList
        pageCount={pageCount}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        loading={loading}
        blogList={blogList}
      />
    </>
  );
};

Blog.getLayout = (page) => <GeneralLayout title="Blog">{page}</GeneralLayout>;

export default Blog;
