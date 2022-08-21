import Footer from "@shared/Footer/Footer";
import Nav from "@shared/Layouts/GeneralLayout/Nav/Nav";
import Head from "next/head";

const BlogPost = () => {
  return (
    <>
      <Head>
        {/* TODO: Change the title later */}
        <title>Albantsho || Blog Post</title>
      </Head>
      <Nav />

      <Footer />
    </>
  );
};

export default BlogPost;
