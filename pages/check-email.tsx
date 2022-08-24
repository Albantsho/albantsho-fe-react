import Head from "next/head";

import CheckEmail from "components/CheckEmail/CheckEmail";

import AuthenticationLayout from "@shared/Layouts/AuthenticationLayout/AuthenticationLayout";
import { NextPageWithLayout } from "./_app";

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
