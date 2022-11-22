import DashboardLayout from "@shared/Layouts/DashboardLayout/DashboardLayout";
import CurrentBids from "components/Dashboard/Producer/CurrentBids";
import MyScripts from "components/Dashboard/Producer/MyScripts";
import ScriptsSearch from "components/Dashboard/Producer/ScriptsSearch";
import TabButtons from "components/Dashboard/Producer/TabButtons";
import Head from "next/head";
import { useRouter } from "next/router";
import { NextPageWithLayout } from "../../_app";

const Scripts: NextPageWithLayout = () => {
  const { query } = useRouter();

  return (
    <>
      <Head>
        <title>Albantsho || Scripts</title>
      </Head>
      <TabButtons />
      <ScriptsSearch />
      {(!query.tab || query.tab === "current-bids") && <CurrentBids />}
      {query.tab === "my-scripts" && <MyScripts />}
    </>
  );
};

Scripts.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Scripts;
