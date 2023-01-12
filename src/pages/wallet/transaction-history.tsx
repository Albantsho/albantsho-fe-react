import WalletLayout from "@shared/Layouts/WalletLayout/WalletLayout";
import Head from "next/head";
import { NextPageWithLayout } from "../_app";
import TransactionHistory from "components/Wallet/TransactionHistory/TransactionHistory";
import { useEffect, useState } from "react";
import useTransactionApi from "apis/transaction.api";

const TransactionHistoryPage: NextPageWithLayout = () => {
  const [loading, setLoading] = useState(false);
  const { getAllPayments } = useTransactionApi();

  useEffect(() => {
    async function getTransactionsFunc() {
      try {
        const res = await getAllPayments();
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    }

    getTransactionsFunc();
  }, []);

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
