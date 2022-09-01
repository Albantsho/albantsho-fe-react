import { Divider } from "@mui/material";
import Subscription from "@shared/Subscription/Subscription";
import React from "react";

const list = [
  "Auctor felis aliquet at mollis.",
  "Blandit vel mauris morbi.,",
  "Facilisi vestibulum risus.",
  "Non viverra molestie blandit.",
  "Orci tortor eget at fringilla.",
];

const ListReviewsPlans = () => {
  return (
    <div className="w-full mt-3 min-h-screen pb-10">
      <Divider />
      <div className="mt-8  sm:pl-11 pl:0 sm:px-0 flex flex-wrap gap-3 md:gap-4">
        <Subscription
          type="Type B"
          button="Proceed to pay"
          changeColor="text-[#7B61FF]"
          isShowIcon={true}
          plans={list}
          title="$100"
          description="This package gets you a complete review of the following:"
        />
        <Subscription
          type="Type B"
          button="Proceed to pay"
          changeColor="text-success-500"
          isShowIcon={true}
          plans={list}
          title="$300"
          description="This package gets you a complete review of the following:"
        />
      </div>
    </div>
  );
};

export default ListReviewsPlans;
