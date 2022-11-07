import { Divider } from "@mui/material";
import AdminDashboardLayout from "@shared/Layouts/AdminDashboardLayout/AdminDashboardLayout";
import BreadcrumbsUserInfo from "components/Admin/Users/UserInfo/BreadcrumbsUserInfo/BreadcrumbsUserInfo";
import UserInformation from "components/Admin/Users/UserInfo/UserInformation/UserInformation";
import Head from "next/head";
import { useRouter } from "next/router";
import { NextPageWithLayout } from "pages/_app";

const allUsersList: Array<{
  id: number;
  name: string;
  role: string;
  status?: "Freeze" | "Block" | undefined;
}> = [
  { id: 1, name: "Ryan Dokidis", role: "Producer", status: "Block" },
  { id: 2, name: "Tiana Gouse", role: "Writer", status: "Freeze" },
  { id: 3, name: "Ryan Dokidis", role: "Producer" },
  { id: 4, name: "Ryan Dokidis", role: "Producer", status: "Block" },
  { id: 5, name: "Tiana Gouse", role: "Writer", status: "Freeze" },
  { id: 6, name: "Ryan Dokidis", role: "Producer" },
  { id: 4, name: "Ryan Dokidis", role: "Producer" },
  { id: 5, name: "Tiana Gouse", role: "Writer" },
  { id: 6, name: "Ryan Dokidis", role: "Producer" },
];

const InformationUserPage: NextPageWithLayout = () => {
  const { query } = useRouter();
  const foundedUser = allUsersList.find((user) => user.id === +query.id!);
  return (
    <>
      <Head>
        <title>Albantsho || Admin User information</title>
      </Head>
      <div className="bg-white shadow-primary rounded-lg pt-4 lg:pt-8 pb-10 lg:pb-24 px-5 lg:px-14 max-w-5xl">
        <BreadcrumbsUserInfo name={foundedUser?.name} />
        <Divider className="mt-2 lg:mt-6 mb-6 lg:mb-11" />
        <UserInformation user={foundedUser} />
      </div>
    </>
  );
};

InformationUserPage.getLayout = (page) => (
  <AdminDashboardLayout>{page}</AdminDashboardLayout>
);

export default InformationUserPage;
