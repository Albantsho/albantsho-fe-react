import { Typography } from "@mui/material";

const TitleSigninForm = () => {
  return (
    <>
      <Typography
        variant="h3"
        color="primary.main"
        className="futura font-medium leading-normal lg:mb-4"
      >
        Welcome
      </Typography>
      <Typography className="max-w-[430px] mb-12" color="grey.700">
        It’s nice to have you back, Sign back in to write or find the perfect
        script for you.
      </Typography>
    </>
  );
};

export default TitleSigninForm;
