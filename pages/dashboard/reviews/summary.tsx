import DashboardLayout from "@shared/Layouts/DashboardLayout/DashboardLayout";
import Heading from "components/Dashboard/Reviews/Index/Heading/Heading";
import SummaryReviews from "components/Dashboard/Reviews/Summary/SummaryReviews";
import Head from "next/head";

import { NextPageWithLayout } from "../../_app";

const Summary: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Albantsho || Summary </title>
      </Head>
      <div className="bg-white shadow-primary rounded-md mb-16">
        <Heading />
        <SummaryReviews />
      </div>
    </>
  );
};

Summary.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Summary;
