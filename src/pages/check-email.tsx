import AuthenticationLayout from "@shared/Layouts/AuthenticationLayout/AuthenticationLayout";
import AuthenticationNavbar from "@shared/Layouts/AuthenticationLayout/AuthenticationNavbar/AuthenticationNavbar";
import CheckEmail from "components/CheckEmail/CheckEmail";
import Head from "next/head";
import { NextPageWithLayout } from "./_app";

const CheckEmailPage: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Albantsho || Check Email</title>
      </Head>
      <AuthenticationNavbar
        text="Already have an account?"
        link="login"
        buttonText="SIGN IN"
      />
      <CheckEmail />
    </>
  );
};

CheckEmailPage.getLayout = (page) => (
  <AuthenticationLayout>{page}</AuthenticationLayout>
);

export default CheckEmailPage;
