import Footer from "@shared/Footer/Footer";
import Nav from "@shared/Layouts/GeneralLayout/Nav/Nav";
import SubscriptionPlans from "components/MarketPlace/SubscriptionPlans/SubscriptionPlans";

import Head from "next/head";

const Subscription = () => {
  return (
    <>
      <Head>
        <title>Albantsho || Subscription Successfull </title>
      </Head>
      <Nav color="inherit" position="static" />
      <SubscriptionPlans />
      <Footer />
    </>
  );
};

export default Subscription;
