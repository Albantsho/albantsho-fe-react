import { Fab } from "@mui/material";
import DashboardLayout from "@shared/Layouts/DashboardLayout/DashboardLayout";
import SearchDashboard from "@shared/Layouts/DashboardLayout/SearchDashboard/SearchDashboard";
import AcceptOfferModal from "@shared/Modals/AcceptOfferModal/AcceptOfferModal";
import CreateScriptModal from "@shared/Modals/CreateScriptModal/CreateScriptModal";
import TabButtons from "components/Dashboard/Listings/Index/TabButtons/TabButtons";
import BidsPage from "components/Dashboard/Listings/OpenListingInfo/Index/Bids/BidsPage";
import Head from "next/head";
import { useState } from "react";
import { NextPageWithLayout } from "../../_app";

const Bids: NextPageWithLayout = () => {
  const [openCreateScript, setOpenCreateScript] = useState<boolean>(false);
  const [openAcceptOffer, setOpenAcceptOffer] = useState<boolean>(false);

  return (
    <>
      <Head>
        <title>Albantsho || Bids </title>
      </Head>
      <TabButtons />
      <CreateScriptModal
        openCreateScript={openCreateScript}
        setOpenCreateScript={setOpenCreateScript}
      />
      <SearchDashboard setOpenCreateScript={setOpenCreateScript} />
      <BidsPage setOpenAcceptOffer={setOpenAcceptOffer} />
      <AcceptOfferModal
        openAcceptOffer={openAcceptOffer}
        setOpenAcceptOffer={setOpenAcceptOffer}
      />
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

Bids.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Bids;
