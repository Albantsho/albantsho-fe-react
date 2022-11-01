import { Fab } from "@mui/material";
import DashboardLayout from "@shared/Layouts/DashboardLayout/DashboardLayout";
import DashboardSearch from "@shared/Layouts/DashboardLayout/DashboardSearch/DashboardSearch";
import TabButtons from "components/Dashboard/Listings/Index/TabButtons/TabButtons";
import Bids from "components/Dashboard/Listings/OpenListingInfo/Bids/Bids";
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

const BidsPage: NextPageWithLayout = () => {
  const [openCreateScript, setOpenCreateScript] = useState<boolean>(false);
  const [openAcceptOffer, setOpenAcceptOffer] = useState<boolean>(false);

  return (
    <>
      <Head>
        <title>Albantsho || Bids </title>
      </Head>
      <TabButtons />
      <DashboardSearch setOpenCreateScript={setOpenCreateScript} />
      <Bids setOpenAcceptOffer={setOpenAcceptOffer} />
      <Suspense fallback={null}>
        <CreateScriptModal
          openCreateScript={openCreateScript}
          setOpenCreateScript={setOpenCreateScript}
        />
        {/* <AcceptOfferModal
          openAcceptOffer={openAcceptOffer}
          setOpenAcceptOffer={setOpenAcceptOffer}
        /> */}
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

BidsPage.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default BidsPage;
