import DashboardLayout from "@shared/Layouts/DashboardLayout/DashboardLayout";
import Heading from "components/Dashboard/Reviews/Index/Heading/Heading";
import Summary from "components/Dashboard/Reviews/Summary/Summary";
import Head from "next/head";

import { NextPageWithLayout } from "../../_app";

const SummaryPage: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Albantsho || Summary </title>
      </Head>
      <div className="bg-white shadow-primary rounded-md mb-16">
        <Heading />
        <Summary />
      </div>
    </>
  );
};

SummaryPage.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default SummaryPage;
