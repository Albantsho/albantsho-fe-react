import { Chip, Icon, Rating, Typography } from "@mui/material";
import ReviewedIcon from "@assets/icons/reviewed.svg";
import Image from "next/image";
import beauty from "@assets/images/beauty.jpg";

const Heading = () => {
  return (
    <div className="flex flex-col md:flex-row gap-10 lg:gap-6 xl:gap-10">
      <div className="md:w-1/2 lg:w-2/5 2xl:w-1/4 flex-shrink-0">
        <Image
          src={beauty}
          className="rounded-xl"
          layout="responsive"
          alt="beauty"
        />
      </div>
      <div className="flex-shrink  mx-auto md:mx-0">
        <div className="flex mb-3 md:mb-5 flex-wrap items-center gap-x-6 sm:gap-10 md:gap-14">
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

        <div className="hidden md:block mt-4">
          <span className="text-tinted-500">Base Fee:</span>
          <br />
          <div className="flex gap-2 items-center">
            <Typography
              variant="h4"
              className="text-primary-main leading-normal font-semibold"
            >
              $4,000
            </Typography>
            <span className="text-neutral-500">(1.237 ETH)</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heading;
