import DashboardLayout from "@shared/Layouts/DashboardLayout/DashboardLayout";
import Loader from "@shared/Loader/Loader";
import useReviewsApi from "apis/Reviews.api";
import OneReview from "components/Dashboard/Writer/Reviews/OneReview/OneReview";
import { IReviewValuesTypeB } from "interfaces/reviews";
import { IScriptReviewer } from "interfaces/script";
import Head from "next/head";
import { useRouter } from "next/router";
import { NextPageWithLayout } from "pages/_app";
import { useEffect, useState } from "react";

export interface IReviewInformation {
  script: IScriptReviewer;
  review: IReviewValuesTypeB;
}

const OneReviewPage: NextPageWithLayout = () => {
  const { query } = useRouter();
  const { getOneReview } = useReviewsApi();
  const [loading, setLoading] = useState(true);
  const [reviewInformation, setReviewInformation] =
    useState<IReviewInformation>({} as IReviewInformation);

  useEffect(() => {
    async function getReviewValues() {
      try {
        if (typeof query.id === "string") {
          setLoading(true);
          const res = await getOneReview(query.id);
          setReviewInformation(res.data);
          setLoading(false);
        }
      } catch (error) {
        ("");
      }
    }
    getReviewValues();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  return (
    <>
      <Head>
        <title>Albantsho || OneReviewPage</title>
      </Head>
      {loading ? (
        <Loader setCustomHeight="min-h-[55vh]" />
      ) : (
        <>
          <OneReview reviewInformation={reviewInformation} />
        </>
      )}
    </>
  );
};

OneReviewPage.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default OneReviewPage;
