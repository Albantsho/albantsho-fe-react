import { Fab } from "@mui/material";
import DashboardLayout from "@shared/Layouts/DashboardLayout/DashboardLayout";
import DashboardSearch from "@shared/Layouts/DashboardLayout/DashboardSearch/DashboardSearch";
import Loader from "@shared/Loader/Loader";
import useScripBidApi from "apis/ScripBid.api";
import useScriptsApi from "apis/Scripts.api";
import TabButtons from "components/Dashboard/Writer/Listings/Index/TabButtons/TabButtons";
import Bids from "components/Dashboard/Writer/Listings/OpenListingInfo/Bids/Bids";
import { debounce } from "lodash";
import dynamic from "next/dynamic";
import Head from "next/head";
import { useRouter } from "next/router";
import { Suspense, useCallback, useState } from "react";
import { useQuery } from "react-query";
import errorHandler from "utils/error-handler";
import { NextPageWithLayout } from "../../../../../_app";

const AcceptOfferModal = dynamic(
  () => import("@shared/Modals/AcceptOfferModal/AcceptOfferModal")
);
const CreateScriptModal = dynamic(
  () => import("@shared/Modals/CreateScriptModal/CreateScriptModal")
);

const BidsPage: NextPageWithLayout = () => {
  const [openCreateScript, setOpenCreateScript] = useState<boolean>(false);
  const [openAcceptOffer, setOpenAcceptOffer] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { query } = useRouter();
  const { getScriptUnComplete } = useScriptsApi();
  const { getBidScript } = useScripBidApi();

  const scriptID = typeof query?.id === "string" ? query.id : "";
  const bidID = typeof query?.bidId === "string" ? query.bidId : "";

  const {
    data: scriptData,
    isLoading: isLoadingGetScript,
    refetch,
  } = useQuery(["script", scriptID], () => getScriptUnComplete(scriptID), {
    onError: (err) => errorHandler(err),
    enabled: scriptID.length > 0,
  });

  const { data: bidScriptData, isLoading: isLoadingGetBidScript } = useQuery(
    ["script one bid", bidID],
    () => getBidScript(bidID),
    {
      onError: (err) => errorHandler(err),
      enabled: bidID.length > 0,
    }
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
        <title>Albantsho || Bids</title>
      </Head>
      <TabButtons />
      <DashboardSearch
        handleSearch={handleSearch}
        setOpenCreateScript={setOpenCreateScript}
      />
      {!isLoadingGetScript &&
      !isLoadingGetBidScript &&
      bidScriptData &&
      bidScriptData.scriptBid &&
      scriptData &&
      scriptData.script ? (
        <>
          <Bids
            script={scriptData.script}
            bid={bidScriptData.scriptBid}
            setOpenAcceptOffer={setOpenAcceptOffer}
          />
          {openCreateScript ? (
            <Suspense fallback={null}>
              <CreateScriptModal
                refetch={refetch}
                openCreateScript={openCreateScript}
                setOpenCreateScript={setOpenCreateScript}
              />
            </Suspense>
          ) : null}
          {openAcceptOffer ? (
            <Suspense fallback={null}>
              <AcceptOfferModal
                title={scriptData.script.title}
                id={bidScriptData.scriptBid._id}
                amount={bidScriptData.scriptBid.amount}
                openAcceptOffer={openAcceptOffer}
                setOpenAcceptOffer={setOpenAcceptOffer}
              />
            </Suspense>
          ) : null}
          <Fab
            onClick={() => setOpenCreateScript(true)}
            color="primary"
            className=" block md:hidden fixed right-10 bottom-6  text-3xl rounded-2xl"
          >
            +
          </Fab>
        </>
      ) : (
        <Loader setCustomHeight="min-h-[55vh]" />
      )}
    </>
  );
};

BidsPage.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default BidsPage;
