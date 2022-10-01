import { Typography } from "@mui/material";
import Btn from "@shared/Btn/Btn";
import CustomInput from "@shared/CustomInput/CustomInput";
import { Dispatch, SetStateAction } from "react";

interface IProps {
  setOpenBidSuccessful: Dispatch<SetStateAction<boolean>>;
}

const PlaceBid = ({ setOpenBidSuccessful }: IProps) => {
  const handleOpenBidSuccessful = () => setOpenBidSuccessful(true);
  return (
    <div className="flex gap-6 mt-4 rounded-md py-6 px-5 sm:py-12 sm:px-6 lg:px-8 xl:px-12 xl:py-8 sm:mt-10 md:gap-6 flex-col bg-tinted-50/60 flex-1 w-full">
      <div className="flex flex-col">
        <Typography variant="button">Price</Typography>
        <div className="space-x-2 flex items-center">
          <Typography
            variant="h4"
            className="text-primary-main leading-normal font-semibold"
          >
            $1,000
          </Typography>
          <span className="text-neutral-500">(1.237 ETH)</span>
        </div>
      </div>
      <div className="flex sm:flex-col gap-3 sm:gap-6 -mt-1 xl:mt-0 md:flex-row flex-wrap">
        <CustomInput
          InputProps={{ classes: { input: "bg-white rounded-lg" } }}
          className="flex-1 min-w-[170px] sm:min-w-[210px] max-w-xs sm:max-w-md text-tinted-200"
          variant="outlined"
          size="small"
          placeholder="Enter Bid"
        />
        <Btn
          onClick={handleOpenBidSuccessful}
          size="small"
          className="mr-auto py-3 px-4"
        >
          Place Bid
        </Btn>
      </div>
    </div>
  );
};

export default PlaceBid;
