import Layout from "@shared/Layouts/Layout";
import HeroSection from "components/AboutUs/HeroSection/HeroSection";
import Head from "next/head";
import type { NextPageWithLayout } from "./_app";

const AboutUs: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Albantsho || About Us</title>
      </Head>
      <HeroSection />
    </>
  );
};

AboutUs.getLayout = (page: React.ReactElement) => <Layout>{page}</Layout>;

export default AboutUs;
