import Head from "next/head";

import ImageSignup from "components/Signup/ImageSignup/ImageSignup";
import SignupForm from "components/Signup/SignupForm/SignupForm";
import VerifyEmail from "components/VerifyEmail/VerifyEmail";
import ForgetPassword from "components/ForgetPassword/ForgetPassword";
import CheckEmail from "components/CheckEmail/CheckEmail";
import ResetPassword from "components/ResetPassword/ResetPassword";
import GeneralLayout from "@shared/Layouts/GeneralLayout/GeneralLayout";
import { NextPageWithLayout } from "./_app";
import AuthenticationLayout from "@shared/Layouts/AuthenticationLayout/AuthenticationLayout";

const Signup: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Albantsho || Sign Up</title>
      </Head>
     
        {/* <SignupForm /> */}
        <VerifyEmail />
        {/* <ForgetPassword /> */}
        {/* <CheckEmail /> */}
        {/* <ResetPassword /> */}
        {/* <ResetCompleted/> */}
    </>
  );
};

Signup.getLayout = (page) => <AuthenticationLayout>{page}</AuthenticationLayout>;

export default Signup;
