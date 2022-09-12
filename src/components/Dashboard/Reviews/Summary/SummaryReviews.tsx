import { Chip, Divider, Typography } from "@mui/material";
import Btn from "@shared/Btn/Btn";

const SummaryReviews = () => {
  return (
    <div className="pb-9 lg:pb-16 bg-white rounded-md px-5 sm:px-10 xl:px-20">
      <Divider />
      <div className="mt-7 lg:mt-12 rounded-md  lg:px-10 xl:px-14  lg:py-9  xl:py-12 lg:shadow-md  max-w-3xl">
        <Typography
          variant="h4"
          color="primary.700"
          className="mb-3 futura font-medium leading-normal text-[#7B61FF] lg:mb-6"
        >
          Type A Review
        </Typography>
        <div className="flex flex-wrap max-w-[380px] mb-2 lg:mb-5 lg:max-w-max lg:items-center gap-x-5 gap-y-3 sm:gap-y-1">
          <Typography variant="h5" color="primary.700" className="futura font-medium" >
            The Apple and The Berry
          </Typography>
          <Chip
            label="Feature film"
            className="rounded bg-tinted-50/60 text-neutral-800 lg:mr-5 md:px-4 md:py-5"
          />
          <Divider
            className="hidden lg:block lg:mr-5"
            orientation="vertical"
            flexItem
          />
          <div>
            <span className="font-semibold" >Review Fee:</span> <br />
            <div className="flex gap-1 items-center">
              <Typography
                color="primary.700"
                className="lg:leading-normal font-semibold"
                variant="h5"
              >
                $100
              </Typography>
              <Typography variant="body1" color="primary.700">
                (0.0237 ETH)
              </Typography>
            </div>
          </div>
        </div>
        <Btn className="mt-4 py-3 px-7 xl:m12" size="large">
          Proceed to pay
        </Btn>
      </div>
    </div>
  );
};

export default SummaryReviews;
