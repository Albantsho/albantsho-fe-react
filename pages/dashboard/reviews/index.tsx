import DashboardLayout from "@shared/Layouts/DashboardLayout/DashboardLayout";
import FilterScriptsSelect from "components/Dashboard/Reviews/Index/FilterScriptsSelect/FilterScriptsSelect";
import Heading from "components/Dashboard/Reviews/Index/Heading/Heading";
import ScriptsList from "components/Dashboard/Reviews/Index/ScriptsList/ScriptsList";
import Head from "next/head";
import { NextPageWithLayout } from "../../_app";

const Reviews: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Albantsho || Reviews </title>
      </Head>
      <Heading showSearchScript />
      <FilterScriptsSelect />
      <ScriptsList />
    </>
  );
};

Reviews.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Reviews;
