import Head from "next/head";

import { NextPageWithLayout } from "./_app";
import AuthenticationLayout from "@shared/Layouts/AuthenticationLayout/AuthenticationLayout";
import ResetCompleted from "components/ResetCompleted/ResetCompleted";

const ResetPasswordConfirmation: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Albantsho || Complete Password</title>
      </Head>

      <ResetCompleted />
    </>
  );
};

ResetPasswordConfirmation.getLayout = (page) => (
  <AuthenticationLayout>{page}</AuthenticationLayout>
);

export default ResetPasswordConfirmation;
