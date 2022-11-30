import AdminDashboardLayout from "@shared/Layouts/AdminDashboardLayout/AdminDashboardLayout";
import AdminDashboardSearch from "@shared/Layouts/AdminDashboardLayout/AdminDashboardSearch/AminDashboardSearch";
import AssignedRequestsList from "components/Dashboard/Admin/Reviewers/Index/AssignedRequestsList/AssignedRequestsList";
import CompletedRequestsList from "components/Dashboard/Admin/Reviewers/Index/CompletedRequestsList/CompletedRequestsList";
import CurrentRequestsList from "components/Dashboard/Admin/Reviewers/Index/CurrentRequestsList/CurrentRequestsList";
import TabButtons from "components/Dashboard/Admin/Reviewers/Index/TabButtons/TabButtons";
import { debounce } from "lodash";
import Head from "next/head";
import { useRouter } from "next/router";
import { useCallback, useState } from "react";
import { NextPageWithLayout } from "../../../_app";

const ReviewersPage: NextPageWithLayout = () => {
  const { query } = useRouter();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = useCallback(
    debounce(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value.trim());
      },
      2000,
      { leading: false }
    ),
    [searchQuery]
  );

  return (
    <>
      <Head>
        <title>Albantsho || Admin Reviewers</title>
      </Head>
      <TabButtons />
      <AdminDashboardSearch
        placeholder="Search for script"
        handleSearch={handleSearch}
      />

      {(!query.tab || query.tab === "current-requests") && (
        <CurrentRequestsList searchQuery={searchQuery} />
      )}
      {query.tab === "assigned-requests" && (
        <AssignedRequestsList searchQuery={searchQuery} />
      )}
      {query.tab === "completed-requests" && (
        <CompletedRequestsList searchQuery={searchQuery} />
      )}
    </>
  );
};

ReviewersPage.getLayout = (page) => (
  <AdminDashboardLayout>{page}</AdminDashboardLayout>
);

export default ReviewersPage;
