import DashboardLayout from "@shared/Layouts/DashboardLayout/DashboardLayout";
import HeadReviews from "components/Dashboard_ReviewsPage/Index/HeadReviews/HeadReviews";
import SummaryPage from "components/Dashboard_ReviewsPage/ReviewsPage_Summary/SummaryPage";
import Head from "next/head";

import { NextPageWithLayout } from "../_app";

const Summary: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Albantsho || Summary </title>
      </Head>
      <main className="bg-white rounded-md mb-16  px-3 sm:px-5">
        <HeadReviews />
        <SummaryPage />
      </main>
    </>
  );
};

Summary.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Summary;
