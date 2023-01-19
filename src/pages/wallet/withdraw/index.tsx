import WalletLayout from "@shared/Layouts/WalletLayout/WalletLayout";
import Withdraw from "components/Wallet/Withdraw/Withdraw";
import Head from "next/head";
import { NextPageWithLayout } from "../../_app";

const WithdrawPage: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Albantsho || Withdraw </title>
      </Head>
      <Withdraw />
    </>
  );
};

WithdrawPage.getLayout = (pages) => <WalletLayout>{pages}</WalletLayout>;

export default WithdrawPage;
