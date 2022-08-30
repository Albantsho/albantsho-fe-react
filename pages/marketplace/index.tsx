import GeneralLayout from "@shared/Layouts/GeneralLayout/GeneralLayout";
import MarketplaceLayout from "@shared/Layouts/MarketplaceLayout/MarketplaceLayout";
import MarketPlaceProducts from "components/MarketPlace/MarketList/MarketPlaceProducts";
import PaginationMarketList from "components/MarketPlace/PaginationMarketList/PaginationMarketList";
import TabsMarketPlace from "components/MarketPlace/TabsMarketPlace/TabsMarketPlace";
import Head from "next/head";
import React from "react";
import { NextPageWithLayout } from "../_app";

const marketPlace: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Albantsho || Market Place</title>
      </Head>

      <div className=" flex flex-col justify-start w-full">
        <TabsMarketPlace />
        <MarketPlaceProducts />
        <PaginationMarketList />
      </div>
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
