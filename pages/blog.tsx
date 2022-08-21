import GeneralLayout from "@shared/Layouts/GeneralLayout/GeneralLayout";
import BlogList from "components/Blog/BlogList/BlogList";
import Head from "next/head";
import { NextPageWithLayout } from "./_app";

const Blog: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Albantsho || Blog</title>
      </Head>
      <div className="max-w-screen-2xl relative mx-auto px-5 sm:px-10">
        <BlogList />
      </div>
    </>
  );
};

Blog.getLayout = (page) => <GeneralLayout title="Blog">{page}</GeneralLayout>;

export default Blog;
