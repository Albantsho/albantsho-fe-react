import { Fab } from "@mui/material";
import DashboardLayout from "@shared/Layouts/DashboardLayout/DashboardLayout";
import DashboardSearch from "@shared/Layouts/DashboardLayout/DashboardSearch/DashboardSearch";
import ClosedList from "components/Dashboard/Writer/Listings/Index/ClosedList/ClosedList";
import DraftsList from "components/Dashboard/Writer/Listings/Index/DraftsList/DraftsList";
import OpeningList from "components/Dashboard/Writer/Listings/Index/OpeningList/OpeningList";
import TabButtons from "components/Dashboard/Writer/Listings/Index/TabButtons/TabButtons";
import dynamic from "next/dynamic";
import Head from "next/head";
import { useRouter } from "next/router";
import { Suspense } from "react";
import { DotLoader } from "react-spinners";
import { NextPageWithLayout } from "../../../_app";
import useListings from "./useListings";

const AddScriptToCompletedModal = dynamic(
  () =>
    import(
      "components/Dashboard/Writer/Listings/Index/DraftsList/Modals/AddScriptToCompletedModal/AddScriptToCompletedModal"
    )
);
const RelistScriptModal = dynamic(
  () =>
    import(
      "components/Dashboard/Writer/Listings/Index/DraftsList/Modals/RelistScriptModal/RelistScriptModal"
    )
);
const CreateScriptModal = dynamic(
  () => import("@shared/Modals/CreateScriptModal/CreateScriptModal")
);
const UnListingItemModal = dynamic(
  () =>
    import(
      "components/Dashboard/Writer/Listings/Index/OpeningList/Modals/UnListingItemModal/UnListingItemModal"
    )
);

const Listings: NextPageWithLayout = () => {
  const {
    loading,
    openAddToScript,
    openCreateScript,
    openRelistScript,
    scripts,
    setOpenAddToScript,
    setOpenCreateScript,
    setOpenRelistScript,
  } = useListings();
  const { query } = useRouter();

  return (
    <>
      <Head>
        <title>Albantsho || Listings</title>
      </Head>

      {loading && scripts.length === 0 ? (
        <DotLoader color="#7953B5" className="mx-auto mt-10" />
      ) : (
        <>
          <TabButtons />
          <DashboardSearch setOpenCreateScript={setOpenCreateScript} />
          <Suspense fallback={null}>
            <CreateScriptModal
              openCreateScript={openCreateScript}
              setOpenCreateScript={setOpenCreateScript}
            />
          </Suspense>
          {(!query.tab || query.tab === "opening-list") && (
            <OpeningList scripts={scripts} />
          )}
          {query.tab === "drafts" && (
            <>
              {/* <DraftsList
                scripts={scripts}
                setOpenAddToScript={setOpenAddToScript}
                setOpenRelistScript={setOpenRelistScript}
              /> */}
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
          {
            query.tab === "closed-list" && ""
            // <ClosedList scripts={scripts} />
          }
          <Fab
            onClick={() => setOpenCreateScript(true)}
            color="primary"
            className=" block md:hidden fixed right-10 bottom-6  text-3xl rounded-2xl"
          >
            +
          </Fab>
        </>
      )}
    </>
  );
};

Listings.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Listings;
