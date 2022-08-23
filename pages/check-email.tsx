import Head from "next/head";

import CheckEmail from "components/CheckEmail/CheckEmail";

import { NextPageWithLayout } from "./_app";
import AuthenticationLayout from "@shared/Layouts/AuthenticationLayout/AuthenticationLayout";

const CheckEmailPage: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Albantsho || Check Email</title>
      </Head>
      
      <CheckEmail />
    </>
  );
};

CheckEmailPage.getLayout = (page) => (
  <AuthenticationLayout>{page}</AuthenticationLayout>
);

export default CheckEmailPage;
