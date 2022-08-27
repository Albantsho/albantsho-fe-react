import DashboardLayout from "@shared/Layouts/DashboardLayout/DashboardLayout";
import Head from "next/head";
import { NextPageWithLayout } from "../_app";

const Scripts: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Albantsho || Projects Scripts </title>
      </Head>
      <p> 
        Script
      </p>
    </>
  );
};

Scripts.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Scripts;
