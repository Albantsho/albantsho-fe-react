import DashboardLayout from "@shared/Layouts/DashboardLayout/DashboardLayout";
import HeadReviews from "components/Reviews/HeadReviews/HeadReviews";
import SummaryPage from "components/Reviews/Summary/SummaryPage";
import Head from "next/head";

import { NextPageWithLayout } from "../_app";

const Summary: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Albantsho || Summary </title>
      </Head>
      <main className="bg-white mt-2   sm:mt-4 lg:mt-12 px-3 sm:px-5">
        <HeadReviews  />
        <SummaryPage />
      </main>
    </>
  );
};

Summary.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Summary;
