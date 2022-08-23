import Head from "next/head";

import AuthenticationLayout from "@shared/Layouts/AuthenticationLayout/AuthenticationLayout";
import ResetCompleted from "components/ResetCompleted/ResetCompleted";
import { NextPageWithLayout } from "./_app";

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
