import AuthenticationLayout from "@shared/Layouts/AuthenticationLayout/AuthenticationLayout";
import AuthenticationNavbar from "@shared/Layouts/AuthenticationLayout/AuthenticationNavbar/AuthenticationNavbar";
import ResetPasswordConfirmation from "components/ResetPasswordConfirmation/ResetPasswordConfirmation";
import Head from "next/head";
import { NextPageWithLayout } from "./_app";

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
