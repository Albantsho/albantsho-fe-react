import { Fab } from "@mui/material";
import DashboardLayout from "@shared/Layouts/DashboardLayout/DashboardLayout";
import DashboardSearch from "@shared/Layouts/DashboardLayout/DashboardSearch/DashboardSearch";
import useScripBidApi from "apis/ScripBid.api";
import useScriptsApi from "apis/Scripts.api";
import TabButtons from "components/Dashboard/Writer/Listings/Index/TabButtons/TabButtons";
import Heading from "components/Dashboard/Writer/Listings/OpenListingInfo/Index/Heading/Heading";
import { IBidForScript } from "interfaces/bid";
import { IFullInformationScript } from "interfaces/script";
import { debounce } from "lodash";
import dynamic from "next/dynamic";
import Head from "next/head";
import { useRouter } from "next/router";
import { Suspense, useCallback, useEffect, useState } from "react";
import { DotLoader } from "react-spinners";
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
  const [script, setScript] = useState<IFullInformationScript>();
  const [bidsList, setBidsList] = useState<Array<IBidForScript>>([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { getAllBids } = useScripBidApi();
  const { getScript } = useScriptsApi();
  const { query } = useRouter();

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

  useEffect(() => {
    async function getScriptsDate() {
      try {
        if (typeof query.id === "string") {
          setLoading(false);
          const res = await getAllBids(query.id);
          const scriptRes = await getScript(query.id);
          setBidsList(res.data.scriptBids);
          setScript(scriptRes.data.script);
          setLoading(false);
        }
      } catch (error) {
        ("");
      }
    }
    getScriptsDate();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query.id]);

  return (
    <>
      <Head>
        <title>Albantsho || Script Slug</title>
      </Head>
      <div className="min-h-screen">
        {!loading && script ? (
          <>
            <TabButtons />
            <DashboardSearch
              handleSearch={handleSearch}
              setOpenCreateScript={setOpenCreateScript}
            />
            <div className="py-8 md:py-12 xl:py-20  px-5 sm:px-10 xl:px-20  my-4 md:my-6 bg-white shadow-primary rounded-md">
              <Heading script={script} />
              {openCreateScript ? (
                <Suspense fallback={null}>
                  <CreateScriptModal
                    openCreateScript={openCreateScript}
                    setOpenCreateScript={setOpenCreateScript}
                  />
                </Suspense>
              ) : null}
              <Suspense fallback={null}>
                <AuctionsScripts
                  script={script}
                  bidsList={bidsList}
                  setBidsList={setBidsList}
                />
              </Suspense>
            </div>
            <Fab
              onClick={() => setOpenCreateScript(true)}
              color="primary"
              className=" block md:hidden fixed right-10 bottom-6  text-3xl rounded-2xl"
            >
              +
            </Fab>
          </>
        ) : (
          <DotLoader color="#7953B5" className="mx-auto mt-10" />
        )}
      </div>
    </>
  );
};

ScriptSlug.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default ScriptSlug;
