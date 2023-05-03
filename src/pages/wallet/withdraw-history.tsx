import WalletLayout from "@shared/Layouts/WalletLayout/WalletLayout";
import Loader from "@shared/Loader/Loader";
import useWithdrawApi from "apis/withdraw.api";
import WithdrawHistory from "components/Wallet/WithdrawHistory/WithdrawHistory";
import Head from "next/head";
import { useQuery } from "react-query";
import errorHandler from "utils/error-handler";
import { NextPageWithLayout } from "../_app";

const controller = new AbortController();

const PaymentHistoryPage: NextPageWithLayout = () => {
  const { getAllWithdraws } = useWithdrawApi(controller);

  const {
    data: withdrawsData,
    isLoading: loadingGetWithdraws,
    refetch,
  } = useQuery(["wallet", "withdraws"], () => getAllWithdraws(), {
    onError: (error) => errorHandler(error),
  });

  return (
    <>
      <Head>
        <title>Albantsho || Payment History</title>
      </Head>
      {!loadingGetWithdraws && withdrawsData ? (
        <WithdrawHistory
          withdrawList={withdrawsData.withdraws}
          refetch={refetch}
        />
      ) : (
        <Loader setCustomHeight="min-h-[50vh]" />
      )}
    </>
  );
};

PaymentHistoryPage.getLayout = (pages) => <WalletLayout>{pages}</WalletLayout>;

export default PaymentHistoryPage;
