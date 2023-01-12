import Head from "next/head";
import ProfileNav from "@shared/ProfileNav/ProfileNav";
import useReviewsApi from "apis/Reviews.api";
import { IScriptReviewer } from "interfaces/script";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { DotLoader } from "react-spinners";
import errorHandler from "utils/error-handler";
import QuestionnaireTypeA from "components/Dashboard/Reviewer/Questionnaire/QuestionnaireTypeA/QuestionnaireTypeA";
import { IReviewValuesTypeA } from "interfaces/reviews";

const TypeA = () => {
  const { query } = useRouter();
  const { getOneReview } = useReviewsApi();
  const [loading, setLoading] = useState(true);
  const [reviewValuesTypeA, setReviewValuesTypeA] =
    useState<IReviewValuesTypeA>({} as IReviewValuesTypeA);
  const [script, setScript] = useState<IScriptReviewer>({} as IScriptReviewer);

  useEffect(() => {
    async function getReviewValues() {
      try {
        if (typeof query.id === "string") {
          setLoading(true);
          const res = await getOneReview(query.id);
          console.log(res);
          setReviewValuesTypeA(res.data.review);
          setScript(res.data.script);
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
        <title>Albantsho || Questionnaire</title>
      </Head>
      <ProfileNav color="inherit" position="static" />
      {!loading && script && reviewValuesTypeA ? (
        <QuestionnaireTypeA
          script={script}
          reviewValuesTypeA={reviewValuesTypeA}
        />
      ) : (
        <DotLoader color="#7953B5" className="mx-auto mt-10" />
      )}
    </>
  );
};

export default TypeA;
