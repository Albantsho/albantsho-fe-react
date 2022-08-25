import Head from "next/head";

import CheckEmail from "components/CheckEmail/CheckEmail";

import AuthenticationLayout from "@shared/Layouts/AuthenticationLayout/AuthenticationLayout";
import { NextPageWithLayout } from "./_app";
import NavbarAuthentication from "@shared/Layouts/AuthenticationLayout/NavbarAuthentication/NavbarAuthentication";

const CheckEmailPage: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Albantsho || Check Email</title>
      </Head>
      <NavbarAuthentication
        text="Already have an account?"
        link="signin"
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
