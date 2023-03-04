// Importing necessary modules and components from files
import GeneralLayout from "@shared/Layouts/GeneralLayout/GeneralLayout";
import useWeblogApi from "apis/Weblog.api";
import BlogList from "components/Blog/BlogList/BlogList";
import type { IWeblog } from "interfaces/weblog";
import Head from "next/head";
import { useMemo, useState } from "react";
import { useQuery } from "react-query";
import errorHandler from "utils/error-handler";
import { NextPageWithLayout } from "../_app";

const Blog: NextPageWithLayout = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const { getAllWeblogs } = useWeblogApi();

  const { data, isLoading } = useQuery(
    ["weblog", currentPage],
    () => getAllWeblogs(currentPage),
    {
      onError: (err) => errorHandler(err),
    }
  );

  // Using useMemo hook to save blogList in memo memoization since useEffect would only refresh data on re-rendering
  const blogList = useMemo(() => data?.weblogs as IWeblog[], [data]);

  return (
    <>
      {/* Head tags for adding meta information */}
      <Head>
        <title>Albantsho || Blog</title>
        <meta
          name="description"
          content={`blogs about script writing and cinema`}
        ></meta>
        <meta property="og:title" content="Blog"></meta>
        <meta
          property="og:description"
          content="blogs about script writing and cinema"
        ></meta>
        <meta property="og:url" content={`www.albantsho.com/blog`}></meta>
      </Head>

      {/* Rendering BlogList Component*/}
      <BlogList
        pageCount={data?.pagesCount as number}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        loading={isLoading}
        blogList={blogList}
      />
    </>
  );
};

/*
Setting up layout to apply common style-sheet to all pages when rendering.
The title defines the title or name of the page. 
*/
Blog.getLayout = (page) => <GeneralLayout title="Blog">{page}</GeneralLayout>;

export default Blog; //? Exporting the Blog Component by default.
