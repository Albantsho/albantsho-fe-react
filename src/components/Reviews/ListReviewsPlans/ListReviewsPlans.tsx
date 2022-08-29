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
    <div className="w-full mt-3">
      <Divider />
      <div className="mt-8 px-8 sm:px-11 flex flex-col gap-3">
        <Subscription
          button="Proceed to pay"
          changeColor="text-[#7B61FF]"
          isShowIcon={false}
          plans={list}
          title="$100"
        />
        <Subscription
          button="Proceed to pay"
          changeColor="text-success-500"
          isShowIcon={false}
          plans={list}
          title="$300"
        />
      </div>
    </div>
  );
};

export default ListReviewsPlans;
