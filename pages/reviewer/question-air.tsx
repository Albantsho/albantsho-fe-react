import Description from "components/Reviewer/QuestionAir/Description/Description";
import Heading from "components/Reviewer/QuestionAir/Heading/Heading";
import SendReview from "components/Reviewer/QuestionAir/Modals/SendReview/SendReview";
import SuccessReview from "components/Reviewer/QuestionAir/Modals/SuccessReview/SuccessReview";
import Ratings from "components/Reviewer/QuestionAir/Ratings/Ratings";
import { useState } from "react";

const QuestionAir = () => {
  const [openSendReview, setOpenSendReview] = useState(false);
  const [openSuccessReview, setOpenSuccessReview] = useState(false);

  return (
    <div className="pt-10  bg-[#f5f5f5] flex items-center flex-col px-5 sm:px-10">
       <SendReview
        openSendReview={openSendReview}
        setOpenSendReview={setOpenSendReview}
        setOpenSuccessReview={setOpenSuccessReview}
      />
      <SuccessReview
        openSuccessReview={openSuccessReview}
        setOpenSuccessReview={setOpenSuccessReview}
      />
      <div className="bg-white rounded-lg pt-6 sm:pt-10 lg:pt-20 flex flex-col items-center max-w-5xl mx-auto">
        <Heading />
        <Description setOpenSendReview={setOpenSendReview} />
      </div> 

    </div>
  );
};

export default QuestionAir;
