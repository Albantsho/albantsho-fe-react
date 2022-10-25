import AuthenticationLayout from "@shared/Layouts/AuthenticationLayout/AuthenticationLayout";
import AuthenticationNavbar from "@shared/Layouts/AuthenticationLayout/AuthenticationNavbar/AuthenticationNavbar";
import LoginForm from "components/Login/LoginForm/LoginForm";
import TitleLoginForm from "components/Login/TitleLoginForm/TitleLoginForm";
import Head from "next/head";
import { NextPageWithLayout } from "./_app";

const Login: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Albantsho || Login</title>
      </Head>
      <AuthenticationNavbar
        text="Don’t have an account yet?"
        link="register"
        buttonText="SIGN UP"
      />
      <div className="overflow-hidden">
        <div data-aos="fade-up" data-aos-delay="300">
          <TitleLoginForm />
          <LoginForm />
        </div>
      </div>
    </>
  );
};

Login.getLayout = (page) => <AuthenticationLayout>{page}</AuthenticationLayout>;

export default Login;
