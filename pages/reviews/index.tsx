import DashboardLayout from "@shared/Layouts/DashboardLayout/DashboardLayout";
import HeadReviews from "components/Reviews/HeadReviews/HeadReviews";
import ListScriptsInReviews from "components/Reviews/ListScriptsInReviews/ListScriptsInReviews";
import ScriptsSearch from "components/Reviews/ScriptsSearch/ScriptsSearch";
import SelectInput from "components/Reviews/SelectInput/SelectInput";
import Head from "next/head";
import { useState } from "react";
import { NextPageWithLayout } from "../_app";

const Reviews: NextPageWithLayout = () => {
  const [openSearch, setOpenSearch] = useState<boolean>(false);
  return (
    <>
      <Head>
        <title>Albantsho || Reviews </title>
      </Head>
      <HeadReviews openSearch={openSearch} setOpenSearch={setOpenSearch} />
      {openSearch && <ScriptsSearch setOpenSearch={setOpenSearch} />}
      <SelectInput />
      <ListScriptsInReviews />
    </>
  );
};

Reviews.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Reviews;
