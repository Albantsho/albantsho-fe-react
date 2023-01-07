import DashboardLayout from "@shared/Layouts/DashboardLayout/DashboardLayout";
import Head from "next/head";
import { NextPageWithLayout } from "../../../../_app";
import success from "@assets/images/success.png";
import { Typography } from "@mui/material";
import Btn from "@shared/Btn/Btn";
import Image from "next/image";
import Link from "next/link";
import routes from "routes/routes";
import { useRouter } from "next/router";

const PaymentSuccessful: NextPageWithLayout = () => {
  const { query } = useRouter();

  return (
    <>
      <Head>
        <title>Albantsho || Payment Successful</title>
      </Head>
      <div
        data-aos="zoom-in"
        data-aos-delay="300"
        className="py-24 md:py-32 px-5 md:px-16 mt-5 shadow-primary text-center rounded-md mx-auto bg-white"
      >
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
          className="futura font-medium sm:mb-3 leading-normal mb-2"
        >
          Transaction ID: {query.transaction_id}
        </Typography>
        <Typography
          variant="body2"
          sx={{ marginBottom: { xs: 2, md: 2.5, lg: 4, xl: 5 } }}
          className="text-[#484848] max-w-lg text-center mx-auto"
        >
          Script review has been successfully paid for. Please note that script
          review process takes one week. You’ll be notified as soon as your
          script has been reviewed. Please check your dashboard regularly to see
          the review status on your project.
        </Typography>
        <Link legacyBehavior href={routes.reviewsDashboard.url} passHref>
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
