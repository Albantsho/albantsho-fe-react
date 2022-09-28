import { Fab } from "@mui/material";
import DashboardLayout from "@shared/Layouts/DashboardLayout/DashboardLayout";
import SearchDashboard from "@shared/Layouts/DashboardLayout/SearchDashboard/SearchDashboard";
import TabButtons from "components/Dashboard/Listings/Index/TabButtons/TabButtons";
import BidsPage from "components/Dashboard/Listings/OpenListingInfo/Index/Bids/BidsPage";
import Head from "next/head";
import { Suspense, useState } from "react";
import { NextPageWithLayout } from "../../../_app";
import dynamic from "next/dynamic";

const AcceptOfferModal = dynamic(
  () => import("@shared/Modals/AcceptOfferModal/AcceptOfferModal")
);
const CreateScriptModal = dynamic(
  () => import("@shared/Modals/CreateScriptModal/CreateScriptModal")
);

const Bids: NextPageWithLayout = () => {
  const [openCreateScript, setOpenCreateScript] = useState<boolean>(false);
  const [openAcceptOffer, setOpenAcceptOffer] = useState<boolean>(false);

  return (
    <>
      <Head>
        <title>Albantsho || Bids </title>
      </Head>
      <TabButtons />
      <SearchDashboard setOpenCreateScript={setOpenCreateScript} />
      <BidsPage setOpenAcceptOffer={setOpenAcceptOffer} />
      <Suspense fallback={null}>
        <CreateScriptModal
          openCreateScript={openCreateScript}
          setOpenCreateScript={setOpenCreateScript}
        />
        <AcceptOfferModal
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
  );
};

Bids.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Bids;
