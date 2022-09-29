import AuthenticationLayout from "@shared/Layouts/AuthenticationLayout/AuthenticationLayout";
import NavbarAuthentication from "@shared/Layouts/AuthenticationLayout/NavbarAuthentication/NavbarAuthentication";
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
      <NavbarAuthentication
        text="Don’t have an account yet?"
        link="signup"
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
