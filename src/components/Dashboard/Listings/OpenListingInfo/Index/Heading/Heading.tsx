import { Chip, Icon, Typography } from "@mui/material";
import ReviewedIcon from "@assets/icons/reviewed.svg";
import Image from "next/image";
import beauty from "@assets/images/beauty.jpg";
import CustomRating from "@shared/CustomRating/CustomRating";

const Heading = () => {
  return (
    <div className="flex flex-col  md:flex-row lg:flex-col xl:flex-row gap-10 lg:gap-6 xl:gap-10">
      <div className="self-center md:self-start lg:self-center xl:self-start">
        <Image
          width={300}
          height={300}
          src={beauty}
          className="rounded-xl"
          alt="beauty"
        />
      </div>
      <div className="flex-shrink lg:flex-grow-0  mx-auto md:mx-0 lg:mx-auto xl:mx-0">
        <div className="flex mb-3 md:mb-5 flex-wrap items-center gap-x-6 gap-y-2">
          <Chip
            label="Feature film"
            className="bg-tinted-50/60 py-5 px-4 text-neutral-800"
            sx={{ borderRadius: 1 }}
          />
          <CustomRating readOnly defaultValue={4} />
        </div>

        <Typography
          variant="h4"
          color="primary.700"
          className="font-medium leading-normal futura"
        >
          The Long Man Of Long Beach
          <Icon className="-mb-2 ml-2 lg:ml-5" fontSize="large">
            <ReviewedIcon />
          </Icon>
        </Typography>

        <Typography
          variant="body1"
          className="font-normal xl:mt-2 text-tinted-500 leading-normal"
        >
          Story about a man who lived on long beach
        </Typography>

        <div className="mt-4">
          <Typography variant="caption" className="text-tinted-500">
            Base Fee:
          </Typography>
          <br />
          <div className="flex gap-2 items-center">
            <Typography
              variant="h6"
              className="text-primary-main leading-normal font-semibold"
            >
              $4,000
            </Typography>
            <Typography variant="body1" color="primary">
              (1.237 ETH)
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heading;
