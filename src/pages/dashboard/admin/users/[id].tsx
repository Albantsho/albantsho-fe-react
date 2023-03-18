import { Divider } from "@mui/material";
import AdminDashboardLayout from "@shared/Layouts/AdminDashboardLayout/AdminDashboardLayout";
import Loader from "@shared/Loader/Loader";
import useAuthApi from "apis/Auth.api";
import BreadcrumbsUserInfo from "components/Dashboard/Admin/Users/UserInfo/BreadcrumbsUserInfo/BreadcrumbsUserInfo";
import UserInformation from "components/Dashboard/Admin/Users/UserInfo/UserInformation/UserInformation";
import Head from "next/head";
import { useRouter } from "next/router";
import { NextPageWithLayout } from "pages/_app";
import { useQuery } from "react-query";
import errorHandler from "utils/error-handler";

const InformationUserPage: NextPageWithLayout = () => {
  const { query } = useRouter();
  const { getUserProfileForAdmin } = useAuthApi();

  const userID = typeof query?.id === "string" ? query.id : "";

  const { data, isLoading, refetch } = useQuery(
    ["userInformationForAdmin", userID],
    () => getUserProfileForAdmin(userID),
    {
      onError: (err) => {
        errorHandler(err);
      },
      enabled: userID.length > 0,
    }
  );

  return (
    <>
      <Head>
        <title>Albantsho || Admin User information</title>
      </Head>
      {!isLoading && data ? (
        <div className="bg-white shadow-primary rounded-lg pt-4 lg:pt-8 pb-10 lg:pb-24 px-5 lg:px-14 max-w-5xl">
          <BreadcrumbsUserInfo
            name={`${data.user.firstName} ${data.user.lastName}`}
          />
          <Divider className="mt-2 lg:mt-6 mb-6 lg:mb-11" />
          <UserInformation refetch={refetch} user={data.user} />
        </div>
      ) : (
        <Loader setCustomHeight="min-h-[75vh]" />
      )}
    </>
  );
};

InformationUserPage.getLayout = (page) => (
  <AdminDashboardLayout>{page}</AdminDashboardLayout>
);

export default InformationUserPage;
