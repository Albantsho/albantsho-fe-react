import DashboardLayout from "@shared/Layouts/DashboardLayout/DashboardLayout";
import PaymentSuccessfulPage from "components/Reviews/PaymentSuccessfulPage/PaymentSuccessfulPage";
import Head from "next/head";
import { NextPageWithLayout } from "../_app";

const PaymentSuccessful: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Albantsho || Payment Successful </title>
      </Head>
      <PaymentSuccessfulPage />
    </>
  );
};
PaymentSuccessful.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default PaymentSuccessful;
