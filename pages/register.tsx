import AuthenticationLayout from "@shared/Layouts/AuthenticationLayout/AuthenticationLayout";
import NavbarAuthentication from "@shared/Layouts/AuthenticationLayout/NavbarAuthentication/NavbarAuthentication";
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
      <NavbarAuthentication
        text="Already have an account?"
        link="signin"
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
