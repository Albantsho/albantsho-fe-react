import beautySmall from "@assets/images/beauty-small.jpg";
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
import { Dispatch, SetStateAction } from "react";

const UncompletedLists = [
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
    <Table className="mt-4 sm:mt-6 bg-white rounded-md shadow-sm  py-5 flex flex-col">
      <TableHead>
        <TableRow className="flex">
          <TableCell className="flex-1 2xl:flex-[0.5] pl-3 sm:pl-7  xl:pl-16">
            <Typography
              variant="body1"
              className="text-primary-700 font-medium"
            >
              Script
            </Typography>
          </TableCell>
          <TableCell className=" md:flex-[0.7]  2xl:flex-[0.6]  hidden md:flex  ">
            <Typography
              variant="body1"
              className="text-primary-700 font-medium"
            >
              Progress
            </Typography>
          </TableCell>
          <TableCell className=" hidden md:flex 2xl:flex-[0.3] "></TableCell>
        </TableRow>
      </TableHead>
      <TableBody className="px-3  xl:px-12">
        {UncompletedLists.map((listItem) => (
          <TableRow
            key={listItem.id}
            sx={{
              "& td, & th": {
                borderBottom: { xs: 0, sm: "1px solid #DCD8E4" },
              },
              "&:last-child td, &:last-child th": { border: 0 },
            }}
            className="flex flex-1"
          >
            <TableCell
              className="flex flex-1 2xl:flex-[0.4]  flex-wrap sm:flex-nowrap gap-4 sm:gap-8 lg:gap-4"
              sx={{
                "&.MuiTableCell-root": {
                  px: { xs: 0, sm: 2 },
                },
              }}
            >
              <div className="flex gap-3 items-end sm:items-start">
                <div className="flex-shrink-0 ">
                  <Image
                    className="rounded-md"
                    loading="lazy"
                    src={listItem.image}
                    alt={listItem.title}
                  />
                </div>
                <Button
                  onClick={() => setOpenAddToScript(true)}
                  variant="text"
                  sx={{
                    border: "1px solid #7953B5",
                    borderRadius: 1.5,
                  }}
                  className=" sm:hidden mb-1"
                >
                  Complete Listing
                </Button>
              </div>
              <div className="flex-grow sm:flex-1 sm:max-w-[271px] min-w-[170px] sm:-ml-4 lg:ml-0">
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
            </TableCell>
            <TableCell
              sx={{
                "&.MuiTableCell-root": {
                  pl: { lg: 0 },
                },
              }}
              className="hidden md:flex items-center flex-[0.4]"
            >
              <Chip
                label={listItem.progress}
                className=" py-5 px-4   hidden md:flex rounded-md bg-success-50 text-success-500"
              />
            </TableCell>
            <TableCell
              sx={{
                "&.MuiTableCell-root": {
                  pl: { lg: 0 },
                },
              }}
              className="hidden sm:flex items-center 2xl:flex-[0.3] 2xl:justify-end"
            >
              <Button
                onClick={() => setOpenAddToScript(true)}
                variant="text"
                sx={{
                  paddingY: 1,
                  border: "1px solid #7953B5",
                  borderRadius: 1.5,
                }}
              >
                Complete Listing
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default UncompletedList;
