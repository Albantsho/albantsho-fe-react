import IDrafyLayout from "@shared/Layouts/IDraftLayout/IDrafyLayout";
import IDraftSection from "components/IDraft/IDraftSection";
import Head from "next/head";
import { NextPageWithLayout } from "./_app";

const IDraft: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Albantsho || iDraft</title>
      </Head>
      <IDraftSection />
    </>
  );
};

IDraft.getLayout = (page) => <IDrafyLayout>{page}</IDrafyLayout>;

export default IDraft;
