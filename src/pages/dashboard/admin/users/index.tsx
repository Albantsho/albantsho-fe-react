import { Typography } from "@mui/material";
import AdminDashboardLayout from "@shared/Layouts/AdminDashboardLayout/AdminDashboardLayout";
import AdminDashboardSearch from "@shared/Layouts/AdminDashboardLayout/AdminDashboardSearch/AminDashboardSearch";
import useAuthApi from "apis/Auth.api";
import AllUsersList from "components/Dashboard/Admin/Users/Index/UsersList/AllUsersList";
import { IUserInformation } from "interfaces/user";
import Head from "next/head";
import { useEffect, useState } from "react";
import { DotLoader } from "react-spinners";
import errorHandler from "utils/error-handler";
import { NextPageWithLayout } from "../../../_app";

const UsersPage: NextPageWithLayout = () => {
  const { getAllUser } = useAuthApi();
  const [loading, setLoading] = useState(false);
  const [usersList, setUsersList] = useState<IUserInformation[] | null>(null);

  useEffect(() => {
    async function getAllUsersFunc() {
      try {
        setLoading(true);
        const res = await getAllUser();
        console.log(res);

        setUsersList(res.data.users);
        setLoading(false);
      } catch (error) {
        errorHandler(error);
      }
    }
    getAllUsersFunc();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Head>
        <title>Albantsho || Admin Users</title>
      </Head>
      {!loading && usersList !== null ? (
        <>
          <Typography
            variant="h4"
            className="text-primary-700 futura font-normal leading-normal"
          >
            User List
          </Typography>
          <AdminDashboardSearch placeholder="Search" />
          <AllUsersList usersList={usersList} />
        </>
      ) : (
        <DotLoader color="#7953B5" className="mx-auto mt-10" />
      )}
    </>
  );
};

UsersPage.getLayout = (page) => (
  <AdminDashboardLayout>{page}</AdminDashboardLayout>
);

export default UsersPage;
