import emptyBlogs from "@assets/images/empty-blogs.png";
import WalletLayout from "@shared/Layouts/WalletLayout/WalletLayout";
import Loader from "@shared/Loader/Loader";
import useTransactionApi from "apis/transaction.api";
import TransactionHistory from "components/Wallet/TransactionHistory/TransactionHistory";
import Head from "next/head";
import Image from "next/image";
import { useQuery } from "react-query";
import errorHandler from "utils/error-handler";
import { NextPageWithLayout } from "../_app";

const TransactionHistoryPage: NextPageWithLayout = () => {
  const { getAllPayments, getAllWithdraws } = useTransactionApi();

  const { data: paymentsData, isLoading: loadingGetPayments } = useQuery(
    "wallet",
    () => getAllPayments(),
    {
      onError: (error) => errorHandler(error),
    }
  );

  const { data: withdrawsData, isLoading: loadingGetWithdraws } = useQuery(
    "wallet",
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
        withdrawsData.withdraws.length + paymentsData.payments.length > 1 ? (
          <Image
            width={384}
            height={384}
            loading="lazy"
            className="w-fit h-fit mx-auto mt-14 lg:mt-24"
            src={emptyBlogs}
            alt="empty blog list"
          />
        ) : (
          <TransactionHistory
            paymentsList={paymentsData.payments}
            withdrawList={withdrawsData.withdraws}
          />
        )
      ) : (
        <Loader setCustomHeight="min-h-[65vh]" />
      )}
    </>
  );
};

TransactionHistoryPage.getLayout = (pages) => (
  <WalletLayout>{pages}</WalletLayout>
);

export default TransactionHistoryPage;
