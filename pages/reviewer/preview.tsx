import Description from "components/Reviewer/Preview/Description/Description";
import Heading from "components/Reviewer/Preview/Heading/Heading";
import SendReview from "components/Reviewer/Preview/Modals/SendReview/SendReview";
import SuccessReview from "components/Reviewer/Preview/Modals/SuccessReview/SuccessReview";
import Head from "next/head";
import { useState } from "react";

const Preview = () => {
  const [openSendReview, setOpenSendReview] = useState(false);
  const [openSuccessReview, setOpenSuccessReview] = useState(false);

  return (
    <>
    <Head>
      <title>Albantsho || Preview</title>
    </Head>
      <div className="py-6 md:py-6 lg:py-8 bg-[#f6f8fc] flex items-center flex-col px-5 sm:px-10">
        <SendReview
          openSendReview={openSendReview}
          setOpenSendReview={setOpenSendReview}
          setOpenSuccessReview={setOpenSuccessReview}
        />
        <SuccessReview
          openSuccessReview={openSuccessReview}
          setOpenSuccessReview={setOpenSuccessReview}
        />
        <div className="bg-white shadow-primary rounded-lg  pt-10 lg:pt-20 flex flex-col items-center max-w-5xl mx-auto px-5">
          <Heading />
          <Description setOpenSendReview={setOpenSendReview} />
        </div>
      </div>
    </>
  );
};

export default Preview;
