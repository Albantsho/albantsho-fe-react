import { Button, Divider, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import projectArchive from "./assets/project-archive.png";

const listScripts = [
  {
    id: 1,
    image: projectArchive,
    title: "The Long man of Long Beach",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesu fermentum ipsum ",
    status: "In Review",
  },
  {
    id: 2,
    image: projectArchive,
    title: "The Long man of Long Beach",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesu fermentum ipsum ",
    status: "Reviewed",
  },
  {
    id: 3,
    image: projectArchive,
    title: "The Long man of Long Beach",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesu fermentum ipsum ",
    status: "Reviewed",
  },
  {
    id: 4,
    image: projectArchive,
    title: "The Long man of Long Beach",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesu fermentum ipsum ",

    status: "Reviewed",
  },
  {
    id: 5,
    image: projectArchive,
    title: "The Long man of Long Beach",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesu fermentum ipsum ",

    status: "Reviewed",
  },
];

const ListScriptsInReviews = () => {
  return (
    <div className="mt-4 bg-white rounded-md md:px-3 lg:px-6 xl:px-12 shadow-sm  pt-5">
      <div className="mb-5 flex px-3 md:min-w-[290px] sm:gap-3 xl:gap-10">
        <Typography
          variant="body1"
          className="futura flex-1 text-primary-700 font-medium "
        >
          Script
        </Typography>
        <Typography
          variant="body1"
          className="futura md:mr-auto md:flex-1 text-primary-700 font-medium mr-6"
        >
          Status
        </Typography>
      </div>

      <Divider sx={{ marginBottom: 4 }} />
      <div className="flex flex-col">
        {listScripts.map((script) => {
          return (
            <div
              key={script.id}
              className={`md:pb-6 pt-4 pb-5`}
            >
              <div
                className={`${
                  script.status === "Reviewed" && "pb-[70px] md:pb-10"
                } flex px-3  justify-between relative sm:gap-4 pb-6 md:pb-10 xl:gap-10`}
              >
                <div className="flex  flex-1 md:gap-5 flex-wrap sm:flex-nowrap gap-2 lg:min-w-[280px]  items-center">
                  <div className="flex justify-between sm:justify-start  w-full sm:w-auto">
                    <div className="flex-shrink-0 w-[72px] h-[72px]">
                      <Image
                        className="rounded-md w-full h-full"
                        loading="lazy"
                        src={script.image}
                        alt={script.title}
                      />
                    </div>
                    <div
                      className={`${
                        script.status === "Reviewed"
                          ? "text-success-500 bg-success-300/20"
                          : "text-warning-500 bg-warning-300/20"
                      } my-auto py-4 px-4 text-sm  rounded-sm text-center w-full sm:w-auto sm:hidden max-w-[100px]`}
                    >
                      <span>{script.status}</span>
                    </div>
                  </div>
                  <div className="">
                    <Typography
                      variant="body1"
                      className="futura font-semibold text-primary-700"
                    >
                      {script.title}
                    </Typography>
                    <Typography variant="caption" className="text-stone-800">
                      {script.description}
                    </Typography>
                  </div>
                </div>

                <div className="flex gap-0 md:flex-1 items-start 2xl:justify-start 2xl:gap-6 mr-6 md:mr-0">
                  <div
                    className={`${
                      script.status === "Reviewed"
                        ? "text-success-500 bg-success-300/20"
                        : "text-warning-500 bg-warning-300/20"
                    }  py-4 px-4 text-sm hidden sm:block  rounded-sm text-center w-full sm:w-auto mr-auto 2xl:mr-0 max-w-[100px]`}
                  >
                    <span>{script.status}</span>
                  </div>
                  {script.status === "Reviewed" && (
                    <Button
                      variant="text"
                      sx={{
                        paddingY: 1.8,
                        paddingX: 2,
                        border: "1px solid #7953B5",
                        borderRadius: 1.5,
                        display: { xs: "none", md: "block" },
                      }}
                    >
                      See review
                    </Button>
                  )}
                </div>
                {script.status === "Reviewed" && (
                  <Button
                    variant="text"
                    sx={{
                      border: "1px solid #7953B5",
                    }}
                    className="block md:hidden rounded-lg py-3 px-4 absolute bottom-4 sm:bottom-0 bg-white left-3"
                  >
                    See review
                  </Button>
                )}
              </div>
              <Divider className="hidden md:flex" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ListScriptsInReviews;
