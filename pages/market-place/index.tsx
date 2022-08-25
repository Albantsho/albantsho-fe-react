import GeneralLayout from "@shared/Layouts/GeneralLayout/GeneralLayout";
import MarketPlaceProducts from "components/MarketPlace/MarketList/MarketPlaceProducts";
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
      <main>
        <TabsMarketPlace />
        <MarketPlaceProducts />
      </main>
    </>
  );
};

marketPlace.getLayout = (page) => (
  <GeneralLayout
    title={`"To make a great film you need three
things: the script, the script and the script.
- Alfred Hitchcock`}
  >
    {page}
  </GeneralLayout>
);

export default marketPlace;
