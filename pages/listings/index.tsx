import DashboardLayout from "@shared/Layouts/DashboardLayout/DashboardLayout";
import SearchDashboard from "@shared/Layouts/DashboardLayout/SearchDashboard/SearchDashboard";
import RoutingButton from "components/Listings/RoutingButton/RoutingButton";
import Head from "next/head";
import { NextPageWithLayout } from "../_app";

const Listings: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Albantsho || Listings </title>
      </Head>
      <RoutingButton />
      <SearchDashboard />
    </>
  );
};

Listings.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Listings;
