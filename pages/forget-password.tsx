import Head from "next/head";

import AuthenticationLayout from "@shared/Layouts/AuthenticationLayout/AuthenticationLayout";
import ForgetPassword from "components/ForgetPassword/ForgetPassword";
import { NextPageWithLayout } from "./_app";

const ForgetPasswordPage: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Albantsho || Forget Passord</title>
      </Head>

      <ForgetPassword />
    </>
  );
};

ForgetPasswordPage.getLayout = (page) => (
  <AuthenticationLayout>{page}</AuthenticationLayout>
);

export default ForgetPasswordPage;
