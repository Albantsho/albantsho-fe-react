import { Typography } from "@mui/material";
import Image from "next/image";
import vector from "./assets/vector.png";

const DescriptionIDraft = () => {
  return (
    <div className=" bg-[#e5e5e5]">
      <div className="pt-14 px-5 sm:px-10 pb-14 flex flex-col items-center lg:flex-row max-w-screen-lg justify-between mx-auto w-full   ">
        <div className="xl:ml-4 mb-10 ">
          <Image src={vector} alt="tv-show" layout="fixed" />
        </div>
        <div className="max-w-[585px]">
          <Typography
            variant="h5"
            color="grey.900"
            className="font-semibold   mb-4 leading-normal"
          >
            iDraft Screenwriting Workshop
          </Typography>
          <Typography variant="subtitle1" color="grey.500">
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
        </div>
      </div>
    </div>
  );
};

export default DescriptionIDraft;
