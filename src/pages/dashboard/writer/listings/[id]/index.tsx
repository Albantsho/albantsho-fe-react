import { Fab } from "@mui/material";
import DashboardLayout from "@shared/Layouts/DashboardLayout/DashboardLayout";
import DashboardSearch from "@shared/Layouts/DashboardLayout/DashboardSearch/DashboardSearch";
import Loader from "@shared/Loader/Loader";
import useScripBidApi from "apis/ScripBid.api";
import useScriptsApi from "apis/Scripts.api";
import TabButtons from "components/Dashboard/Writer/Listings/Index/TabButtons/TabButtons";
import Heading from "components/Dashboard/Writer/Listings/OpenListingInfo/Index/Heading/Heading";
import { debounce } from "lodash";
import dynamic from "next/dynamic";
import Head from "next/head";
import { useRouter } from "next/router";
import { Suspense, useCallback, useState } from "react";
import { useQuery } from "react-query";
import errorHandler from "utils/error-handler";
import { NextPageWithLayout } from "../../../../_app";

const AuctionsScripts = dynamic(
  () =>
    import(
      "components/Dashboard/Writer/Listings/OpenListingInfo/Index/ScriptsAuction/ScriptsAuction"
    )
);

const CreateScriptModal = dynamic(
  () => import("@shared/Modals/CreateScriptModal/CreateScriptModal")
);

const ScriptSlug: NextPageWithLayout = () => {
  const [openCreateScript, setOpenCreateScript] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { getAllBids } = useScripBidApi();
  const { getScriptUnComplete } = useScriptsApi();
  const { query } = useRouter();
  const scriptID = typeof query?.id === "string" ? query.id : "";

  const {
    data: scriptData,
    isLoading: isLoadingGetScript,
    refetch: refetchScript,
  } = useQuery(
    ["script", scriptID],
    () => getScriptUnComplete(query.id as string),
    {
      onError: (err) => errorHandler(err),
      enabled: scriptID.length > 0,
    }
  );

  const {
    data: scriptBidsData,
    isLoading: isLoadingGetScriptBids,
    refetch,
  } = useQuery(["script bid requests", scriptID], () => getAllBids(scriptID), {
    onError: (err) => errorHandler(err),
    enabled: scriptID.length > 0,
  });

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
        <title>
          Albantsho || Script {scriptData && scriptData.script.title}
        </title>
      </Head>
      {!isLoadingGetScript &&
      !isLoadingGetScriptBids &&
      scriptData &&
      scriptBidsData &&
      scriptData.script &&
      scriptBidsData.scriptBids ? (
        <div className="min-h-screen">
          <TabButtons />
          <DashboardSearch
            handleSearch={handleSearch}
            setOpenCreateScript={setOpenCreateScript}
          />
          <div className="py-8 md:py-12 xl:py-20  px-5 sm:px-10 xl:px-20  my-4 md:my-6 bg-white shadow-primary rounded-md">
            <Heading script={scriptData.script} />
            <Suspense fallback={null}>
              <AuctionsScripts
                script={scriptData.script}
                bidsList={scriptBidsData.scriptBids}
                refetch={refetch}
              />
            </Suspense>
          </div>
          {openCreateScript ? (
            <Suspense fallback={null}>
              <CreateScriptModal
                refetch={refetchScript}
                openCreateScript={openCreateScript}
                setOpenCreateScript={setOpenCreateScript}
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
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};

ScriptSlug.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default ScriptSlug;
