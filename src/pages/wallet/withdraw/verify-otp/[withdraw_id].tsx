import WalletLayout from "@shared/Layouts/WalletLayout/WalletLayout";
import WithdrawVerify from "components/Wallet/WithdrawVerify/WithdrawVerify";
import Head from "next/head";
import { NextPageWithLayout } from "pages/_app";

const WithdrawVerifyPage: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Albantsho || Withdraw Verify</title>
      </Head>
      <WithdrawVerify />
    </>
  );
};

WithdrawVerifyPage.getLayout = (pages) => <WalletLayout>{pages}</WalletLayout>;

export default WithdrawVerifyPage;
