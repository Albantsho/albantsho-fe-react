import GeneralLayout from "@shared/Layouts/GeneralLayout/GeneralLayout";
import Head from "next/head";
import { NextPageWithLayout } from "./_app";

const Marketplace: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Albantsho || Marketplace</title>
      </Head>
    </>
  );
};

Marketplace.getLayout = (page) => (
  <GeneralLayout title="Under Construction">{page}</GeneralLayout>
);

export default Marketplace;
