import DashboardLayout from "@shared/Layouts/DashboardLayout/DashboardLayout";
import Loader from "@shared/Loader/Loader";
import useScripBidApi from "apis/ScripBid.api";
import useScriptsApi from "apis/Scripts.api";
import CurrentBids from "components/Dashboard/Producer/CurrentBids";
import MyScriptsList from "components/Dashboard/Producer/MyScriptList/MyScriptsList";
import ScriptsSearch from "components/Dashboard/Producer/ScriptsSearch";
import TabButtons from "components/Dashboard/Producer/TabButtons";
import { debounce } from "lodash";
import Head from "next/head";
import { useRouter } from "next/router";
import { useCallback, useState } from "react";
import { useQuery } from "react-query";
import { NextPageWithLayout } from "../../_app";

const Scripts: NextPageWithLayout = () => {
  const { query } = useRouter();
  const { getProducerAllScripts } = useScriptsApi();
  const { getAllBidsForProducer } = useScripBidApi();
  const [searchQuery, setSearchQuery] = useState("");

  const { data: producerScriptsData, isLoading: loadingGetProducerScripts } =
    useQuery(["script", searchQuery], () => getProducerAllScripts(searchQuery));

  const {
    data: producerScriptsRequestData,
    isLoading: loadingGetProducerRequestScripts,
    refetch,
  } = useQuery(["script", searchQuery], () =>
    getAllBidsForProducer(searchQuery)
  );

  // eslint-disable-next-line react-hooks/exhaustive-deps
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

  return (
    <>
      <Head>
        <title>Albantsho || Scripts</title>
      </Head>
      <TabButtons />
      <ScriptsSearch handleSearch={handleSearch} />
      {!loadingGetProducerScripts &&
      !loadingGetProducerRequestScripts &&
      producerScriptsData &&
      producerScriptsRequestData ? (
        <>
          {(!query.tab || query.tab === "current-bids") && (
            <CurrentBids
              refetch={refetch}
              bidsList={producerScriptsRequestData.scriptBids}
            />
          )}
          {query.tab === "my-scripts" && (
            <MyScriptsList scriptsList={producerScriptsData.scripts} />
          )}
        </>
      ) : (
        <Loader setCustomHeight="min-h-[60vh]" />
      )}
    </>
  );
};

Scripts.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Scripts;
