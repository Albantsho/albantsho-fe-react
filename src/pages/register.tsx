import AuthenticationLayout from "@shared/Layouts/AuthenticationLayout/AuthenticationLayout";
import AuthenticationNavbar from "@shared/Layouts/AuthenticationLayout/AuthenticationNavbar/AuthenticationNavbar";
import RegisterForm from "components/Register/RegisterForm/RegisterForm";
import RegisterFormTitle from "components/Register/RegisterFormTitle/RegisterFormTitle";
import Head from "next/head";
import { NextPageWithLayout } from "./_app";

const Register: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Albantsho || Sign Up</title>
      </Head>
      <AuthenticationNavbar
        text="Already have an account?"
        link="login"
        buttonText="SIGN IN"
      />
      <div className="overflow-hidden">
        <div data-aos="fade-up" data-aos-delay="300">
          <RegisterFormTitle />
          <RegisterForm />
        </div>
      </div>
    </>
  );
};

Register.getLayout = (page) => (
  <AuthenticationLayout>{page}</AuthenticationLayout>
);

export default Register;
