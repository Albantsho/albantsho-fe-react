import {
  Button,
  Chip,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
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
    <Table className="mt-4 bg-white rounded-md  shadow-sm py-5 xl:py-8  flex flex-col mb-16">
      <TableHead>
        <TableRow className="flex justify-between">
          <TableCell className="w-full  pl-6 pb-5 xl:pb-8 pt-0 xl:pl-16  2xl:w-11/12">
            <Typography
              variant="h6"
              className="text-primary-700 futura font-medium"
            >
              Script
            </Typography>
          </TableCell>
          <TableCell
            align="left"
            className=" hidden pb-5 xl:pb-8 pt-0 pr-[86px] md:pr-[106px] lg:pr-[86px] xl:pr-[100px] sm:flex  lg:flex-[0.60]"
          >
            <Typography
              variant="h6"
              className="text-primary-700 futura font-medium"
            >
              Status
            </Typography>
          </TableCell>
          <TableCell className=" hidden md:flex md:w-1/4 xl:w-1/2 lg:hidden xl:flex"></TableCell>
        </TableRow>
      </TableHead>
      <TableBody className="px-1 sm:px-6 xl:px-16">
        {listScripts.map((script) => (
          <TableRow
            sx={{
              "& td, & th": {
                borderBottom: { xs: 0, sm: "1px solid #DCD8E4" },
              },
              "&:last-child td, &:last-child th": { border: 0 },
            }}
            className="flex flex-1"
            key={script.id}
          >
            <TableCell className="flex sm:pl-0  w-full  2xl:w-11/12  py-4 sm:py-6 xl:py-10 sm:gap-4 flex-wrap sm:flex-nowrap gap-2  lg:min-w-[280px]  items-center sm:items-start">
              <div className="flex gap-4 ">
                <div className="flex-shrink-0 ">
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
                  } text-sm  rounded-sm sm:hidden max-w-[100px] self-end`}
                />
              </div>
              <div className="sm:flex-1 sm:max-w-[300px] lg:max-w-[320px] xl:max-w-[300px]">
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
                    mt: 0.5,
                  }}
                >
                  See review
                </Button>
              )}
            </TableCell>
            <TableCell
              sx={{
                "&.MuiTableCell-root": {
                  pr: { xs: 0 },
                  pl: { xs: 1, md: 0 },
                },
              }}
              className="hidden sm:flex py-4 gap-4 md:w-full   justify-center min-w-[120px] sm:py-6 xl:py-10 flex-col items-center flex-[0.40]"
            >
              <Chip
                label={script.status}
                className={`${
                  script.status === "Reviewed"
                    ? "text-success-500 bg-success-300/20"
                    : "text-warning-500 bg-warning-300/20"
                }  py-5  hidden sm:flex  rounded-sm text-center  max-w-[100px] w-full`}
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
            </TableCell>
            <TableCell
              sx={{
                "&.MuiTableCell-root": {
                  pl: { xs: 0 },
                },
              }}
              className="sm:min-w-[116px] md:w-1/3 xl:w-1/2  md:justify-end py-4 sm:py-6 xl:py-10 sm:pr-0 items-center hidden md:flex lg:hidden xl:flex"
            >
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
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ListScripts;
