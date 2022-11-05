import AdminDashboardLayout from "@shared/Layouts/AdminDashboardLayout/AdminDashboardLayout";
import Head from "next/head";
import { useRouter } from "next/router";
import { NextPageWithLayout } from "../../_app";

const BlogsPage: NextPageWithLayout = () => {
  const { query } = useRouter();

  return (
    <>
      <Head>
        <title>Albantsho || Admin Blogs </title>
      </Head>

      {(!query.tab || query.tab === "live-blogs") && (
        <>
          <h1>live-blogs</h1>
        </>
      )}
      {query.tab === "archive" && (
        <>
          <h1>archive</h1>
        </>
      )}
      {query.tab === "trash" && <h1>trash</h1>}
    </>
  );
};

BlogsPage.getLayout = (page) => (
  <AdminDashboardLayout>{page}</AdminDashboardLayout>
);

export default BlogsPage;
