import ProfileNav from "@shared/ProfileNav/ProfileNav";
import useReviewsApi from "apis/Reviews.api";
import DescriptionTypeB from "components/Dashboard/Reviewer/Preview/Description/DescriptionTypeB/DescriptionTypeB";
import Heading from "components/Dashboard/Reviewer/Preview/Heading/Heading";
import { IReviewValuesTypeB } from "interfaces/reviews";
import { IScriptReviewer } from "interfaces/script";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { DotLoader } from "react-spinners";
import errorHandler from "utils/error-handler";

const PreviewTypeB = () => {
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
        errorHandler(error);
      }
    }
    getReviewValues();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  return (
    <>
      <Head>
        <title>Albantsho || Preview</title>
      </Head>
      <ProfileNav color="inherit" position="static" />
      {!loading && script && reviewValuesTypeB ? (
        <div className="py-6 md:py-6 lg:py-8 bg-[#f6f8fc] flex items-center flex-col px-5 sm:px-10">
          <div className="bg-white shadow-primary rounded-lg  pt-10 lg:pt-20 flex flex-col items-center max-w-5xl mx-auto px-5">
            <Heading script={script} />
            <DescriptionTypeB reviewValuesTypeB={reviewValuesTypeB} />
          </div>
        </div>
      ) : (
        <DotLoader color="#7953B5" className="mx-auto mt-10" />
      )}
    </>
  );
};

export default PreviewTypeB;
