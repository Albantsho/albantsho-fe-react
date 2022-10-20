import MarketplaceLayout from "@shared/Layouts/MarketplaceLayout/MarketplaceLayout";
import MarketplaceProducts from "components/Marketplace/Index/MarketplaceProducts/MarketplaceProducts";
import PaginationMarketList from "components/Marketplace/Index/PaginationMarketList/PaginationMarketList";
import MarketplaceTabs from "components/Marketplace/Index/MarketplaceTabs/MarketplaceTabs";
import Head from "next/head";
import { NextPageWithLayout } from "../_app";
import { useEffect } from "react";
import useMarketplaceApi from "apis/Marketplace.api";

const Marketplace: NextPageWithLayout = () => {
  const { getScripts } = useMarketplaceApi();
  useEffect(() => {
    async function fetchScripts() {
      const res = await getScripts();
    }
    fetchScripts();
  }, []);

  return (
    <>
      <Head>
        <title>Albantsho || Marketplace</title>
      </Head>
      <MarketplaceTabs />
      <MarketplaceProducts />
      <PaginationMarketList />
    </>
  );
};

Marketplace.getLayout = (page) => (
  <MarketplaceLayout
    description={`"To make a great film you need three
things: the script, the script and the script.
- Alfred Hitchcock`}
  >
    {page}
  </MarketplaceLayout>
);

export default Marketplace;
