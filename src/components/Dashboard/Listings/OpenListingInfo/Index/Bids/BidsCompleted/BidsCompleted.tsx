import { Typography } from "@mui/material";
import React from "react";
import CircularStatic from "../CircularProgress/CircularProgress";

const BidsCompleted = () => {
  return (
    <>
      <div className="bg-success-50 px-3 py-5 rounded-lg max-w-2xl mt-4 sm:mt-8">
        <Typography
          className="max-w-[350px] md:max-w-full text-success-500"
          variant="body1"
        >
          Buyer has 24hours to make the payment for your script
        </Typography>
      </div>
      <CircularStatic />
    </>
  );
};

export default BidsCompleted;
