import AuthenticationLayout from "@shared/Layouts/AuthenticationLayout/AuthenticationLayout";
import SignupForm from "components/Signup/SignupForm/SignupForm";
import Head from "next/head";
import { NextPageWithLayout } from "./_app";

const Signup: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Albantsho || Sign Up</title>
      </Head>
      <SignupForm />
    </>
  );
};

Signup.getLayout = (page) => (
  <AuthenticationLayout>{page}</AuthenticationLayout>
);

export default Signup;
