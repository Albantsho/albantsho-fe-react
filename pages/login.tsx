import AuthenticationLayout from "@shared/Layouts/AuthenticationLayout/AuthenticationLayout";
import GeneralLayout from "@shared/Layouts/GeneralLayout/GeneralLayout";
import ImageLogin from "components/Login/ImageLogin/ImageLogin";
import LoginForm from "components/Login/LoginFrom/LoginForm";
import Head from "next/head";
import { NextPageWithLayout } from "./_app";

const Login: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Albantsho || Login</title>
      </Head>
      <div className="container max-w-screen-2xl mx-auto flex flex-col md:flex-row">
        <LoginForm />
      </div>
    </>
  );
};

Login.getLayout = (page) => (
  <AuthenticationLayout>{page}</AuthenticationLayout>
);

export default Login;
