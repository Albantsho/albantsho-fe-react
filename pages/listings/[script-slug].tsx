import DashboardLayout from "@shared/Layouts/DashboardLayout/DashboardLayout";
import SearchDashboard from "@shared/Layouts/DashboardLayout/SearchDashboard/SearchDashboard";
import ListingsScriptsPage from "components/LisitingsScriptsPage/ListingsScriptsPage";
import RoutingButton from "components/Listings/RoutingButton/RoutingButton";
import Head from "next/head";
import { useState } from "react";
import { NextPageWithLayout } from "../_app";

const ScriptSlug: NextPageWithLayout = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <>
      <Head>
        <title>Albantsho || ScriptSlug </title>
      </Head>
      <RoutingButton />
      <SearchDashboard setOpen={setOpen} />
      <ListingsScriptsPage />
    </>
  );
};

ScriptSlug.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default ScriptSlug;
