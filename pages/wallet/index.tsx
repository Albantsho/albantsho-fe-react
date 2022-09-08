import WalletLayout from "@shared/Layouts/WalletLayout/WalletLayout";
import Head from "next/head";
import { NextPageWithLayout } from "../_app";

const Wallet: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Albantsho || Wallet </title>
      </Head>
      wallet
    </>
  );
};

Wallet.getLayout = (pages) => <WalletLayout>{pages}</WalletLayout>;

export default Wallet;
