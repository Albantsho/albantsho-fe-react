import AdminDashboardLayout from "@shared/Layouts/AdminDashboardLayout/AdminDashboardLayout";
import AdminDashboardSearch from "@shared/Layouts/AdminDashboardLayout/AdminDashboardSearch/AminDashboardSearch";
import AssignedRequestsList from "components/Dashboard/Admin/Reviewers/Index/AssignedRequestsList/AssignedRequestsList";
import CurrentRequestsList from "components/Dashboard/Admin/Reviewers/Index/CurrentRequestsList/CurrentRequestsList";
import TabButtons from "components/Dashboard/Admin/Reviewers/Index/TabButtons/TabButtons";
import Head from "next/head";
import { useRouter } from "next/router";
import { NextPageWithLayout } from "../../../_app";

const ReviewersPage: NextPageWithLayout = () => {
  const { query } = useRouter();

  return (
    <>
      <Head>
        <title>Albantsho || Admin Reviewers</title>
      </Head>
      <TabButtons />
      <AdminDashboardSearch placeholder="Search for script" />

      {(!query.tab || query.tab === "current-requests") && (
        <CurrentRequestsList />
      )}
      {query.tab === "assigned-requests" && <AssignedRequestsList />}
      {query.tab === "completed-requests" && <AssignedRequestsList />}
    </>
  );
};

ReviewersPage.getLayout = (page) => (
  <AdminDashboardLayout>{page}</AdminDashboardLayout>
);

export default ReviewersPage;
