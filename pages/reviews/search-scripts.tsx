import DashboardLayout from "@shared/Layouts/DashboardLayout/DashboardLayout";
import HeadReviews from "components/Reviews/HeadReviews/HeadReviews";
import ScriptsSearch from "components/Reviews/ScriptsSearch/ScriptsSearch";
import Head from "next/head";
import { NextPageWithLayout } from "../_app";

const SearchScripts: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Albantsho || Search Scripts</title>
      </Head>
      <HeadReviews />
      <ScriptsSearch />
    </>
  );
};

SearchScripts.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default SearchScripts;
