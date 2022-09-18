import { Typography } from "@mui/material";
import React from "react";

const TitleSignupForm = () => {
  return (
    <div className="lg:mt-28 px-8 mt-16 lg:px-24  mx-auto">
      <Typography
        variant="h3"
        color="primary.main"
        className="futura font-medium leading-normal"
        mb={1}
      >
        Create Account
      </Typography>
      <Typography
        color="grey.700"
        variant="body1"
        className="leading-6 md:max-w-[430px]"
      >
        Let’s get you all set up so you can start writing and trading script on
        our platform.
      </Typography>
    </div>
  );
};

export default TitleSignupForm;
