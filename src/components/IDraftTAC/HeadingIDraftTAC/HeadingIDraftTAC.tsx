import { Box, Typography } from "@mui/material";
import React from "react";

const HeadingIDraftTAC = () => {
  return (
    <div className="lg:px-44  gap-7 pt-16 px-4 ">
      <Box className="lg:w-2/5">
        <Typography
          variant="h5"
          color="grey.900"
          className=" w-4/6 lg:w-full font-semibold"
        >
          TERMS AND CONDITONS FOR
          <span className="text-purple-700">IDRAFT</span> WORKSHOP APPLICATION
        </Typography>
      </Box>
    </div>
  );
};

export default HeadingIDraftTAC;
