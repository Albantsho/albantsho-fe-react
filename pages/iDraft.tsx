import GeneralLayout from "@shared/Layouts/GeneralLayout/GeneralLayout";
import Head from "next/head";
import { NextPageWithLayout } from "./_app";

const IDraft: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Albantsho || iDraft</title>
      </Head>
    </>
  );
};

IDraft.getLayout = (page) => (
  <GeneralLayout title="Under Construction">{page}</GeneralLayout>
);

export default IDraft;
