import DashboardLayout from "@shared/Layouts/DashboardLayout/DashboardLayout";
import Head from "next/head";
import { NextPageWithLayout } from "../_app";

const listings: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Albantsho || Projects </title>
      </Head>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam eos at
        cum a quibusdam sit doloremque odit expedita sint? Dolor repellat cum
        deserunt ducimus. Tenetur doloremque sunt neque reiciendis non?
      </p>
    </>
  );
};

listings.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default listings;
