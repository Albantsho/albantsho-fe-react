import IDraftLayout from "@shared/Layouts/IDraftLayout/IDrafyLayout";
import IDraftTAC from "components/IDraft/IDeaftTAC/DescriptionIDraftTAC/DescriptionIDraftTAC";
import HeadingIDraftTAC from "components/IDraft/IDeaftTAC/HeadingIDraftTAC/HeadingIDraftTAC";
import Head from "next/head";
import { NextPageWithLayout } from "../_app";

const IDraftTermsAndConditions: NextPageWithLayout = () => {
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

IDraftTermsAndConditions.getLayout = (page) => (
  <IDraftLayout>{page}</IDraftLayout>
);

export default IDraftTermsAndConditions;
