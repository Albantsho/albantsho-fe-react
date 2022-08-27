import Footer from "@shared/Footer/Footer";
import Nav from "@shared/Layouts/GeneralLayout/Nav/Nav";
import SubscriptionPage from "components/Subscription/SubscriptionPage";
import Head from "next/head";

const Subscription = () => {
  return (
    <>
      <Head>
        <title>Albantsho || Subscription Successfull </title>
      </Head>
      <Nav color="inherit" position="static" />
      <SubscriptionPage />
      <Footer />
    </>
  );
};

export default Subscription;
