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
    <Table className="mt-4 bg-white rounded-md  shadow-sm  pt-5 flex flex-col mb-16">
      <TableHead>
        <TableRow className="flex ">
          <TableCell className="flex-1   2xl:flex-[0.6]  md:pl-8 lg:pl-10 xl:pl-16 2xl:pl-16">
            Script
          </TableCell>
          <TableCell className=" hidden  sm:flex flex-[0.6] md:flex-[0.5] lg:flex-[0.6] xl:flex-1 ">
            Status
          </TableCell>
          <TableCell className=" hidden sm:flex"></TableCell>
        </TableRow>
      </TableHead>
      <TableBody className="md:px-3 lg:px-6 xl:px-12">
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
            <TableCell className="flex  flex-1 2xl:flex-[0.5] sm:gap-4 flex-wrap sm:flex-nowrap gap-2  lg:min-w-[280px]  items-center sm:items-start">
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
              <div className="sm:flex-1 sm:max-w-[330px]">
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
                  pl: "8px",
                },
              }}
              className="hidden sm:flex items-center flex-[0.40] xl:flex-[0.76]"
            >
              <Chip
                label={script.status}
                className={`${
                  script.status === "Reviewed"
                    ? "text-success-500 bg-success-300/20"
                    : "text-warning-500 bg-warning-300/20"
                }  py-5  hidden sm:flex  rounded-sm text-center w-full mr-auto 2xl:mr-0 max-w-[100px]`}
              />
            </TableCell>
            <TableCell
              sx={{
                "&.MuiTableCell-root": {
                  pl: { xs: 0 },
                },
              }}
              className="sm:min-w-[116px] flex items-center"
            >
              {script.status === "Reviewed" && (
                <Button
                  variant="text"
                  sx={{
                    paddingY: 1.2,
                    paddingX: 1.5,
                    border: "1px solid #7953B5",
                    borderRadius: 1.5,
                    display: { xs: "none", sm: "block" },
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