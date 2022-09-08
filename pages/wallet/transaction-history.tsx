import WalletLayout from "@shared/Layouts/WalletLayout/WalletLayout";
import Head from "next/head";
import { NextPageWithLayout } from "../_app";

const TransactionHistory: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Albantsho || Transaction History </title>
      </Head>
      TransactionHistory
    </>
  );
};

TransactionHistory.getLayout = (pages) => <WalletLayout>{pages}</WalletLayout>;

export default TransactionHistory;
