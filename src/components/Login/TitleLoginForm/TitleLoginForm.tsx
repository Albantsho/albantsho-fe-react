import { Typography } from "@mui/material";

const TitleLoginForm = () => {
  return (
    <div
      className="lg:mt-28 mt-16 px-8  lg:mb-12  lg:px-24  mx-auto"
    >
      <Typography
        variant="h3"
        color="primary.main"
        className="futura font-medium leading-normal lg:mb-4"
      >
        Welcome
      </Typography>
      <Typography variant="body1" className="max-w-[430px]" color="grey.700">
        It’s nice to have you back, Sign back in to write or find the perfect
        script for you.
      </Typography>
    </div>
  );
};

export default TitleLoginForm;
