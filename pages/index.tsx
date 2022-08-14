import HeroSection from "components/Home/HeroSection/HeroSection";
import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Albantsho</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroSection />
    </>
  );
};

export default Home;
