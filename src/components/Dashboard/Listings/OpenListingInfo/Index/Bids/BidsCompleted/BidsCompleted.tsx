import { Typography } from "@mui/material";
import React from "react";
import CircularStatic from "../CircularProgress/CircularProgress";

const BidsCompleted = () => {
  return (
    <div className="max-w-2xl">
      <div className="bg-success-50 px-3 md:px-6 xl:px-10 py-5 md:py-7 xl:py-9 rounded-lg max-w-2xl mt-4 sm:mt-8 lg:mt-12 xl:mt-16">
        <Typography
          className="max-w-[350px] md:max-w-full text-success-500 font-normal"
          variant="h6"
        >
          Buyer has 24hours to make the payment for your script
        </Typography>
      </div>
      <div className="my-8  mx-auto w-[100px] md:hidden">
        <CircularStatic isSmall />
      </div>
      <div className="md:my-16 hidden mx-auto w-[200px] md:block">
        <CircularStatic />
      </div>
    </div>
  );
};

export default BidsCompleted;
