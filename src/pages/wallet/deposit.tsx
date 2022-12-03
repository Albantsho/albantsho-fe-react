import WalletLayout from "@shared/Layouts/WalletLayout/WalletLayout";
import Deposit from "components/Wallet/Deposit/Deposit";
import Head from "next/head";
import { NextPageWithLayout } from "../_app";

const DepositPage: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Albantsho || Deposit</title>
      </Head>
      <Deposit />
    </>
  );
};

DepositPage.getLayout = (pages) => <WalletLayout>{pages}</WalletLayout>;

export default DepositPage;
