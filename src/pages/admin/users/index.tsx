import AdminDashboardLayout from "@shared/Layouts/AdminDashboardLayout/AdminDashboardLayout";
import Head from "next/head";
import { NextPageWithLayout } from "../../_app";

const UsersPage: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Albantsho ||Admin Users </title>
      </Head>

      <h1>UsersPage</h1>
    </>
  );
};

UsersPage.getLayout = (page) => (
  <AdminDashboardLayout>{page}</AdminDashboardLayout>
);

export default UsersPage;
