import Head from "next/head";

import AuthenticationLayout from "@shared/Layouts/AuthenticationLayout/AuthenticationLayout";
import ResetPasswordConfirmation from "components/ResetPasswordConfirmation/ResetPasswordConfirmation";
import { NextPageWithLayout } from "./_app";
import AuthenticationNavbar from "@shared/Layouts/AuthenticationLayout/AuthenticationNavbar/AuthenticationNavbar";

const ResetPasswordConfirmationPage: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Albantsho || Complete Password</title>
      </Head>
      <AuthenticationNavbar
        text="Already have an account?"
        link="login"
        buttonText="SIGN IN"
      />
      <ResetPasswordConfirmation />
    </>
  );
};

ResetPasswordConfirmationPage.getLayout = (page) => (
  <AuthenticationLayout>{page}</AuthenticationLayout>
);

export default ResetPasswordConfirmationPage;
