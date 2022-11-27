import beautySmall from "@assets/images/beauty-small.jpg";
import {
  Button,
  Chip,
  Divider,
  Paper,
  Tooltip,
  Typography,
} from "@mui/material";
import { IProduct } from "interfaces/product";
import React, { Dispatch, SetStateAction } from "react";
import UncompletedScript from "./UncompletedScript/UncompletedScript";

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
  unCompletedScripts: IProduct[];
}

const UncompletedList = ({ unCompletedScripts }: IProps) => {
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
      </div>
      <div className="px-5 xl:px-14 overflow-hidden">
        {uncompletedList.map((script, index) => (
          <React.Fragment key={script.id}>
            <UncompletedScript script={script} />
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
