import ReviewedIcon from "@assets/icons/reviewed.svg";
import { Chip, Icon, Typography } from "@mui/material";
import CustomRating from "@shared/CustomRating/CustomRating";
import { IProduct } from "interfaces/product";
import { IFullInformationScript } from "interfaces/script";
import Image from "next/image";
import { useState } from "react";
import BidSuccessfulModal from "../BidSuccessfulModal/BidSuccessfulModal";
import PlaceBid from "./PlaceBid/PlaceBid";

interface IProps {
  script: IFullInformationScript;
}

const ScriptInfo = ({ script }: IProps) => {
  const [openBidSuccessful, setOpenBidSuccessful] = useState(false);

  return (
    <div className="flex flex-col px-6 py-6 sm:px-11 gap-10 md:flex-row max-w-screen-2xl mx-auto">
      <div className="md:w-1/2 lg:w-2/5 flex-shrink-0">
        <Image src={script.script_image} className="rounded-xl" alt="beauty" />
      </div>
      <div className="flex-shrink w-full">
        <div className="flex mb-3 md:mb-5 items-center flex-wrap gap-6 sm:gap-10 md:gap-14">
          <Chip
            label={script.scriptFormat}
            className="bg-tinted-50/60 text-neutral-800"
            sx={{ borderRadius: 1 }}
          />
          <CustomRating defaultValue={4} />
        </div>
        <div className="flex gap-8 items-center">
          <Typography
            variant="h5"
            color="primary.700"
            className="font-medium leading-normal futura"
          >
            {script.title}
          </Typography>
          <Icon fontSize="large">
            <ReviewedIcon />
          </Icon>
        </div>
        <Typography variant="body1" color="dark.400">
          {script.motivation}
        </Typography>
        <PlaceBid script={script} setOpenBidSuccessful={setOpenBidSuccessful} />
        <BidSuccessfulModal
          openBidSuccessful={openBidSuccessful}
          setOpenBidSuccessful={setOpenBidSuccessful}
        />
      </div>
    </div>
  );
};

export default ScriptInfo;
