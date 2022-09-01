import {
  Chip,
  Icon,
  IconButton,
  Modal,
  Rating,
  Typography,
} from "@mui/material";
import ReviewedIcon from "./assets/reviewed.svg";
import Image from "next/image";
import success from "@assets/images/success.png";
import beauty from "./assets/beauty.jpg";
import { useState } from "react";
import PlaceBid from "./PlaceBid/PlaceBid";
import { AiOutlineClose } from "react-icons/ai";

const ScriptInfo = () => {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
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
        <div className="flex mb-3 md:mb-5 items-center gap-6 sm:gap-10 md:gap-14">
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
        <Modal className="px-5" open={open} onClose={handleClose}>
          <div className="px-6 relative bg-white w-full mt-44 max-w-xl mx-auto flex flex-col items-center py-16 rounded-lg">
            <IconButton
              onClick={handleClose}
              className="absolute top-5 right-5"
            >
              <AiOutlineClose className="text-error-500" />
            </IconButton>
            <div>
              <Image src={success} alt="success" />
            </div>
            <Typography color="primary.700" mt={1} variant="h5">
              Bid Successful
            </Typography>
            <Typography className="text-center text-[#484848]">
              You have successfully placed a bid on this script. Check your
              dashboard to monitor your bids
            </Typography>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default ScriptInfo;
