import Brands from "components/Home/Brands/Brands";
import HeroSection from "components/Home/HeroSection/HeroSection";
import type { NextPage } from "next";
import dynamic from "next/dynamic";
import Head from "next/head";
import { Suspense } from "react";

const WhyAlbantsho = dynamic(
  () => import("components/Home/WhyAlbantsho/WhyAlbantsho")
);
const Monitors = dynamic(() => import("components/Home/Monitors/Monitors"));

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Albantsho</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroSection />
      <Brands />
      <Suspense fallback={null}>
        <WhyAlbantsho />
        <Monitors />
      </Suspense>
    </>
  );
};

export default Home;
