import DashboardLayout from "@shared/Layouts/DashboardLayout/DashboardLayout";
import SearchDashboard from "@shared/Layouts/DashboardLayout/SearchDashboard/SearchDashboard";
import OpeningLists from "components/Listings/OpeningLists/OpeningLists";
import RoutingButton from "components/Listings/RoutingButton/RoutingButton";
import Head from "next/head";
import { useState } from "react";
import { NextPageWithLayout } from "../_app";

const Listings: NextPageWithLayout = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <>
      <Head>
        <title>Albantsho || Listings </title>
      </Head>
      <RoutingButton />
      <SearchDashboard  setOpen={setOpen} />
      <OpeningLists />
    </>
  );
};

Listings.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Listings;
