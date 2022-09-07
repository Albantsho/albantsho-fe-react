import DashboardLayout from "@shared/Layouts/DashboardLayout/DashboardLayout";
import Heading from "components/Dashboard/Reviews/Index/Heading/Heading";
import ListScripts from "components/Dashboard/Reviews/Index/ListScripts/ListScripts";
import SortScriptsSelectInput from "components/Dashboard/Reviews/Index/SortScriptsSelectInput/SortScriptsSelectInput";
import Head from "next/head";
import { NextPageWithLayout } from "../_app";

const Reviews: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Albantsho || Reviews </title>
      </Head>
      <Heading showSearchScript />
      <SortScriptsSelectInput />
      <ListScripts />
    </>
  );
};

Reviews.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Reviews;
