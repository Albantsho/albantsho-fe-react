import AuthenticationLayout from "@shared/Layouts/AuthenticationLayout/AuthenticationLayout";
import LoginForm from "components/Login/LoginForm";
import Head from "next/head";
import { NextPageWithLayout } from "./_app";

const Signin: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Albantsho || Login</title>
      </Head>
      <LoginForm />
    </>
  );
};

Signin.getLayout = (page) => <AuthenticationLayout>{page}</AuthenticationLayout>;

export default Signin;
