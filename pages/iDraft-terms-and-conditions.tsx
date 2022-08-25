import IDrafyLayout from "@shared/Layouts/IDraftLayout/IDrafyLayout";
import HeadingIDraftTAC from "components/IDraftTAC/HeadingIDraftTAC/HeadingIDraftTAC";
import IDraftTAC from "components/IDraftTAC/IDraftTAC";
import Head from "next/head";
import { NextPageWithLayout } from "./_app";

const iDraftTermsAndConditions: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Albantsho || iDraft Terms and Conditions</title>
      </Head>
      <HeadingIDraftTAC />
      <IDraftTAC />
    </>
  );
};

iDraftTermsAndConditions.getLayout = (page) => (
  <IDrafyLayout>{page}</IDrafyLayout>
);

export default iDraftTermsAndConditions;
