import { Fab } from "@mui/material";
import DashboardLayout from "@shared/Layouts/DashboardLayout/DashboardLayout";
import SearchDashboard from "@shared/Layouts/DashboardLayout/SearchDashboard/SearchDashboard";
import ClosedList from "components/Dashboard/Listings/Index/ClosedList/ClosedList";
import DraftsList from "components/Dashboard/Listings/Index/DraftsList/DraftsList";
import AddScriptToCompleted from "components/Dashboard/Listings/Index/DraftsList/Modals/AddScriptToCompleted/AddScriptToCompleted";
import RelistScript from "components/Dashboard/Listings/Index/DraftsList/Modals/RelistScript/RelistScript";
import OpeningLists from "components/Dashboard/Listings/Index/OpeningList/OpeningLists";
import TabButtons from "components/Dashboard/Listings/Index/TabButtons/TabButtons";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import { NextPageWithLayout } from "../_app";
import CreateScript from "@shared/Modals/CreateScript/CreateScript";
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
      <CreateScript
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
          <AddScriptToCompleted
            openAddToScript={openAddToScript}
            setOpenAddToScript={setOpenAddToScript}
          />
          <RelistScript
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
