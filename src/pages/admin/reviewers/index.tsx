import AdminDashboardLayout from "@shared/Layouts/AdminDashboardLayout/AdminDashboardLayout";
import Head from "next/head";
import { NextPageWithLayout } from "../../_app";

const ReviewersPage: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Albantsho ||Admin Reviewers </title>
      </Head>

      <h1>ReviewersPage</h1>
    </>
  );
};

ReviewersPage.getLayout = (page) => (
  <AdminDashboardLayout>{page}</AdminDashboardLayout>
);

export default ReviewersPage;
