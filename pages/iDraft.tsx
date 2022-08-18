import HeroSection from "@shared/HeroSection/HeroSection";
import Layout from "@shared/Layouts/Layout";
import Head from "next/head";
import { NextPageWithLayout } from "./_app";

const IDraft: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Albantsho || iDraft</title>
      </Head>
      <HeroSection title="Under Construction" />
    </>
  );
};

IDraft.getLayout = (page) => <Layout>{page}</Layout>;

export default IDraft;
