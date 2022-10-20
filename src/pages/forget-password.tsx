import Head from "next/head";
import AuthenticationLayout from "@shared/Layouts/AuthenticationLayout/AuthenticationLayout";
import ForgetPassword from "components/ForgetPassword/ForgetPassword";
import { NextPageWithLayout } from "./_app";
import AuthenticationNavbar from "@shared/Layouts/AuthenticationLayout/AuthenticationNavbar/AuthenticationNavbar";

const ForgetPasswordPage: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Albantsho || Forget Passord</title>
      </Head>
      <AuthenticationNavbar
        text="Already have an account?"
        link="signin"
        buttonText="SIGN IN"
      />
      <ForgetPassword />
    </>
  );
};

ForgetPasswordPage.getLayout = (page) => (
  <AuthenticationLayout>{page}</AuthenticationLayout>
);

export default ForgetPasswordPage;
