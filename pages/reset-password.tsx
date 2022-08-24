import Head from "next/head";


import AuthenticationLayout from "@shared/Layouts/AuthenticationLayout/AuthenticationLayout";
import ResetPassword from "components/ResetPassword/ResetPassword";
import { NextPageWithLayout } from "./_app";

const ResetPasswordPage: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Albantsho || Verify Email</title>
      </Head>
      
      <ResetPassword />
    </>
  );
};

ResetPasswordPage.getLayout = (page) => (
  <AuthenticationLayout>{page}</AuthenticationLayout>
);

export default ResetPasswordPage;
