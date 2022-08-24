import AuthenticationLayout from "@shared/Layouts/AuthenticationLayout/AuthenticationLayout";
import VerifyEmail from "components/VerifyEmail/VerifyEmail";
import Head from "next/head";
import { NextPageWithLayout } from "./_app";

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
