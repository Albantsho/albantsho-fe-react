import { Divider, Typography } from "@mui/material";
import React from "react";

const Drafts = () => {
  return (
    <div className="mt-8">
      <div className="bg-white p-3 inline-block rounded-md">
        <Typography
          variant="body1"
          color="primary.700"
          className="futura font-medium"
        >
          Uncompleted Listings
        </Typography>
      </div>
      <div className="bg-white mt-3 rounded-md">
        <Typography
          variant="body1"
          color="primary.700"
          className="px-3 py-5 font-medium futura"
        >
          Script
        </Typography>
        <Divider />
        <div className="mt-9 px-3">

        </div>
      </div>
    </div>
  );
};

export default Drafts;
