import { Fab } from "@mui/material";
import DashboardLayout from "@shared/Layouts/DashboardLayout/DashboardLayout";
import SearchDashboard from "@shared/Layouts/DashboardLayout/SearchDashboard/SearchDashboard";
import ClosedList from "components/Dashboard/Listings/Index/ClosedList/ClosedList";
import DraftsList from "components/Dashboard/Listings/Index/DraftsList/DraftsList";
import OpeningLists from "components/Dashboard/Listings/Index/OpeningList/OpeningLists";
import TabButtons from "components/Dashboard/Listings/Index/TabButtons/TabButtons";
import Head from "next/head";
import { useRouter } from "next/router";
import { Suspense, useState } from "react";
import { NextPageWithLayout } from "../../_app";
import dynamic from "next/dynamic";

const AddScriptToCompletedModal = dynamic(
  () =>
    import(
      "components/Dashboard/Listings/Index/DraftsList/Modals/AddScriptToCompletedModal/AddScriptToCompletedModal"
    )
);
const RelistScriptModal = dynamic(
  () =>
    import(
      "components/Dashboard/Listings/Index/DraftsList/Modals/RelistScriptModal/RelistScriptModal"
    )
);
const CreateScriptModal = dynamic(
  () => import("@shared/Modals/CreateScriptModal/CreateScriptModal")
);
const UnListingItemModal = dynamic(
  () =>
    import(
      "components/Dashboard/Listings/Index/OpeningList/Modals/UnListingItemModal/UnListingItemModal"
    )
);

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
      <Suspense fallback={null}>
        <CreateScriptModal
          openCreateScript={openCreateScript}
          setOpenCreateScript={setOpenCreateScript}
        />
      </Suspense>
      {(!query.tab || query.tab === "opening-list") && (
        <>
          <OpeningLists setOpenUnListingItem={setOpenUnListingItem} />
          <Suspense fallback={null}>
            <UnListingItemModal
              openUnListingItem={openUnListingItem}
              setOpenUnListingItem={setOpenUnListingItem}
            />
          </Suspense>
        </>
      )}
      {query.tab === "drafts" && (
        <>
          <DraftsList
            setOpenAddToScript={setOpenAddToScript}
            setOpenRelistScript={setOpenRelistScript}
          />
          <Suspense fallback={null}>
            <AddScriptToCompletedModal
              openAddToScript={openAddToScript}
              setOpenAddToScript={setOpenAddToScript}
            />
            <RelistScriptModal
              openRelistScript={openRelistScript}
              setOpenRelistScript={setOpenRelistScript}
            />
          </Suspense>
        </>
      )}
      {query.tab === "closed-list" && <ClosedList />}
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
