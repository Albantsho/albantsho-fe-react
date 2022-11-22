import ProfileNav from "@shared/ProfileNav/ProfileNav";
import Description from "components/Dashboard/Reviewer/Preview/Description/Description";
import Heading from "components/Dashboard/Reviewer/Preview/Heading/Heading";
import Head from "next/head";
import { Suspense, useState } from "react";
import dynamic from "next/dynamic";

const SuccessReviewModal = dynamic(
  () =>
    import(
      "components/Dashboard/Reviewer/Preview/Modals/SuccessReviewModal/SuccessReviewModal"
    )
);
const SendReviewModal = dynamic(
  () =>
    import(
      "components/Dashboard/Reviewer/Preview/Modals/SendReviewModal/SendReviewModal"
    )
);

const Preview = () => {
  const [openSendReview, setOpenSendReview] = useState(false);
  const [openSuccessReview, setOpenSuccessReview] = useState(false);

  return (
    <>
      <Head>
        <title>Albantsho || Preview</title>
      </Head>
      <ProfileNav color="inherit" position="static" />
      <div className="py-6 md:py-6 lg:py-8 bg-[#f6f8fc] flex items-center flex-col px-5 sm:px-10">
        <Suspense fallback={null}>
          <SendReviewModal
            openSendReview={openSendReview}
            setOpenSendReview={setOpenSendReview}
            setOpenSuccessReview={setOpenSuccessReview}
          />
          <SuccessReviewModal
            openSuccessReview={openSuccessReview}
            setOpenSuccessReview={setOpenSuccessReview}
          />
        </Suspense>
        <div className="bg-white shadow-primary rounded-lg  pt-10 lg:pt-20 flex flex-col items-center max-w-5xl mx-auto px-5">
          <Heading />
          <Description setOpenSendReview={setOpenSendReview} />
        </div>
      </div>
    </>
  );
};

export default Preview;
