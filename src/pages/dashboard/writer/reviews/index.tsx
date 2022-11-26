import DashboardLayout from "@shared/Layouts/DashboardLayout/DashboardLayout";
import useReviewsApi from "apis/Reviews.api";
import FilterScriptsSelect from "components/Dashboard/Writer/Reviews/Index/FilterScriptsSelect/FilterScriptsSelect";
import Heading from "components/Dashboard/Writer/Reviews/Index/Heading/Heading";
import ScriptsList from "components/Dashboard/Writer/Reviews/Index/ScriptsList/ScriptsList";
import { IWriterReview } from "interfaces/reviews";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { DotLoader } from "react-spinners";
import errorHandler from "utils/error-handler";
import { NextPageWithLayout } from "../../../_app";

const Reviews: NextPageWithLayout = () => {
  const [reviewsList, setReviewsList] = useState<Array<IWriterReview>>([]);
  const [loading, setLoading] = useState(false);
  const { query } = useRouter();
  const { getWriterReviewRequests } = useReviewsApi();

  useEffect(() => {
    async function getReviewsFunc() {
      try {
        setReviewsList([]);
        setLoading(true);
        const res = await getWriterReviewRequests();
        setReviewsList(res.data.reviews);
        setLoading(true);
      } catch (error) {
        errorHandler(error);
      }
    }

    getReviewsFunc();
  }, [query]);

  return (
    <>
      <Head>
        <title>Albantsho || Reviews</title>
      </Head>
      {loading ? (
        <DotLoader color="#7953B5" className="mx-auto mt-10" />
      ) : (
        <>
          <Heading showSearchScript />
          <FilterScriptsSelect />
          <ScriptsList reviewsList={reviewsList} />
        </>
      )}
    </>
  );
};

Reviews.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Reviews;
