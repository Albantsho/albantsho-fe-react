import { Typography } from "@mui/material";
import Btn from "@shared/Btn/Btn";
import Image from "next/image";
import routes from "routes/routes";
import commentImage from "./assets/comment-image.png";

const HeadingIDraft = () => {
  return (
    <div className="flex max-w-screen-lg mx-auto justify-between gap-5 w-full px-5 sm:px-10 py-16 lg:py-28 items-center">
      <div data-aos="fade-right" className="max-w-[607px]">
        <Typography
          variant="h5"
          color="grey.900"
          className="max-w-xs md:max-w-md lg:w-full leading-normal font-semibold"
        >
          WE ARE A PLATFORM ENABLING
          <span className="text-purple-700"> AFRICAN STORIES</span> ONE SCRIPT
          AT A TIME
        </Typography>
        <div className="md:mt-8 mt-6">
          <Btn
            href={routes.iDraftTermsAndConditions.url}
            size="large"
            className="py-4 px-6 "
          >
            Apply now
          </Btn>
        </div>
      </div>
      <div data-aos="fade-left" className="hidden lg:block">
        <Image src={commentImage} objectFit="cover" alt="commentImage" />
      </div>
    </div>
  );
};

export default HeadingIDraft;
