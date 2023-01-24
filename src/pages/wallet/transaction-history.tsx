import WalletLayout from "@shared/Layouts/WalletLayout/WalletLayout";
import Head from "next/head";
import { NextPageWithLayout } from "../_app";
import TransactionHistory from "components/Wallet/TransactionHistory/TransactionHistory";
import { useEffect, useState } from "react";
import useTransactionApi from "apis/transaction.api";
import { IPayment, IWithdraw } from "interfaces/transaction";
import { DotLoader } from "react-spinners";

const TransactionHistoryPage: NextPageWithLayout = () => {
  const [loading, setLoading] = useState(false);
  const { getAllPayments, getAllWithdraws } = useTransactionApi();
  const [paymentsList, setPaymentsList] = useState<Array<IPayment>>([]);
  const [withdrawList, setWithdrawList] = useState<Array<IWithdraw>>([]);

  useEffect(() => {
    async function getTransactionsFunc() {
      try {
        setLoading(true);
        const resPayment = await getAllPayments();
        const resWithdraw = await getAllWithdraws();
        setPaymentsList(resPayment.data.payments);
        setWithdrawList(resWithdraw.data.withdraws);
        setLoading(false);
      } catch (error) {
        ("");
      }
    }

    getTransactionsFunc();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Head>
        <title>Albantsho || Transaction History</title>
      </Head>
      {loading ? (
        <DotLoader color="#7953B5" className="mx-auto mt-10" />
      ) : (
        <TransactionHistory
          paymentsList={paymentsList}
          withdrawList={withdrawList}
        />
      )}
    </>
  );
};

TransactionHistoryPage.getLayout = (pages) => (
  <WalletLayout>{pages}</WalletLayout>
);

export default TransactionHistoryPage;
