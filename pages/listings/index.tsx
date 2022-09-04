import DashboardLayout from "@shared/Layouts/DashboardLayout/DashboardLayout";
import SearchDashboard from "@shared/Layouts/DashboardLayout/SearchDashboard/SearchDashboard";
import ClosedList from "components/Dashboard_ListingsPage/ClosedList/ClosedList";
import Drafts from "components/Dashboard_ListingsPage/Drafts/Drafts";
import ModalAddScriptToCompleted from "components/Dashboard_ListingsPage/Drafts/Modals/ModalAddScriptToCompleted/ModalAddScriptToCompleted";
import ModalRelistScript from "components/Dashboard_ListingsPage/Drafts/Modals/ModalRelistScript/ModalRelistScript";
import UnListingItemModal from "components/Dashboard_ListingsPage/OpeningLists/Modals/UnListingItemModal/UnListingItemModal";
import OpeningLists from "components/Dashboard_ListingsPage/OpeningLists/OpeningLists";
import RoutingButton from "components/Dashboard_ListingsPage/RoutingButton/RoutingButton";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import { NextPageWithLayout } from "../_app";

const Listings: NextPageWithLayout = () => {
  const [openModalCreateScript, setOpenModalCreateScript] =
    useState<boolean>(false);
  const [openRelistScript, setOpenRelistScript] = useState<boolean>(false);
  const [openAddToScript, setOpenAddToScript] = useState<boolean>(false);
  const [openUnListingItem, setOpenUnListingItem] = useState<boolean>(false);
  const { query } = useRouter();
  console.log({ query });

  return (
    <>
      <Head>
        <title>Albantsho || Listings </title>
      </Head>
      <RoutingButton />
      <SearchDashboard setOpenModalCreateScript={setOpenModalCreateScript} />
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
          <Drafts
            setOpenAddToScript={setOpenAddToScript}
            setOpenRelistScript={setOpenRelistScript}
          />
          <ModalAddScriptToCompleted
            openAddToScript={openAddToScript}
            setOpenAddToScript={setOpenAddToScript}
          />
          <ModalRelistScript
            openRelistScript={openRelistScript}
            setOpenRelistScript={setOpenRelistScript}
          />
        </>
      )}
      {query.type === "closed-list" && <ClosedList />}
    </>
  );
};

Listings.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Listings;
