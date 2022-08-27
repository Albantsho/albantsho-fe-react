import DashboardLayout from "@shared/Layouts/DashboardLayout/DashboardLayout";
import Head from "next/head";
import { NextPageWithLayout } from "../_app";

const Reviews: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Albantsho || Reviews </title>
      </Head>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam eos at
        cum a quibusdam sit doloremque odit expedita sint? Dolor repellat cum
        deserunt ducimus. Tenetur doloremque sunt neque reiciendis non?
      </p>
    </>
  );
};

Reviews.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Reviews;
