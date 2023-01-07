import WalletLayout from "@shared/Layouts/WalletLayout/WalletLayout";
import WithdrawSuccessful from "components/Wallet/WithdrawSuccessful/WithdrawSuccessful";
import Head from "next/head";
import { NextPageWithLayout } from "../_app";

const WithdrawSuccessfulPage: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Albantsho || Withdraw Successful</title>
      </Head>
      <WithdrawSuccessful />
    </>
  );
};

WithdrawSuccessfulPage.getLayout = (pages) => (
  <WalletLayout>{pages}</WalletLayout>
);

export default WithdrawSuccessfulPage;
