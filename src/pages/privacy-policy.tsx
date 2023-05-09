import GeneralLayout from "@shared/Layouts/GeneralLayout/GeneralLayout";
import PrivacyPolicy from "components/PrivacyPolicy/PrivacyPolicy";
import Head from "next/head";
import { NextPageWithLayout } from "./_app";

const PrivacyPolicyPage: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Albantsho || Privacy Policy</title>
      </Head>
      <PrivacyPolicy />
    </>
  );
};

PrivacyPolicyPage.getLayout = (page) => (
  <GeneralLayout title="Privacy Policy">{page}</GeneralLayout>
);

export default PrivacyPolicyPage;
