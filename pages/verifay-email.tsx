import Head from "next/head";

import VerifyEmail from "components/VerifyEmail/VerifyEmail";

import { NextPageWithLayout } from "./_app";
import AuthenticationLayout from "@shared/Layouts/AuthenticationLayout/AuthenticationLayout";

const VerifyEmailPage: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Albantsho || Verify Email</title>
      </Head>
      
      <VerifyEmail />
    </>
  );
};

VerifyEmailPage.getLayout = (page) => (
  <AuthenticationLayout>{page}</AuthenticationLayout>
);

export default VerifyEmailPage;
