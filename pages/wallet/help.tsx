import WalletLayout from "@shared/Layouts/WalletLayout/WalletLayout";
import Head from "next/head";
import { NextPageWithLayout } from "../_app";

const Help: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Albantsho || Help </title>
      </Head>
      Help
    </>
  );
};

Help.getLayout = (pages) => <WalletLayout>{pages}</WalletLayout>;

export default Help;
