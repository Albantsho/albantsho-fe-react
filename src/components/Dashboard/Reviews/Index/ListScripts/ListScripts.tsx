import { Button, Chip, Divider, Paper, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import beautySmall from "@assets/images/beauty-small.jpg";

const listScripts = [
  {
    id: 1,
    image: beautySmall,
    title: "The Long man of Long Beach",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesu fermentum ipsum ",
    status: "In Review",
  },
  {
    id: 2,
    image: beautySmall,
    title: "The Long man of Long Beach",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesu fermentum ipsum ",
    status: "Reviewed",
  },
  {
    id: 3,
    image: beautySmall,
    title: "The Long man of Long Beach",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesu fermentum ipsum ",
    status: "Reviewed",
  },
  {
    id: 4,
    image: beautySmall,
    title: "The Long man of Long Beach",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesu fermentum ipsum ",
    status: "Reviewed",
  },
  {
    id: 5,
    image: beautySmall,
    title: "The Long man of Long Beach",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesu fermentum ipsum ",
    status: "Reviewed",
  },
];

const ListScripts = () => {
  return (
    <Paper elevation={0} className="mt-4 bg-white mb-16">
      <div className="border-b border-tinted-100 px-5 py-5 xl:px-14 xl:py-8 flex">
        <Typography
          variant="h6"
          className="futura w-1/2 sm:w-full md:max-w-[317px]  lg:max-w-full xl:max-w-[510px] font-medium text-primary-700"
        >
          Script
        </Typography>

        <Typography
          variant="h6"
          className="futura hidden sm:block self-start md:self-center md:mx-auto lg:ml-5  sm:mr-8 md:text-center lg:text-start lg:mr-7 font-medium text-primary-700"
        >
          Status
        </Typography>
        <Typography></Typography>
      </div>
      <div className="px-5 xl:px-14">
        {listScripts.map((script, index) => (
          <React.Fragment key={script.id}>
            <div className="flex py-6 xl:py-10 items-center sm:justify-between md:justify-end 2xl:justify-start">
              <div className="sm:flex md:w-fit xl:mr-14 lg:max-w-[445px] 2xl:max-w-[425px] 2xl:mr-[75px]">
                <div className="flex gap-4 sm:mr-3 md:mr-[85px]">
                  <div className="flex-shrink-0">
                    <Image
                      width="72"
                      height="72"
                      className="rounded-md"
                      loading="lazy"
                      src={script.image}
                      alt={script.title}
                    />
                  </div>
                  <Chip
                    label={script.status}
                    className={`${
                      script.status === "Reviewed"
                        ? "text-success-500 bg-success-300/20"
                        : "text-warning-500 bg-warning-300/20"
                    } text-sm  rounded-sm sm:hidden mb-1 w-full max-w-[100px] self-end py-5 `}
                  />
                </div>
                <div className="sm:flex-1 sm:max-w-[300px] md:min-w-[360px] lg:max-w-[320px] xl:max-w-[300px]">
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
                {script.status === "Reviewed" && (
                  <Button
                    variant="text"
                    sx={{
                      paddingY: 1.2,
                      paddingX: 1.5,
                      border: "1px solid #7953B5",
                      borderRadius: 1.5,
                      display: { xs: "block", sm: "none" },
                      mt: 1,
                    }}
                  >
                    See review
                  </Button>
                )}
              </div>
              <div className="hidden sm:flex sm:min-w-[100px] md:w-1/2 gap-4 justify-start  flex-col items-center md:items-center lg:items-end xl:items-start xl:ml-2">
                <Chip
                  label={script.status}
                  className={`${
                    script.status === "Reviewed"
                      ? "text-success-500 bg-success-300/20"
                      : "text-warning-500 bg-warning-300/20"
                  }  py-5  hidden sm:flex  rounded-sm text-center  max-w-[101px] w-full`}
                />
                {script.status === "Reviewed" && (
                  <Button
                    className="md:hidden lg:block xl:hidden"
                    variant="text"
                    sx={{
                      paddingY: 1.2,
                      paddingX: 1.5,
                      border: "1px solid #7953B5",
                      borderRadius: 1.5,
                    }}
                  >
                    See review
                  </Button>
                )}
              </div>
              <div className="sm:min-w-[116px] justify-end xl:py-10 sm:pr-0 items-center hidden md:flex lg:hidden xl:flex">
                {script.status === "Reviewed" && (
                  <Button
                    variant="text"
                    sx={{
                      paddingY: 1.2,
                      paddingX: 1.5,
                      border: "1px solid #7953B5",
                      borderRadius: 1.5,
                    }}
                  >
                    See review
                  </Button>
                )}
              </div>
            </div>
            {index < listScripts.length -1 && (
              <Divider className="hidden sm:flex" />
            )}
          </React.Fragment>
        ))}
      </div>
    </Paper>
  );
};

export default ListScripts;
