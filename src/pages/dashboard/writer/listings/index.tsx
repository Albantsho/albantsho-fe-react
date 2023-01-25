import { Fab } from "@mui/material";
import DashboardLayout from "@shared/Layouts/DashboardLayout/DashboardLayout";
import DashboardSearch from "@shared/Layouts/DashboardLayout/DashboardSearch/DashboardSearch";
import ClosedList from "components/Dashboard/Writer/Listings/Index/ClosedList/ClosedList";
import DraftsList from "components/Dashboard/Writer/Listings/Index/DraftsList/DraftsList";
import OpeningList from "components/Dashboard/Writer/Listings/Index/OpeningList/OpeningList";
import TabButtons from "components/Dashboard/Writer/Listings/Index/TabButtons/TabButtons";
import { debounce } from "lodash";
import dynamic from "next/dynamic";
import Head from "next/head";
import { useRouter } from "next/router";
import { Suspense, useCallback, useState } from "react";
import { NextPageWithLayout } from "../../../_app";

const CreateScriptModal = dynamic(
  () => import("@shared/Modals/CreateScriptModal/CreateScriptModal")
);

const Listings: NextPageWithLayout = () => {
  const [openCreateScript, setOpenCreateScript] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState("");
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

  return (
    <>
      <Head>
        <title>Albantsho || Listings</title>
      </Head>

      <TabButtons />
      <DashboardSearch
        handleSearch={handleSearch}
        setOpenCreateScript={setOpenCreateScript}
      />
      <Suspense fallback={null}>
        {openCreateScript ? (
          <CreateScriptModal
            openCreateScript={openCreateScript}
            setOpenCreateScript={setOpenCreateScript}
          />
        ) : null}
      </Suspense>
      {(!query.tab || query.tab === "opening-list") && (
        <OpeningList searchQuery={searchQuery} />
      )}
      {query.tab === "drafts" && <DraftsList searchQuery={searchQuery} />}
      {query.tab === "closed-list" && <ClosedList searchQuery={searchQuery} />}
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
