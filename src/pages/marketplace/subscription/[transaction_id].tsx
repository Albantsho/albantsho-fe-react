import { Typography } from "@mui/material";
import Btn from "@shared/Btn/Btn";
import Footer from "@shared/Footer/Footer";
import Nav from "@shared/Layouts/GeneralLayout/Nav/Nav";
import Head from "next/head";
import Link from "next/link";
import success from "@assets/images/success.png";
import Image from "next/image";
import routes from "routes/routes";
import { Suspense } from "react";
import { useRouter } from "next/router";

const SubscriptionSuccessful = () => {
  const { query } = useRouter();

  return (
    <>
      <Head>
        <title>Albantsho || Subscription Successful</title>
      </Head>
      <Nav color="inherit" position="static" />
      <div className="pt-24 md:pt-32 px-10 md:px-16 text-center min-h-screen md:max-w-lg mx-auto">
        <div>
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
          className="futura font-medium leading-normal"
        >
          Transaction ID: {query.transaction_id}
        </Typography>
        <Typography
          variant="body2"
          sx={{ marginBottom: { xs: 2, md: 2.5 } }}
          className="text-[#484848]"
        >
          Subscription activated! you now have unlimited access to all scripts
          on the platform!
        </Typography>
        <Link href={`${routes.marketplace.url}`} passHref>
          <Btn size="large" className="py-3 px-6">
            Back to marketplace
          </Btn>
        </Link>
      </div>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </>
  );
};

export default SubscriptionSuccessful;