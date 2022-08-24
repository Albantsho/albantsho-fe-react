import AuthenticationLayout from "@shared/Layouts/AuthenticationLayout/AuthenticationLayout";
import SigninForm from "components/Signin/SigninForm";
import Head from "next/head";
import { NextPageWithLayout } from "./_app";

const Signin: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Albantsho || Login</title>
      </Head>
      <SigninForm />
    </>
  );
};

Signin.getLayout = (page) => (
  <AuthenticationLayout>{page}</AuthenticationLayout>
);

export default Signin;
