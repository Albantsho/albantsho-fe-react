import WalletLayout from "@shared/Layouts/WalletLayout/WalletLayout";
import Help from "components/Wallet/Help/Help";
import Head from "next/head";
import { NextPageWithLayout } from "../_app";

const HelpPage: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Albantsho || Help</title>
      </Head>
      <Help />
    </>
  );
};

HelpPage.getLayout = (pages) => <WalletLayout>{pages}</WalletLayout>;

export default HelpPage;
