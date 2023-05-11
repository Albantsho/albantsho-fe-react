import WalletLayout from "@shared/Layouts/WalletLayout/WalletLayout";
import Loader from "@shared/Loader/Loader";
import useTransactionApi from "apis/transaction.api";
import PaymentHistory from "components/Wallet/PaymentHistory/PaymentHistory";
import Head from "next/head";
import { useQuery } from "react-query";
import errorHandler from "utils/error-handler";
import { NextPageWithLayout } from "../_app";

const controller = new AbortController();

const PaymentHistoryPage: NextPageWithLayout = () => {
  const { getAllPayments } = useTransactionApi(controller);

  const { data: paymentsData, isLoading: loadingGetPayments } = useQuery(
    ["wallet", "payments"],
    () => getAllPayments(),
    {
      onError: (error) => errorHandler(error),
    }
  );

  return (
    <>
      <Head>
        <title>Albantsho || Payment History</title>
      </Head>
      {!loadingGetPayments && paymentsData ? (
        <PaymentHistory paymentsList={paymentsData.payments} />
      ) : (
        <Loader setCustomHeight="min-h-[50vh]" />
      )}
    </>
  );
};

PaymentHistoryPage.getLayout = (pages) => <WalletLayout>{pages}</WalletLayout>;

export default PaymentHistoryPage;
