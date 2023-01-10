import ProfileNav from "@shared/ProfileNav/ProfileNav";
import Head from "next/head";

import useReviewsApi from "apis/Reviews.api";
import Questionnaire from "components/Dashboard/Reviewer/Questionnaire/Questionnaire";
import { IReviewTypeB, IReviewValues } from "interfaces/reviews";
import { IScriptReviewer } from "interfaces/script";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { DotLoader } from "react-spinners";
import errorHandler from "utils/error-handler";

const QuestionnairePage = () => {
  const { query } = useRouter();
  const { getOneReview } = useReviewsApi();
  const [loading, setLoading] = useState(true);
  const [reviewValues, setReviewsValues] = useState<IReviewValues>(
    {} as IReviewValues
  );
  const [script, setScript] = useState<IScriptReviewer>({} as IScriptReviewer);

  useEffect(() => {
    async function getReviewValues() {
      try {
        if (typeof query.id === "string") {
          setLoading(true);
          const res = await getOneReview(query.id);
          console.log(res);
          setReviewsValues(res.data.review);
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
      {!loading && script && reviewValues ? (
        <Questionnaire script={script} reviewValues={reviewValues} />
      ) : (
        <DotLoader color="#7953B5" className="mx-auto mt-10" />
      )}
    </>
  );
};

export default QuestionnairePage;
