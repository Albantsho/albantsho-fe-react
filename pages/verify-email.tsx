import AuthenticationLayout from "@shared/Layouts/AuthenticationLayout/AuthenticationLayout";
import NavbarAuthentication from "@shared/Layouts/AuthenticationLayout/NavbarAuthentication/NavbarAuthentication";
import VerifyEmail from "components/VerifyEmail/VerifyEmail";
import Head from "next/head";
import { NextPageWithLayout } from "./_app";

const VerifyEmailPage: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Albantsho || Verify Email</title>
      </Head>
      <NavbarAuthentication
        text="Don’t have an account yet?"
        link="signup"
        buttonText="SIGN UP"
      />
      <VerifyEmail />
    </>
  );
};

VerifyEmailPage.getLayout = (page) => (
  <AuthenticationLayout>{page}</AuthenticationLayout>
);

export default VerifyEmailPage;
