import { Divider } from "@mui/material";
import AdminDashboardLayout from "@shared/Layouts/AdminDashboardLayout/AdminDashboardLayout";
import useAuthApi from "apis/Auth.api";
import BreadcrumbsUserInfo from "components/Dashboard/Admin/Users/UserInfo/BreadcrumbsUserInfo/BreadcrumbsUserInfo";
import UserInformation from "components/Dashboard/Admin/Users/UserInfo/UserInformation/UserInformation";
import Head from "next/head";
import { useRouter } from "next/router";
import { NextPageWithLayout } from "pages/_app";
import { useQuery } from "react-query";
import { DotLoader } from "react-spinners";
import errorHandler from "utils/error-handler";

const InformationUserPage: NextPageWithLayout = () => {
  const { query } = useRouter();
  const { getUserProfileForAdmin } = useAuthApi();
  const { data, isLoading } = useQuery(
    "userInformationForAdmin",
    () => getUserProfileForAdmin(`${query.id}`),
    {
      onError: (err) => {
        errorHandler(err);
      },
      refetchInterval: 1000,
      refetchIntervalInBackground: true,
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
          <UserInformation user={data.user} />
        </div>
      ) : (
        <DotLoader color="#7953B5" className="mx-auto mt-10" />
      )}
    </>
  );
};

InformationUserPage.getLayout = (page) => (
  <AdminDashboardLayout>{page}</AdminDashboardLayout>
);

export default InformationUserPage;
