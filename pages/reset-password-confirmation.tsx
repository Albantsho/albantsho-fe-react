import Head from "next/head";

import AuthenticationLayout from "@shared/Layouts/AuthenticationLayout/AuthenticationLayout";
import ResetCompleted from "components/ResetCompleted/ResetCompleted";
import { NextPageWithLayout } from "./_app";
import NavbarAuthentication from "@shared/Layouts/AuthenticationLayout/NavbarAuthentication/NavbarAuthentication";

const ResetPasswordConfirmation: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Albantsho || Complete Password</title>
      </Head>
      <NavbarAuthentication
        text="Already have an account?"
        link="signin"
        buttonText="SIGN IN"
      />
      <ResetCompleted />
    </>
  );
};

ResetPasswordConfirmation.getLayout = (page) => (
  <AuthenticationLayout>{page}</AuthenticationLayout>
);

export default ResetPasswordConfirmation;
