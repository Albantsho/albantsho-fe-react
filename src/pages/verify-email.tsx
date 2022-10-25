import AuthenticationLayout from "@shared/Layouts/AuthenticationLayout/AuthenticationLayout";
import AuthenticationNavbar from "@shared/Layouts/AuthenticationLayout/AuthenticationNavbar/AuthenticationNavbar";
import VerifyEmail from "components/VerifyEmail/VerifyEmail";
import Head from "next/head";
import { NextPageWithLayout } from "./_app";

const VerifyEmailPage: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Albantsho || Verify Email</title>
      </Head>
      <AuthenticationNavbar
        text="Don’t have an account yet?"
        link="register"
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
