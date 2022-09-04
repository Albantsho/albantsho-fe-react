import DashboardLayout from "@shared/Layouts/DashboardLayout/DashboardLayout";
import HeadReviews from "components/Dashboard_ReviewsPage/Index/HeadReviews/HeadReviews";
import ListScriptsInReviews from "components/Dashboard_ReviewsPage/Index/ListScriptsInReviews/ListScriptsInReviews";
import SelectInput from "components/Dashboard_ReviewsPage/Index/SelectInput/SelectInput";
import Head from "next/head";
import { NextPageWithLayout } from "../_app";

const Reviews: NextPageWithLayout = () => {

  return (
    <>
      <Head>
        <title>Albantsho || Reviews  </title>
      </Head>
      <HeadReviews showSearchScript   />
      <SelectInput />
      <ListScriptsInReviews />
    </>
  );
};

Reviews.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Reviews;
