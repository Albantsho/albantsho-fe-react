import AuthenticationLayout from "@shared/Layouts/AuthenticationLayout/AuthenticationLayout";
import LoginForm from "components/Login/LoginFrom/LoginForm";
import Head from "next/head";
import { NextPageWithLayout } from "./_app";

const Login: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Albantsho || Login</title>
      </Head>
      <LoginForm />
    </>
  );
};

Login.getLayout = (page) => <AuthenticationLayout>{page}</AuthenticationLayout>;

export default Login;
