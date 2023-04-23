import WalletLayout from "@shared/Layouts/WalletLayout/WalletLayout";
import useTransactionApi from "apis/transaction.api";
import useWalletApi from "apis/Wallet.api";
import useWithdrawApi from "apis/withdraw.api";
import TransactionHistory from "components/Wallet/TransactionHistory/TransactionHistory";
import Head from "next/head";
import { useQuery } from "react-query";
import errorHandler from "utils/error-handler";
import { NextPageWithLayout } from "../_app";

const controller = new AbortController();

const TransactionHistoryPage: NextPageWithLayout = () => {
  const { getAllPayments } = useTransactionApi(controller);
  const { getAllWithdraws } = useWithdrawApi(controller);

  const { data: paymentsData, isLoading: loadingGetPayments } = useQuery(
    ["wallet", "payments"],
    () => getAllPayments(),
    {
      onError: (error) => errorHandler(error),
    }
  );

  const { data: withdrawsData, isLoading: loadingGetWithdraws } = useQuery(
    ["wallet", "withdraws"],
    () => getAllWithdraws(),
    {
      onError: (error) => errorHandler(error),
    }
  );

  return (
    <>
      <Head>
        <title>Albantsho || Transaction History</title>
      </Head>
      {!loadingGetPayments &&
      !loadingGetWithdraws &&
      paymentsData &&
      withdrawsData ? (
        <TransactionHistory
          paymentsList={paymentsData.payments}
          withdrawList={withdrawsData.withdraws}
        />
      ) : (
        <></>
      )}
    </>
  );
};

TransactionHistoryPage.getLayout = (pages) => (
  <WalletLayout>{pages}</WalletLayout>
);

export default TransactionHistoryPage;
