import GeneralLayout from "@shared/Layouts/GeneralLayout/GeneralLayout";
import useWeblogApi from "apis/Weblog.api";
import BlogList from "components/Blog/BlogList/BlogList";
import { IWeblog } from "interfaces/weblog";
import Head from "next/head";
import { useState } from "react";
import { useQuery } from "react-query";
import errorHandler from "utils/error-handler";
import { NextPageWithLayout } from "../_app";

const Blog: NextPageWithLayout = () => {
  const { getAllWeblogs } = useWeblogApi();
  const [currentPage, setCurrentPage] = useState(1);

  const { data, isLoading } = useQuery(
    ["weblog", currentPage],
    () => getAllWeblogs(currentPage),
    {
      onError: (err) => {
        errorHandler(err);
      },
    }
  );

  return (
    <>
      <Head>
        <title>Albantsho || Blog</title>
      </Head>

      <BlogList
        pageCount={data?.pagesCount as number}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        loading={isLoading}
        blogList={data?.weblogs as IWeblog[]}
      />
    </>
  );
};

Blog.getLayout = (page) => <GeneralLayout title="Blog">{page}</GeneralLayout>;

export default Blog;
