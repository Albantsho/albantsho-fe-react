import DashboardLayout from "@shared/Layouts/DashboardLayout/DashboardLayout";
import HeadReviews from "components/Reviews/HeadReviews/HeadReviews";
import ListScriptsInReviews from "components/Reviews/ListScriptsInReviews/ListScriptsInReviews";
import SelectInput from "components/Reviews/SelectInput/SelectInput";
import Head from "next/head";
import { NextPageWithLayout } from "../_app";

const Reviews: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Albantsho || Reviews </title>
      </Head>
      <HeadReviews />
      <SelectInput />
      <ListScriptsInReviews />
    </>
  );
};

Reviews.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Reviews;
