import Head from "next/head";

import { NextPageWithLayout } from "./_app";
import AuthenticationLayout from "@shared/Layouts/AuthenticationLayout/AuthenticationLayout";
import ResetCompleted from "components/ResetCompleted/ResetCompleted";

const CompletedPasswordPage: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Albantsho || Complete Password</title>
      </Head>

      <ResetCompleted />
    </>
  );
};

CompletedPasswordPage.getLayout = (page) => (
  <AuthenticationLayout>{page}</AuthenticationLayout>
);

export default CompletedPasswordPage;
