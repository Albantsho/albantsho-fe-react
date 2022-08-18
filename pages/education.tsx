import HeroSection from "@shared/HeroSection/HeroSection";
import Layout from "@shared/Layouts/Layout";
import Head from "next/head";
import { NextPageWithLayout } from "./_app";

const Education: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Albantsho || Education</title>
      </Head>
      <HeroSection title="Under Construction" />
    </>
  );
};

Education.getLayout = (page) => <Layout>{page}</Layout>;

export default Education;
