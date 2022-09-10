import DashboardLayout from "@shared/Layouts/DashboardLayout/DashboardLayout";
import Heading from "components/Dashboard/Reviews/Index/Heading/Heading";
import Plans from "components/Dashboard/Reviews/Plans/Plans";
import Head from "next/head";
import { NextPageWithLayout } from "../_app";

const ReviewsPlans: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Albantsho || Reviews Plans </title>
      </Head>
      <div className="bg-white mt-2   sm:mt-4 lg:mt-12 px-3 sm:px-5">
        <Heading />
        <Plans />
      </div>
    </>
  );
};

ReviewsPlans.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default ReviewsPlans;
