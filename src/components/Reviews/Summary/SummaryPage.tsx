import { Chip, Divider, Typography } from "@mui/material";
import Btn from "@shared/Btn/Btn";

const SummaryPage = () => {
  return (
    <div className="pb-5 bg-white lg:min-h-[100vh] 2xl:min-h-fit">
      <Divider />
      <div className=" mt-7 rounded-md  lg:px-6 lg:py-9 xl:px-9 xl:py-12 lg:shadow-md lg:mx-10 xl:mx-16">
        <Typography variant="h4" color="primary.700" className="mb-2 futura leading-normal sm:mb-2">
          Reviews
        </Typography>
        <div className="flex flex-wrap max-w-[380px] lg:max-w-max lg:items-center gap-x-5 gap-y-3 ">
          <Typography variant="h6" color="primary.700" className="">
            The Apple and The Berry
          </Typography>
          <Chip
            label="Feature film"
            className="rounded bg-tinted-50/60 text-neutral-800 lg:mr-1"
          />
          <Divider
            className="hidden lg:block"
            orientation="vertical"
            flexItem
          />
          <div>
            <span>Review Fee:</span> <br />
            <div className="flex gap-1 items-center">
              <Typography color="primary.700" className="lg:leading-normal" variant="h5">
                $100
              </Typography>
              <Typography variant="caption" color="primary.700">
                (0.0237 ETH)
              </Typography>
            </div>
          </div>
        </div>
        <Btn className="mt-4 py-3 px-7 lg:mt-10 xl:mt-20" size="large">
          Proceed to pay
        </Btn>
      </div>
    </div>
  );
};

export default SummaryPage;
