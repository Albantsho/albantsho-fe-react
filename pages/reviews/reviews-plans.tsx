import DashboardLayout from "@shared/Layouts/DashboardLayout/DashboardLayout";
import HeadReviews from "components/Reviews/HeadReviews/HeadReviews";
import ListReviewsPlans from "components/Reviews/ListReviewsPlans/ListReviewsPlans";
import Head from "next/head";
import { NextPageWithLayout } from "../_app";

const ReviewsPlans: NextPageWithLayout = () => {

  return (
    <>
      <Head>
        <title>Albantsho || Reviews Plans </title>
      </Head>
      <main className="bg-white mt-2   sm:mt-4 lg:mt-12 px-3 sm:px-5" >
        <HeadReviews/>
        <ListReviewsPlans/>
      </main>
    </>
  );
};

ReviewsPlans.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default ReviewsPlans;
