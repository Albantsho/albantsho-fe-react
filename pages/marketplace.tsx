import HeroSection from "@shared/HeroSection/HeroSection";
import Layout from "@shared/Layouts/Layout";
import Head from "next/head";
import { NextPageWithLayout } from "./_app";

const Marketplace: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Albantsho || Marketplace</title>
      </Head>
      <HeroSection title="Under Construction" />
    </>
  );
};

Marketplace.getLayout = (page) => <Layout>{page}</Layout>;

export default Marketplace;
