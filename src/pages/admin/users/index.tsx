import { Typography } from "@mui/material";
import AdminDashboardLayout from "@shared/Layouts/AdminDashboardLayout/AdminDashboardLayout";
import AdminDashboardSearch from "@shared/Layouts/AdminDashboardLayout/AdminDashboardSearch/AminDashboardSearch";
import AllUsersList from "components/Admin/Users/Index/UsersList/AllUsersList";
import Head from "next/head";
import { NextPageWithLayout } from "../../_app";

const UsersPage: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Albantsho || Admin Users</title>
      </Head>
      <Typography
        variant="h4"
        className="text-primary-700 futura font-normal leading-normal"
      >
        User List
      </Typography>
      <AdminDashboardSearch placeholder="Search" />
      <AllUsersList />
    </>
  );
};

UsersPage.getLayout = (page) => (
  <AdminDashboardLayout>{page}</AdminDashboardLayout>
);

export default UsersPage;
