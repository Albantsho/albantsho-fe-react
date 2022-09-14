import { Fab } from "@mui/material";
import DashboardLayout from "@shared/Layouts/DashboardLayout/DashboardLayout";
import SearchDashboard from "@shared/Layouts/DashboardLayout/SearchDashboard/SearchDashboard";
import ClosedList from "components/Dashboard/Listings/Index/ClosedList/ClosedList";
import DraftsList from "components/Dashboard/Listings/Index/DraftsList/DraftsList";
import AddScriptToCompletedModal from "components/Dashboard/Listings/Index/DraftsList/Modals/AddScriptToCompletedModal/AddScriptToCompletedModal";
import RelistScriptModal from "components/Dashboard/Listings/Index/DraftsList/Modals/RelistScriptModal/RelistScriptModal";
import OpeningLists from "components/Dashboard/Listings/Index/OpeningList/OpeningLists";
import TabButtons from "components/Dashboard/Listings/Index/TabButtons/TabButtons";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import { NextPageWithLayout } from "../../_app";
import CreateScriptModal from "@shared/Modals/CreateScriptModal/CreateScriptModal";
import UnListingItemModal from "components/Dashboard/Listings/Index/OpeningList/Modals/UnListingItemModal/UnListingItemModal";

const Listings: NextPageWithLayout = () => {
  const [openCreateScript, setOpenCreateScript] = useState<boolean>(false);
  const [openRelistScript, setOpenRelistScript] = useState<boolean>(false);
  const [openAddToScript, setOpenAddToScript] = useState<boolean>(false);
  const [openUnListingItem, setOpenUnListingItem] = useState<boolean>(false);
  const { query } = useRouter();

  return (
    <>
      <Head>
        <title>Albantsho || Listings </title>
      </Head>
      <TabButtons />
      <SearchDashboard setOpenCreateScript={setOpenCreateScript} />
      <CreateScriptModal
        openCreateScript={openCreateScript}
        setOpenCreateScript={setOpenCreateScript}
      />
      {(!query.type || query.type === "opening-list") && (
        <>
          <OpeningLists setOpenUnListingItem={setOpenUnListingItem} />
          <UnListingItemModal
            openUnListingItem={openUnListingItem}
            setOpenUnListingItem={setOpenUnListingItem}
          />
        </>
      )}
      {query.type === "drafts" && (
        <>
          <DraftsList
            setOpenAddToScript={setOpenAddToScript}
            setOpenRelistScript={setOpenRelistScript}
          />
          <AddScriptToCompletedModal
            openAddToScript={openAddToScript}
            setOpenAddToScript={setOpenAddToScript}
          />
          <RelistScriptModal
            openRelistScript={openRelistScript}
            setOpenRelistScript={setOpenRelistScript}
          />
        </>
      )}
      {query.type === "closed-list" && <ClosedList />}
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

Listings.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Listings;
