import { Chip, Icon, Rating, Typography } from "@mui/material";
import ReviewedIcon from "./assets/reviewed.svg";
import Btn from "@shared/Btn/Btn";
import Image from "next/image";
import beauty from "./assets/beauty.jpg";
import CustomInput from "@shared/CustomInput/CustomInput";

const ScriptInfo = () => {
  return (
    <div className="flex flex-col px-5 py-6 md:px-16 gap-8 md:flex-row">
      <div className="md:w-2/5 rounded-xl overflow-hidden">
        <Image src={beauty} layout="responsive" alt="beauty" />
      </div>
      <div className="flex-1">
        <div className="flex mb-5 items-center gap-10 md:gap-14">
          <Chip label="Feature film" sx={{ borderRadius: 1 }} />
          <Rating readOnly defaultValue={4} />
        </div>
        <div className="flex gap-8">
          <Typography
            variant="h5"
            color="primary.700"
            className="font-medium futora"
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

        <div className="flex gap-6 mt-10 md:gap-6 md:p-8 flex-col">
          <div className="flex flex-col">
            <Typography variant="button">Price</Typography>
            <div className="space-x-2">
              <span className="text-primary-main text-lg font-semibold">
                $1,000
              </span>
              <span className="text-neutral-300">(1.237 ETH)</span>
            </div>
          </div>
          <div className="flex flex-col gap-6 md:flex-row">
            <CustomInput
              className="flex-1"
              variant="outlined"
              size="medium"
              placeholder="Enter Bid"
            />
            <Btn
              sx={{ paddingY: { xs: 1.5 }, paddingX: { xs: 3 } }}
              size="large"
              className="mr-auto"
            >
              Place Bid
            </Btn>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScriptInfo;
