import DashboardLayout from "@shared/Layouts/DashboardLayout/DashboardLayout";
import Heading from "components/Dashboard/Reviews/Index/Heading/Heading";
import PlansList from "components/Dashboard/Reviews/PlansList/PlansList";
import Head from "next/head";
import { NextPageWithLayout } from "../../_app";

const Plans: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Albantsho || Reviews Plans </title>
      </Head>
      <div className="bg-white mt-2 shadow-primary sm:mt-4 lg:mt-12">
        <Heading />
        <PlansList />
      </div>
    </>
  );
};

Plans.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Plans;
