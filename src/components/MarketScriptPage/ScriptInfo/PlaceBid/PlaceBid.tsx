import { Typography } from "@mui/material";
import Btn from "@shared/Btn/Btn";
import CustomInput from "@shared/CustomInput/CustomInput";
import { Dispatch, SetStateAction } from "react";

interface IProps {
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const PlaceBid = ({ setOpen }: IProps) => {
  const handleOpen = () => setOpen(true);
  return (
    <div className="flex gap-6 mt-4 rounded-md py-3 px-5 sm:py-4 sm:px-6 lg:py-6 lg:px-8 xl:px-12 xl:py-8 sm:mt-10 md:gap-6 md:p-8 flex-col bg-tinted-50/60 flex-1 w-full">
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
      <div className="flex sm:flex-col gap-6 -mt-1 xl:mt-0 md:flex-row flex-wrap">
        <CustomInput
          InputProps={{ classes: { input: "bg-white rounded-lg" } }}
          className="flex-1 min-w-[190px] sm:min-w-[210px] max-w-xs sm:max-w-full text-tinted-200"
          variant="outlined"
          size="small"
          placeholder="Enter Bid"
        />
        <Btn onClick={handleOpen} size="small" className="mr-auto py-3 px-4">
          Place Bid
        </Btn>
      </div>
    </div>
  );
};

export default PlaceBid;
