import IDraftLayout from "@shared/Layouts/IDraftLayout/IDrafyLayout";
import HeadingIDraftTAC from "components/IDraftTAC/HeadingIDraftTAC/HeadingIDraftTAC";
import IDraftTAC from "components/IDraftTAC/IDraftTAC";
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
