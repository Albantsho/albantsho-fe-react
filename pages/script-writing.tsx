import HeroSection from "@shared/HeroSection/HeroSection";
import Layout from "@shared/Layouts/Layout";
import Head from "next/head";
import { NextPageWithLayout } from "./_app";

const Login: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Albantsho || Script Writing</title>
      </Head>
      <HeroSection title="Under Construction" />
    </>
  );
};

Login.getLayout = (page) => <Layout>{page}</Layout>;

export default Login;
