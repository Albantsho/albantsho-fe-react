import AuthenticationLayout from "@shared/Layouts/AuthenticationLayout/AuthenticationLayout";
import Welcome from "components/Welcome/Welcome";
import Head from "next/head";
import { NextPageWithLayout } from "./_app";

const WelcomePage: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Albantsho || Welcome</title>
      </Head>
      <Welcome />
    </>
  );
};

WelcomePage.getLayout = (page) => (
  <AuthenticationLayout>{page}</AuthenticationLayout>
);

export default WelcomePage;
