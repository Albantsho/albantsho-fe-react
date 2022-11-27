import beautySmall from "@assets/images/beauty-small.jpg";
import { Button, Chip, Divider, Paper, Typography } from "@mui/material";
import { IProduct } from "interfaces/product";
import React, { Dispatch, SetStateAction } from "react";
import UnlistedScript from "./UnlistedScript/UnlistedScript";

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
  unListedScripts: IProduct[];
}

const UnlistedList = ({ unListedScripts }: IProps) => {
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
        {UnlistedItems.map((script, index) => (
          <React.Fragment key={script.id}>
            <UnlistedScript key={script.id} script={script} />
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
