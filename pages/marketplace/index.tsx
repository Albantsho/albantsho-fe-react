import MarketplaceLayout from "@shared/Layouts/MarketplaceLayout/MarketplaceLayout";
import MarketplaceProducts from "components/Marketplace/Index/MarketList/MarketplaceProducts";
import PaginationMarketList from "components/Marketplace/Index/PaginationMarketList/PaginationMarketList";
import TabsMarketplace from "components/Marketplace/Index/TabsMarketplace/TabsMarketplace";
import Head from "next/head";
import React from "react";
import { NextPageWithLayout } from "../_app";

const marketPlace: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Albantsho || Market Place</title>
      </Head>
      <TabsMarketplace />
      <MarketplaceProducts />
      <PaginationMarketList />
    </>
  );
};

marketPlace.getLayout = (page) => (
  <MarketplaceLayout
    description={`"To make a great film you need three
things: the script, the script and the script.
- Alfred Hitchcock`}
  >
    {page}
  </MarketplaceLayout>
);

export default marketPlace;
