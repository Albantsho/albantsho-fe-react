import DashboardLayout from "@shared/Layouts/DashboardLayout/DashboardLayout";
import Head from "next/head";
import { NextPageWithLayout } from "../_app";
import success from "@assets/images/success.png";
import { Typography } from "@mui/material";
import Btn from "@shared/Btn/Btn";
import Image from "next/image";
import Link from "next/link";

const PaymentSuccessful: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Albantsho || Payment Successful </title>
      </Head>
      <div className="pt-24 md:pt-32 px-10 md:px-16 mt-5 text-center pb-16 rounded-md mx-auto bg-white">
        <div className="mb-3 sm:mb-4 lg:mb-8 xl:mb-10">
          <Image src={success} alt="success" />
        </div>
        <Typography
          variant="h5"
          color="primary.700"
          className="futura font-medium leading-normal"
        >
          Payment Successful
        </Typography>
        <Typography
          variant="h5"
          color="primary.700"
          mb={0.5}
          className="futura font-medium"
        >
          Transaction ID: 1234567890AVGED
        </Typography>
        <Typography
          variant="body2"
          sx={{ marginBottom: { xs: 2, md: 2.5 } }}
          className="text-[#484848] max-w-lg text-center mx-auto"
        >
          Script review has been successfully paid for. Please note that script
          review process takes one week. You’ll be notified as soon as your
          script has been reviewed. Please check your dashboard regularly to see
          the review status on your project.
        </Typography>
        <Link href="/reviews" passHref>
          <Btn size="large" className="py-3 px-6">
            Back to dashboard
          </Btn>
        </Link>
      </div>
    </>
  );
};
PaymentSuccessful.getLayout = (page) => (
  <DashboardLayout>{page}</DashboardLayout>
);

export default PaymentSuccessful;
