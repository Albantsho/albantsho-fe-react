import Brands from "components/Home/Brands/Brands";
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
      <div className="max-w-screen-2xl mx-auto">
        <HeroSection />
        <Brands />
      </div>
    </>
  );
};

export default Home;
