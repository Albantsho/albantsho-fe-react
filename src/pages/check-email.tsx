import Head from "next/head";
import CheckEmail from "components/CheckEmail/CheckEmail";
import AuthenticationLayout from "@shared/Layouts/AuthenticationLayout/AuthenticationLayout";
import { NextPageWithLayout } from "./_app";
import AuthenticationNavbar from "@shared/Layouts/AuthenticationLayout/AuthenticationNavbar/AuthenticationNavbar";

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
