import HeroSection from "@shared/HeroSection/HeroSection";
import Layout from "@shared/Layouts/Layout";
import StarArrowBg from "@shared/StarArrowBg/StarArrowBg";
import BlogCard from "components/Blog/BlogCard/BlogCard";
import Head from "next/head";
import { NextPageWithLayout } from "./_app";

const Blog: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Albantsho || Blog</title>
      </Head>
      <HeroSection title="Blog" />
      <div className="max-w-screen-2xl mx-auto px-5 sm:px-10">
        <StarArrowBg />
        {Array.from(new Array(6)).map((_, i) => (
          <BlogCard key={i} />
        ))}
      </div>
    </>
  );
};

Blog.getLayout = (page) => <Layout>{page}</Layout>;

export default Blog;
