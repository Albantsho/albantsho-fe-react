import { Fab } from "@mui/material";
import DashboardLayout from "@shared/Layouts/DashboardLayout/DashboardLayout";
import DashboardSearch from "@shared/Layouts/DashboardLayout/DashboardSearch/DashboardSearch";
import useScripBidApi from "apis/ScripBid.api";
import useScriptsApi from "apis/Scripts.api";
import TabButtons from "components/Dashboard/Writer/Listings/Index/TabButtons/TabButtons";
import Bids from "components/Dashboard/Writer/Listings/OpenListingInfo/Bids/Bids";
import { IBidForScript } from "interfaces/bid";
import { IFullInformationScript } from "interfaces/script";
import { debounce } from "lodash";
import dynamic from "next/dynamic";
import Head from "next/head";
import { useRouter } from "next/router";
import { Suspense, useCallback, useEffect, useState } from "react";
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
  const [script, setScript] = useState<IFullInformationScript>();
  const [bid, setBid] = useState<IBidForScript>();
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const { query } = useRouter();
  const { getScript } = useScriptsApi();
  const { getBidScript } = useScripBidApi();

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
    async function getScriptFunc() {
      try {
        if (typeof query.id === "string" && typeof query.bidId === "string") {
          setLoading(true);
          const resScript = await getScript(query.id);
          const res = await getBidScript(query.bidId);
          setScript(resScript.data.script);
          setBid(res.data.scriptBid);
          setLoading(false);
        }
      } catch (error) {
        errorHandler(error);
      }
    }
    getScriptFunc();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

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
      {!loading && bid && script ? (
        <>
          <Bids
            script={script}
            bid={bid}
            setOpenAcceptOffer={setOpenAcceptOffer}
          />
          <Suspense fallback={null}>
            <CreateScriptModal
              openCreateScript={openCreateScript}
              setOpenCreateScript={setOpenCreateScript}
            />
            <AcceptOfferModal
              title={script.title}
              auction={bid}
              openAcceptOffer={openAcceptOffer}
              setOpenAcceptOffer={setOpenAcceptOffer}
            />
          </Suspense>
          <Fab
            onClick={() => setOpenCreateScript(true)}
            color="primary"
            className=" block md:hidden fixed right-10 bottom-6  text-3xl rounded-2xl"
          >
            +
          </Fab>
        </>
      ) : (
        ""
      )}
    </>
  );
};

BidsPage.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default BidsPage;
