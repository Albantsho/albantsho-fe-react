import AuthenticationLayout from "@shared/Layouts/AuthenticationLayout/AuthenticationLayout";
import NavbarAuthentication from "@shared/Layouts/AuthenticationLayout/NavbarAuthentication/NavbarAuthentication";
import SignupForm from "components/Signup/SignupForm/SignupForm";
import TitleSignupForm from "components/Signup/TitleSignupForm/TitleSignupForm";
import Head from "next/head";
import { NextPageWithLayout } from "./_app";

const Signup: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Albantsho || Sign Up</title>
      </Head>
      <NavbarAuthentication
        text="Already have an account?"
        link="signin"
        buttonText="SIGN IN"
      />
      <TitleSignupForm />
      <SignupForm />
    </>
  );
};

Signup.getLayout = (page) => (
  <AuthenticationLayout>{page}</AuthenticationLayout>
);

export default Signup;
