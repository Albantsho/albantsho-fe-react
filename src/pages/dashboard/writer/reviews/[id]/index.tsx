import DashboardLayout from "@shared/Layouts/DashboardLayout/DashboardLayout";
import useReviewsApi from "apis/Reviews.api";
import OneReview from "components/Dashboard/Writer/Reviews/OneReview/OneReview";
import { IReviewValuesTypeB } from "interfaces/reviews";
import { IScriptReviewer } from "interfaces/script";
import Head from "next/head";
import { useRouter } from "next/router";
import { NextPageWithLayout } from "pages/_app";
import { useEffect, useState } from "react";
import { DotLoader } from "react-spinners";
import errorHandler from "utils/error-handler";

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
          console.log(res);
          setReviewInformation(res.data);
          setLoading(false);
        }
      } catch (error) {
        console.log(error);
        errorHandler(error);
      }
    }
    getReviewValues();
  }, [query]);

  return (
    <>
      <Head>
        <title>Albantsho || OneReviewPage</title>
      </Head>
      {loading ? (
        <DotLoader color="#7953B5" className="mx-auto mt-10" />
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
