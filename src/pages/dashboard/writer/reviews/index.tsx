import DashboardLayout from "@shared/Layouts/DashboardLayout/DashboardLayout";
import Loader from "@shared/Loader/Loader";
import useReviewsApi from "apis/Reviews.api";
import FilterScriptsSelect from "components/Dashboard/Writer/Reviews/Index/FilterScriptsSelect/FilterScriptsSelect";
import Heading from "components/Dashboard/Writer/Reviews/Index/Heading/Heading";
import ScriptsList from "components/Dashboard/Writer/Reviews/Index/ScriptsList/ScriptsList";
import { IWriterReview } from "interfaces/reviews";
import Head from "next/head";
import { useRouter } from "next/router";
import queryString from "query-string";
import { useEffect, useState } from "react";
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
        const res = await getWriterReviewRequests(queryString.stringify(query));
        setReviewsList(res.data.scripts);
        setLoading(false);
      } catch (error) {
        ("");
      }
    }

    getReviewsFunc();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  return (
    <>
      <Head>
        <title>Albantsho || Reviews</title>
      </Head>
      <Heading showSearchScript />
      {loading ? (
        <Loader setCustomHeight="min-h-[30vh]" />
      ) : (
        <>
          <FilterScriptsSelect />
          <ScriptsList reviewsList={reviewsList} />
        </>
      )}
    </>
  );
};

Reviews.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Reviews;
