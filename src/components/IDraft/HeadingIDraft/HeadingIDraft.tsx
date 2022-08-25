import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import Btn from "@shared/Btn/Btn";
import Image from "next/image";
import commentImage from "./assets/comment-image.png";

const HeadingIDraft = () => {
  return (
    <div className="flex lg:px-44 justify-between gap-7 pt-16 px-4 pb-20">
      <Box className="lg:w-1/2">
        <Typography
          variant="h5"
          color="grey.900"
          className=" w-4/6 lg:w-full font-semibold"
        >
          WE ARE A PLATFORM ENABLING
          <span className="text-purple-700">AFRICAN STORIES</span> ONE SCRIPT AT
          A TIME
        </Typography>
        <div className="mt-12">
          <Btn size="large">
            Apply now
          </Btn>
        </div>
      </Box>
      <div className="hidden lg:block">
        <Image
          src={commentImage}
          objectFit="cover"
          alt="commentImage"
        />
      </div>
    </div>
  );
};

export default HeadingIDraft;
