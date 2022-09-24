import beautySmall from "@assets/images/beauty-small.jpg";
import {
  Button,
  Chip,
  Divider,
  Paper,
  Tooltip,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
import React from "react";

const uncompletedList = [
  {
    id: 1,
    image: beautySmall,
    title: "The Long man of Long Beach",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesu fermentum ipsum ",
    progress: "20% done",
  },
  {
    id: 2,
    image: beautySmall,
    title: "The Long man of Long Beach",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesu fermentum ipsum ",
    progress: "20% done",
  },
  {
    id: 3,
    image: beautySmall,
    title: "The Long man of Long Beach",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesu fermentum ipsum ",
    progress: "20% done",
  },
  {
    id: 4,
    image: beautySmall,
    title: "The Long man of Long Beach",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesu fermentum ipsum ",
    progress: "20% done",
  },
  {
    id: 5,
    image: beautySmall,
    title: "The Long man of Long Beach",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesu fermentum ipsum ",
    progress: "20% done",
  },
];

interface IProps {
  setOpenAddToScript: Dispatch<SetStateAction<boolean>>;
}

const UncompletedList = ({ setOpenAddToScript }: IProps) => {
  return (
    <Paper elevation={0} className="mt-4 sm:mt-6 shadow-primary bg-white">
      <div className="border-b border-tinted-100 px-5 py-5 xl:px-14 xl:py-8 flex">
        <Typography
          variant="h6"
          className="futura w-1/2 sm:w-full md:max-w-[220px]  lg:max-w-full xl:max-w-[410px] font-medium text-primary-700"
        >
          Script
        </Typography>

        <Typography
          variant="h6"
          className="futura hidden sm:block self-start md:self-center md:mx-auto lg:ml-5  sm:mr-8 md:text-center lg:text-start lg:mr-7 font-medium text-primary-700"
        >
          Progress
        </Typography>
        <Typography></Typography>
      </div>
      <div className="px-5 xl:px-14">
        {uncompletedList.map((listItem, index) => (
          <React.Fragment key={listItem.id}>
            <div className="flex py-6 items-center sm:justify-between xl:justify-start">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 md:w-fit xl:mr-14 lg:max-w-[445px] ">
                <div className="flex gap-3 items-end sm:items-start">
                  <Image
                    width="64"
                    height="64"
                    className="rounded-md flex-shrink-0"
                    loading="lazy"
                    src={listItem.image}
                    alt={listItem.title}
                  />

                  <Tooltip title="Progress">
                    <Chip
                      label={`${listItem.progress}`}
                      className="bg-success-50 px-1 flex-shrink font-xs font-semibold sm:hidden text-success-500"
                    />
                  </Tooltip>
                </div>
                <div className="flex-grow sm:max-w-[271px] min-w-[170px] ">
                  <Typography
                    variant="body1"
                    className="futura font-semibold text-primary-700"
                  >
                    {listItem.title}
                  </Typography>
                  <Typography variant="caption" className="text-stone-800">
                    {listItem.description}
                  </Typography>
                </div>
                <Button
                  onClick={() => setOpenAddToScript(true)}
                  variant="text"
                  sx={{
                    border: "1px solid #7953B5",
                    borderRadius: 1.5,
                  }}
                  className=" sm:hidden mb-1 py-2 px-3"
                >
                  Complete Listing
                </Button>
              </div>
              <div className="hidden md:flex lg:hidden xl:flex gap-4 justify-start  flex-col items-center md:items-center lg:items-end xl:items-start xl:ml-2">
                <Chip
                  label={listItem.progress}
                  className="py-5 px-4 hidden md:flex rounded-md bg-success-50 text-success-500"
                />
              </div>
              <div className="sm:min-w-[116px] justify-end xl:py-10 sm:pr-0 items-center hidden flex-col gap-2 sm:flex xl:ml-auto">
                <Chip
                  label={listItem.progress}
                  className="py-5 px-4 w-full md:hidden lg:flex xl:hidden rounded-md bg-success-50 text-success-500"
                />
                <Button
                  onClick={() => setOpenAddToScript(true)}
                  variant="text"
                  className="py-2 px-3 lg:px-4 lg:py-3"
                  sx={{
                    border: "1px solid #7953B5",
                    borderRadius: 1.5,
                  }}
                >
                  Complete Listing
                </Button>
              </div>
            </div>
            {index < uncompletedList.length - 1 && (
              <Divider className="hidden sm:flex" />
            )}
          </React.Fragment>
        ))}
      </div>
    </Paper>
  );
};

export default UncompletedList;
