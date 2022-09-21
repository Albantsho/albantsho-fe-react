import DashboardLayout from "@shared/Layouts/DashboardLayout/DashboardLayout";
import SearchDashboard from "@shared/Layouts/DashboardLayout/SearchDashboard/SearchDashboard";
import Heading from "components/Dashboard/Listings/OpenListingInfo/Index/Heading/Heading";
import TabButtons from "components/Dashboard/Listings/Index/TabButtons/TabButtons";
import Head from "next/head";
import { useState } from "react";
import { NextPageWithLayout } from "../../../_app";
import AuctionsScripts from "components/Dashboard/Listings/OpenListingInfo/Index/AuctionsScripts/AuctionsScripts";
import AcceptOfferModal from "@shared/Modals/AcceptOfferModal/AcceptOfferModal";
import CreateScriptModal from "@shared/Modals/CreateScriptModal/CreateScriptModal";
import { Fab } from "@mui/material";

const ScriptSlug: NextPageWithLayout = () => {
  const [openCreateScript, setOpenCreateScript] = useState<boolean>(false);
  const [openAcceptOffer, setOpenAcceptOffer] = useState<boolean>(false);

  return (
    <>
      <Head>
        <title>Albantsho || Script Slug </title>
      </Head>
      <TabButtons />
      <CreateScriptModal
        openCreateScript={openCreateScript}
        setOpenCreateScript={setOpenCreateScript}
      />
      <SearchDashboard setOpenCreateScript={setOpenCreateScript} />
      <div className="py-8 md:py-12 xl:py-20  px-5 sm:px-10 xl:px-20  my-4 md:my-6 bg-white shadow-primary rounded-md">
        <Heading />
        <AcceptOfferModal
          openAcceptOffer={openAcceptOffer}
          setOpenAcceptOffer={setOpenAcceptOffer}
        />
        <AuctionsScripts setOpenAcceptOffer={setOpenAcceptOffer} />
      </div>
      <Fab
        onClick={() => setOpenCreateScript(true)}
        color="primary"
        className=" block md:hidden fixed right-10 bottom-6  text-3xl rounded-2xl"
      >
        +
      </Fab>
    </>
  );
};

ScriptSlug.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default ScriptSlug;