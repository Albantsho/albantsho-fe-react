import ProfileNav from "@shared/ProfileNav/ProfileNav";
import useReviewsApi from "apis/Reviews.api";
import QuestionnaireTypeA from "components/Dashboard/Reviewer/Questionnaire/QuestionnaireTypeA/QuestionnaireTypeA";
import { IReviewValuesTypeA } from "interfaces/reviews";
import { IScriptReviewer } from "interfaces/script";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { DotLoader } from "react-spinners";

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
          setReviewValuesTypeA(res.data.review);
          setScript(res.data.script);
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
