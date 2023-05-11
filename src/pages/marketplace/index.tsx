import MarketplaceLayout from "@shared/Layouts/MarketplaceLayout/MarketplaceLayout";
import ScriptList from "components/Marketplace/Index";
import Head from "next/head";
import { NextPageWithLayout } from "../_app";

const MarketplacePage: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Albantsho || Marketplace</title>
      </Head>
      <ScriptList />
    </>
  );
};

MarketplacePage.getLayout = (page) => (
  <MarketplaceLayout
    description={`"To make a great film you need three
things: the script, the script and the script.
- Alfred Hitchcock`}
  >
    {page}
  </MarketplaceLayout>
);

export default MarketplacePage;
