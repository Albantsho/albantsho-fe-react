import DashboardLayout from "@shared/Layouts/DashboardLayout/DashboardLayout";
import Heading from "components/Dashboard/Reviews/Index/Heading/Heading";
import ListReviewePlans from "components/Dashboard/Reviews/Plans/Plans";
import CutDownTimer from "components/Dashboard/Listings/OpenListingInfo/CutDownTimer/CutDownTimer";
import Head from "next/head";
import { NextPageWithLayout } from "../_app";

const ReviewsPlans: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Albantsho || Reviews Plans </title>
      </Head>
      <main className="bg-white mt-2   sm:mt-4 lg:mt-12 px-3 sm:px-5">
        <Heading />
        <ListReviewePlans />
      </main>
    </>
  );
};

ReviewsPlans.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default ReviewsPlans;
