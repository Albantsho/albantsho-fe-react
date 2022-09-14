import DashboardLayout from "@shared/Layouts/DashboardLayout/DashboardLayout";
import CurrentBids from "components/Dashboard/Scripts/CurrentBids";
import MyScripts from "components/Dashboard/Scripts/MyScripts";
import TabButtons from "components/Dashboard/Scripts/TabButtons";
import Head from "next/head";
import { useRouter } from "next/router";
import { NextPageWithLayout } from "../../_app";

const Scripts: NextPageWithLayout = () => {
  const { query } = useRouter();

  return (
    <>
      <Head>
        <title>Albantsho || Scripts </title>
      </Head>
      <TabButtons />
      {(!query.type || query.type === "current-bids") && <CurrentBids />}
      { query.type === "my-scripts" && <MyScripts />}
    </>
  );
};

Scripts.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Scripts;
