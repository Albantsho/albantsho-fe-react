import DashboardLayout from "@shared/Layouts/DashboardLayout/DashboardLayout";
import SearchDashboard from "@shared/Layouts/DashboardLayout/SearchDashboard/SearchDashboard";
import Drafts from "components/Listings/Drafts/Drafts";
import OpeningLists from "components/Listings/OpeningLists/OpeningLists";
import RoutingButton from "components/Listings/RoutingButton/RoutingButton";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import { NextPageWithLayout } from "../_app";

const Listings: NextPageWithLayout = () => {
  const [open, setOpen] = useState<boolean>(false);
  const { query } = useRouter();
  console.log({ query });

  return (
    <>
      <Head>
        <title>Albantsho || Listings </title>
      </Head>
      <RoutingButton />
      <SearchDashboard setOpen={setOpen} />
      {(!query.type || query.type === "open-listings") && <OpeningLists />}
      { query.type === "drafts" && <Drafts />}
    </>
  );
};

Listings.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Listings;
