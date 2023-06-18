import ReviewedIcon from "@assets/icons/reviewed.svg";
import { Chip, Icon, Typography } from "@mui/material";
import CustomRating from "@shared/CustomRating/CustomRating";
import { IFullInformationScript } from "interfaces/script";
import Image from "next/image";

interface IProps {
  script: IFullInformationScript;
}

const ScriptInfo = ({ script }: IProps) => {
  return (
    <div className="flex flex-col px-6 pt-6 sm:px-10 lg:pt-16 gap-10 md:flex-row max-w-screen-xl mx-auto">
      <div className="md:w-1/2 lg:w-2/5 max-h-[530px] flex-shrink-0">
        <Image
          width={1000}
          height={560}
          className="rounded-xl w-full max-h-[530px] object-cover"
          src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${script.image}`}
          alt={script.title}
          unoptimized
        />
      </div>
      <div className="flex-shrink w-full">
        <div className="flex mb-3 md:mb-5 items-center flex-wrap gap-6 sm:gap-10 md:gap-14">
          <Chip
            label={script.scriptFormat}
            className="bg-tinted-50/60 text-neutral-800 py-5"
            sx={{ borderRadius: 1 }}
          />
          <CustomRating defaultValue={script.reviewerRate as number} readOnly />
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
          {script.tagline}
        </Typography>
      </div>
    </div>
  );
};

export default ScriptInfo;