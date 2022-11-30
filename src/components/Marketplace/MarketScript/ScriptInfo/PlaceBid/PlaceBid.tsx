import { Typography } from "@mui/material";
import Btn from "@shared/Btn/Btn";
import CustomInput from "@shared/CustomInput/CustomInput";
import useScripBidApi from "apis/ScripBid.api";
import { IFullInformationScript } from "interfaces/script";
import { useState } from "react";
import errorHandler from "utils/error-handler";

interface IProps {
  setOpenBidSuccessful: React.Dispatch<React.SetStateAction<boolean>>;
  script: IFullInformationScript;
}

const PlaceBid = ({ setOpenBidSuccessful, script }: IProps) => {
  const [bidValue, setBidValue] = useState("");
  const { createBid, deleteBid } = useScripBidApi();
  const handleBidValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const result = e.target.value.replace(/\D/g, "");
    setBidValue(result);
  };

  const handleOpenBidSuccessful = async () => {
    try {
      await createBid({ amount: +bidValue, scriptId: script._id });
      setOpenBidSuccessful(true);
    } catch (error) {
      errorHandler(error);
    }
  };

  const handleCloseBidSuccessful = async () => {
    try {
      await deleteBid(script._id);
    } catch (error) {
      errorHandler(error);
    }
  };

  return (
    <div className="flex gap-6 mt-4 rounded-md py-6 px-5 sm:py-12 sm:px-6 lg:px-8 xl:px-12 xl:py-8 sm:mt-10 md:gap-6 flex-col bg-tinted-50/60 flex-1 w-full">
      <div className="flex flex-col">
        <Typography variant="button">Price</Typography>
        <div className="space-x-2 flex items-center">
          <Typography
            variant="h4"
            className="text-primary-main leading-normal font-semibold"
          >
            ${script.script_price}
          </Typography>
          <span className="text-neutral-500">(1.237 ETH)</span>
        </div>
      </div>
      <div className="flex sm:flex-col gap-3 sm:gap-6 -mt-1 xl:mt-0 md:flex-row flex-wrap">
        <CustomInput
          value={bidValue}
          onChange={handleBidValue}
          InputProps={{ classes: { input: "bg-white rounded-lg" } }}
          className="flex-1 min-w-[170px] sm:min-w-[210px] max-w-xs sm:max-w-md text-tinted-200"
          variant="outlined"
          size="small"
          placeholder="Enter Bid"
          type="tel"
        />
        <Btn
          onClick={handleOpenBidSuccessful}
          size="small"
          className="mr-auto py-3 px-4"
        >
          Place Bid
        </Btn>
        <Btn
          variant="outlined"
          onClick={handleCloseBidSuccessful}
          size="small"
          className="mr-auto py-3 px-4"
        >
          Withdraw Bid
        </Btn>
      </div>
    </div>
  );
};

export default PlaceBid;
