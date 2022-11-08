import beautySmall from "@assets/images/beauty-small.jpg";
import { Button, Chip, Divider, Paper, Typography } from "@mui/material";
import { IProduct } from "interfaces/product";
import React, { Dispatch, SetStateAction } from "react";

const UnlistedItems = [
  {
    id: 1,
    image: beautySmall,
    title: "The Long man of Long Beach",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesu fermentum ipsum ",
    scriptType: "Tv Pilot",
  },
  {
    id: 2,
    image: beautySmall,
    title: "The Long man of Long Beach",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesu fermentum ipsum ",
    scriptType: "Feature Film",
  },
  {
    id: 3,
    image: beautySmall,
    title: "The Long man of Long Beach",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesu fermentum ipsum ",
    scriptType: "Feature Film",
  },
  {
    id: 4,
    image: beautySmall,
    title: "The Long man of Long Beach",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesu fermentum ipsum ",
    scriptType: "Tv Pilot",
  },
  {
    id: 5,
    image: beautySmall,
    title: "The Long man of Long Beach",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesu fermentum ipsum ",
    scriptType: "Feature Film",
  },
];

interface IProps {
  setOpenRelistScript: Dispatch<SetStateAction<boolean>>;
  unListedScripts: IProduct[];
}

const UnlistedList = ({ setOpenRelistScript, unListedScripts }: IProps) => {
  return (
    <Paper elevation={0} className="mt-4 sm:mt-6 bg-white shadow-primary">
      <div className="border-b border-tinted-100 px-5 py-5 xl:px-14 xl:py-8 flex">
        <Typography
          variant="h6"
          className="futura w-1/2 sm:w-full md:max-w-[220px]  lg:max-w-full xl:max-w-[415px] font-medium text-primary-700"
        >
          Script
        </Typography>

        <Typography
          variant="h6"
          className="futura hidden  md:block lg:hidden xl:block self-start md:self-center md:mx-auto xl:mr-auto xl:ml-0  sm:mr-3 md:text-center  font-medium text-primary-700"
        >
          Script Type
        </Typography>
        <Typography></Typography>
      </div>
      <div className="px-5 xl:px-14 overflow-hidden">
        {unListedScripts.map((script, index) => (
          <React.Fragment key={script.id}>
            <div
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              className="flex py-6 items-center sm:justify-between xl:justify-start"
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 md:w-fit xl:mr-14 lg:max-w-[445px] ">
                <img
                  className="rounded-md flex-shrink-0 w-16 h-16"
                  loading="lazy"
                  src={script.script_image}
                />

                <div className="flex-grow sm:max-w-[271px] min-w-[170px] ">
                  <Typography
                    variant="body1"
                    className="futura font-semibold text-primary-700"
                  >
                    {script.title}
                  </Typography>
                  <Typography variant="caption" className="text-stone-800">
                    {script.script_themes}
                  </Typography>
                </div>
                <Button
                  onClick={() => setOpenRelistScript(true)}
                  variant="text"
                  sx={{
                    border: "1px solid #7953B5",
                    borderRadius: 1.5,
                  }}
                  className=" sm:hidden mb-1"
                >
                  Relist
                </Button>
              </div>
              <div className="hidden md:flex lg:hidden xl:flex gap-4 justify-start  flex-col items-center md:items-center lg:items-end xl:items-start xl:ml-2">
                <div className="xl:min-w-[138px]">
                  <Chip
                    label={script.script_format}
                    className=" py-5 px-4  rounded-md bg-tinted-100/80 text-neutral-800 w-fit"
                  />
                </div>
              </div>
              <div className="sm:min-w-[116px] justify-end xl:py-10 sm:pr-0 items-center hidden sm:flex xl:ml-auto">
                <Button
                  onClick={() => setOpenRelistScript(true)}
                  variant="text"
                  sx={{
                    paddingY: 1,
                    border: "1px solid #7953B5",
                    borderRadius: 1.5,
                  }}
                  className="md:ml-auto xl:ml-0 w-full"
                >
                  Relist
                </Button>
              </div>
            </div>
            {index < UnlistedItems.length - 1 && (
              <Divider className="hidden sm:flex" />
            )}
          </React.Fragment>
        ))}
      </div>
    </Paper>
  );
};

export default UnlistedList;
