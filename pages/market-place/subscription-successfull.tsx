import Footer from "@shared/Footer/Footer";
import Nav from "@shared/Layouts/GeneralLayout/Nav/Nav";
import SubscriptionSuccess from "components/SubscriptionSuccess/SubscriptionSuccess";
import Head from "next/head";

const subscriptionSuccessfull = () => {
  return (
    <>
      <Head>
        <title>Albantsho || Subscription Successfull </title>
      </Head>
      <Nav color="inherit" position="static" />
      <SubscriptionSuccess />
      <Footer />
    </>
  );
};

export default subscriptionSuccessfull;
