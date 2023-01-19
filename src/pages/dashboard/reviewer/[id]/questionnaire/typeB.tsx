import ProfileNav from "@shared/ProfileNav/ProfileNav";
import useReviewsApi from "apis/Reviews.api";
import QuestionnaireTypeB from "components/Dashboard/Reviewer/Questionnaire/QuestionnaireTypeB/QuestionnaireTypeB";
import { IReviewValuesTypeB } from "interfaces/reviews";
import { IScriptReviewer } from "interfaces/script";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { DotLoader } from "react-spinners";

const TypeB = () => {
  const { query } = useRouter();
  const { getOneReview } = useReviewsApi();
  const [loading, setLoading] = useState(true);
  const [reviewValuesTypeB, setReviewValuesTypeB] =
    useState<IReviewValuesTypeB>({} as IReviewValuesTypeB);
  const [script, setScript] = useState<IScriptReviewer>({} as IScriptReviewer);

  useEffect(() => {
    async function getReviewValues() {
      try {
        if (typeof query.id === "string") {
          setLoading(true);
          const res = await getOneReview(query.id);

          setReviewValuesTypeB(res.data.review);
          setScript(res.data.script);
          setLoading(false);
        }
      } catch (error) {
        ("");
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
      {!loading && script && reviewValuesTypeB ? (
        <QuestionnaireTypeB
          script={script}
          reviewValuesTypeB={reviewValuesTypeB}
        />
      ) : (
        <DotLoader color="#7953B5" className="mx-auto mt-10" />
      )}
    </>
  );
};

export default TypeB;
