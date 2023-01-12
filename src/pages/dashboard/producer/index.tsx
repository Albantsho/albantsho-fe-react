import DashboardLayout from "@shared/Layouts/DashboardLayout/DashboardLayout";
import useScripBidApi from "apis/ScripBid.api";
import useScriptsApi from "apis/Scripts.api";
import CurrentBids from "components/Dashboard/Producer/CurrentBids";
import MyScripts from "components/Dashboard/Producer/MyScripts";
import ScriptsSearch from "components/Dashboard/Producer/ScriptsSearch";
import TabButtons from "components/Dashboard/Producer/TabButtons";
import { IProducerBid } from "interfaces/bid";
import { IScript } from "interfaces/script";
import { debounce } from "lodash";
import Head from "next/head";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import { DotLoader } from "react-spinners";
import errorHandler from "utils/error-handler";
import { NextPageWithLayout } from "../../_app";

const Scripts: NextPageWithLayout = () => {
  const [loading, setLoading] = useState(true);
  const [scriptsList, setScriptsList] = useState<Array<IScript>>([]);
  const [bidsList, setBidsList] = useState<Array<IProducerBid>>([]);
  const { query } = useRouter();
  const { getProducerAllScripts } = useScriptsApi();
  const { getAllBidsForProducer } = useScripBidApi();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = useCallback(
    debounce(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value.trim());
      },
      2000,
      { leading: false }
    ),
    [searchQuery]
  );

  useEffect(() => {
    async function getScriptsFunc() {
      try {
        setLoading(true);
        const resScripts = await getProducerAllScripts(searchQuery);
        const resBids = await getAllBidsForProducer(searchQuery);
        console.log(resScripts, resBids);
        setBidsList(resBids.data.scriptBids);
        setScriptsList(resScripts.data.scripts);
        setLoading(false);
      } catch (error) {
        errorHandler(error);
      }
    }

    getScriptsFunc();
  }, [searchQuery]);

  return (
    <>
      <Head>
        <title>Albantsho || Scripts</title>
      </Head>
      <TabButtons />
      <ScriptsSearch handleSearch={handleSearch} />
      {loading ? (
        <DotLoader color="#7953B5" className="mx-auto mt-10" />
      ) : (
        <>
          {(!query.tab || query.tab === "current-bids") && (
            <CurrentBids setBidsList={setBidsList} bidsList={bidsList} />
          )}
          {query.tab === "my-scripts" && (
            <MyScripts scriptsList={scriptsList} />
          )}
        </>
      )}
    </>
  );
};

Scripts.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Scripts;
