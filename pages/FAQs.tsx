import HeroSection from "@shared/HeroSection/HeroSection";
import Layout from "@shared/Layouts/Layout";
import Questions from "components/FAQs/Questions/Questions";
import Head from "next/head";
import { NextPageWithLayout } from "./_app";

const FAQs: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Albantsho || FAQ’s</title>
      </Head>
      <HeroSection title="FAQ’s" />
      <div className="pt-5 pb-12">
        <Questions />
      </div>
    </>
  );
};

FAQs.getLayout = (page: React.ReactElement) => <Layout>{page}</Layout>;

export default FAQs;
