import AuthenticationLayout from "@shared/Layouts/AuthenticationLayout/AuthenticationLayout";
import NavbarAuthentication from "@shared/Layouts/AuthenticationLayout/NavbarAuthentication/NavbarAuthentication";
import SigninForm from "components/Signin/SigninForm/SigninForm";
import TitleSigninForm from "components/Signin/TitleSigninForm/TitleSigninForm";
import Head from "next/head";
import { NextPageWithLayout } from "./_app";

const Signin: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Albantsho || Login</title>
      </Head>
      <NavbarAuthentication
        text="Don’t have an account yet?"
        link="signup"
        buttonText="SIGN UP"
      />
      <TitleSigninForm />
      <SigninForm />
    </>
  );
};

Signin.getLayout = (page) => (
  <AuthenticationLayout>{page}</AuthenticationLayout>
);

export default Signin;
