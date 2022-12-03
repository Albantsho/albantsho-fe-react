import WalletLayout from "@shared/Layouts/WalletLayout/WalletLayout";
import Head from "next/head";
import { NextPageWithLayout } from "../_app";
import TransactionHistory from "components/Wallet/TransactionHistory/TransactionHistory";

const TransactionHistoryPage: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Albantsho || Transaction History</title>
      </Head>
      <TransactionHistory />
    </>
  );
};

TransactionHistoryPage.getLayout = (pages) => (
  <WalletLayout>{pages}</WalletLayout>
);

export default TransactionHistoryPage;
