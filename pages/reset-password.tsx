import Head from "next/head";


import AuthenticationLayout from "@shared/Layouts/AuthenticationLayout/AuthenticationLayout";
import ResetPassword from "components/ResetPassword/ResetPassword";
import { NextPageWithLayout } from "./_app";
import NavbarAuthentication from "@shared/Layouts/AuthenticationLayout/NavbarAuthentication/NavbarAuthentication";

const ResetPasswordPage: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Albantsho || Verify Email</title>
      </Head>
      <NavbarAuthentication
        text="Already have an account?"
        link="signin"
        buttonText="SIGN IN"
      />
      <ResetPassword />
    </>
  );
};

ResetPasswordPage.getLayout = (page) => (
  <AuthenticationLayout>{page}</AuthenticationLayout>
);

export default ResetPasswordPage;
