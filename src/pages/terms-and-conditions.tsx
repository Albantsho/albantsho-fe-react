import GeneralLayout from "@shared/Layouts/GeneralLayout/GeneralLayout";
import TermsAndConditions from "components/TermsAndConditions/TermsAndConditions";
import Head from "next/head";
import { NextPageWithLayout } from "./_app";

const TermsAndConditionsPage: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Albantsho || Terms and Conditions</title>
      </Head>
      <TermsAndConditions />
    </>
  );
};

TermsAndConditionsPage.getLayout = (page) => (
  <GeneralLayout title="Terms and Conditions">{page}</GeneralLayout>
);

export default TermsAndConditionsPage;
