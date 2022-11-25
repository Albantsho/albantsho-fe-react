import DashboardLayout from "@shared/Layouts/DashboardLayout/DashboardLayout";
import DashboardSearch from "@shared/Layouts/DashboardLayout/DashboardSearch/DashboardSearch";
import Heading from "components/Dashboard/Writer/Listings/OpenListingInfo/Index/Heading/Heading";
import TabButtons from "components/Dashboard/Writer/Listings/Index/TabButtons/TabButtons";
import Head from "next/head";
import dynamic from "next/dynamic";
import { Suspense, useEffect, useState } from "react";
import { NextPageWithLayout } from "../../../../_app";
import { Fab } from "@mui/material";
import { useRouter } from "next/router";

import { IProduct } from "interfaces/product";
import { DotLoader } from "react-spinners";
import errorHandler from "utils/error-handler";
import useScripBidApi from "apis/ScripBid.api";

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

  const [bidsList, setBidsList] = useState<Array<IBidForScript>>([]);
  const [loading, setLoading] = useState(false);
  const { getAllBids } = useScripBidApi();
  const { query } = useRouter();

  useEffect(() => {
    async function getScriptsDate() {
      try {
        if (typeof query.id === "string") {
          setLoading(false);
          const res = await getAllBids(query.id);
          setBidsList(res.data.scriptBids);
          setLoading(false);
        }
      } catch (error) {
        errorHandler(error);
      }
    }
    getScriptsDate();
  }, [query.id]);

  return (
    <>
      <Head>
        <title>Albantsho || Script Slug </title>
      </Head>
      <div className="min-h-screen">
        {!loading ? (
          <>
            <TabButtons />
            <DashboardSearch setOpenCreateScript={setOpenCreateScript} />
            <div className="py-8 md:py-12 xl:py-20  px-5 sm:px-10 xl:px-20  my-4 md:my-6 bg-white shadow-primary rounded-md">
              <Heading />
              <Suspense fallback={null}>
                <CreateScriptModal
                  openCreateScript={openCreateScript}
                  setOpenCreateScript={setOpenCreateScript}
                />

                <AuctionsScripts bidsList={bidsList} />
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
