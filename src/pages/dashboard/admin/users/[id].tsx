import { Divider } from "@mui/material";
import AdminDashboardLayout from "@shared/Layouts/AdminDashboardLayout/AdminDashboardLayout";
import useAuthApi from "apis/Auth.api";
import BreadcrumbsUserInfo from "components/Dashboard/Admin/Users/UserInfo/BreadcrumbsUserInfo/BreadcrumbsUserInfo";
import UserInformation from "components/Dashboard/Admin/Users/UserInfo/UserInformation/UserInformation";
import { IUserInformationInAdminPanel } from "interfaces/user";
import Head from "next/head";
import { useRouter } from "next/router";
import { NextPageWithLayout } from "pages/_app";
import { useEffect, useState } from "react";
import { DotLoader } from "react-spinners";
import errorHandler from "utils/error-handler";

const InformationUserPage: NextPageWithLayout = () => {
  const [oneUser, setOneUser] = useState<IUserInformationInAdminPanel | null>(
    null
  );
  const { query } = useRouter();
  const { getUserProfileForAdmin } = useAuthApi();

  useEffect(() => {
    async function getUserFunc() {
      try {
        if (query.id !== undefined) {
          const res = await getUserProfileForAdmin(query.id);
          setOneUser(res.data.user);
        }
      } catch (error) {
        errorHandler(error);
      }
    }

    getUserFunc();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query.id]);

  return (
    <>
      <Head>
        <title>Albantsho || Admin User information</title>
      </Head>

      {oneUser === null ? (
        <DotLoader color="#7953B5" className="mx-auto mt-10" />
      ) : (
        <div className="bg-white shadow-primary rounded-lg pt-4 lg:pt-8 pb-10 lg:pb-24 px-5 lg:px-14 max-w-5xl">
          <BreadcrumbsUserInfo
            name={`${oneUser.firstName} ${oneUser.lastName}`}
          />
          <Divider className="mt-2 lg:mt-6 mb-6 lg:mb-11" />
          <UserInformation user={oneUser} setOneUser={setOneUser} />
        </div>
      )}
    </>
  );
};

InformationUserPage.getLayout = (page) => (
  <AdminDashboardLayout>{page}</AdminDashboardLayout>
);

export default InformationUserPage;
