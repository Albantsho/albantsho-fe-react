import { Box, Typography } from "@mui/material";
import Image from "next/image";
import vector from "./assets/vector.png";

const DescriptionIDraft = () => {
  return (

      <Box className="pt-14 px-4 pb-14 flex flex-col items-center lg:flex-row lg:px-44 justify-between bg-[#e5e5e5]">
        <div className="max-w-[190px] mb-10 lg:w-1/2 mx-auto">
          <Image src={vector} alt="tv-show" layout="fixed" />
        </div>
        <Box className="lg:w-1/2 w-full">
          <Typography
            variant="h5"
            color="grey.900"
            className="font-semibold w-3/5 lg:w-full mb-4"
          >
            iDraft Screenwriting Workshop
          </Typography>
          <Typography
            variant="subtitle2"
            color="grey.500"
          >
            Albantsho presents an intensive 8-week screenwriting workshop where
            we walk you through the scripting stage of filmmaking from its
            ideation to filmable final drafts. This workshop is tailored for
            promising writers at beginners and intermediate levels and provides
            practical support to ensure screenplays are compelling, cathartic
            and entertaining.
            <br />
            <br />
            Our aim is to provide screenwriters with aid, education and
            refinement of their unique stories which is then immediately
            acquired by our partnering producers.
          </Typography>
        </Box>
      </Box>

  );
};

export default DescriptionIDraft;
