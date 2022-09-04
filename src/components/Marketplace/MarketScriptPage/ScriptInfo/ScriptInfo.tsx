import {
  Chip,
  Icon,
  Rating,
  Typography,
} from "@mui/material";
import ReviewedIcon from "@assets/icons/reviewed.svg";
import Image from "next/image";
import beauty from "@assets/images/beauty.jpg";
import { useState } from "react";
import PlaceBid from "./PlaceBid/PlaceBid";
import ModalBidSuccessful from "../ModalBidSuccessful/ModalBidSuccessful";


const ScriptInfo = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex flex-col px-6 py-6 sm:px-11 gap-10 md:flex-row max-w-screen-2xl mx-auto">
      <div className="md:w-1/2 lg:w-2/5 flex-shrink-0">
        <Image
          src={beauty}
          className="rounded-xl"
          layout="responsive"
          alt="beauty"
        />
      </div>
      <div className="flex-shrink w-full">
        <div className="flex mb-3 md:mb-5 items-center flex-wrap gap-6 sm:gap-10 md:gap-14">
          <Chip
            label="Feature film"
            className="bg-tinted-50/60 text-neutral-800"
            sx={{ borderRadius: 1 }}
          />
          <Rating readOnly defaultValue={4} />
        </div>
        <div className="flex gap-8 items-center">
          <Typography
            variant="h5"
            color="primary.700"
            className="font-medium leading-normal futura"
          >
            The Long Man Of Long Beach
          </Typography>
          <Icon fontSize="large">
            <ReviewedIcon />
          </Icon>
        </div>

        <Typography variant="body1" color="dark.400">
          Story about a man who lived on long beach
        </Typography>
        <PlaceBid setOpen={setOpen} />
        <ModalBidSuccessful open={open} setOpen={setOpen} />
      </div>
    </div>
  );
};

export default ScriptInfo;
