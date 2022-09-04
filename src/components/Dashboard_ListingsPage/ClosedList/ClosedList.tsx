import projectArchive from "./assets/project-archive.png";
import {
  Chip,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import Image from "next/image";

const UncompletedLists = [
  {
    id: 1,
    image: projectArchive,
    title: "The Long man of Long Beach",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesu fermentum ipsum ",
    price: 6000,
  },
  {
    id: 2,
    image: projectArchive,
    title: "The Long man of Long Beach",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesu fermentum ipsum ",
    price: 6000,
  },
  {
    id: 3,
    image: projectArchive,
    title: "The Long man of Long Beach",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesu fermentum ipsum ",
    price: 6000,
  },
  {
    id: 4,
    image: projectArchive,
    title: "The Long man of Long Beach",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesu fermentum ipsum ",
    price: 6000,
  },
  {
    id: 5,
    image: projectArchive,
    title: "The Long man of Long Beach",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesu fermentum ipsum ",
    price: 6000,
  },
];

const ClosedList = () => {
  return (
    <Table className=" mt-4 sm:mt-6 bg-white rounded-md shadow-sm  py-5 flex flex-col mb-16">
      <TableHead>
        <TableRow className="flex">
          <TableCell className="flex-1 pl-2 2xl:flex-[0.48] sm:pl-6 xl:pl-12">
            <Typography
              variant="body1"
              className="text-primary-700 font-medium"
            >
              Script
            </Typography>
          </TableCell>
          <TableCell
            align="center"
            className="flex-[0.15] md:flex-[0.8]  2xl:flex-[0.83]    hidden sm:flex"
          >
            <Typography
              variant="body1"
              className="text-primary-700 font-medium"
            >
              Price
            </Typography>
          </TableCell>
          <TableCell className="pr-2 sm:pr-8 lg:pr-12  xl:pr-20">
            <Typography
              variant="body1"
              className="text-primary-700 font-medium"
            >
              Date
            </Typography>
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody className="px-2 lg:px-6 xl:px-12">
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
              className="flex flex-1 2xl:flex-[0.5] items-center flex-wrap sm:flex-nowrap gap-1 sm:gap-4"
              sx={{
                "&.MuiTableCell-root": {
                  px: { xs: 0, sm: 2, lg: 0 },
                },
              }}
            >
              <div className="flex-shrink-0 ">
                <Image
                  className="rounded-md"
                  loading="lazy"
                  src={listItem.image}
                  alt={listItem.title}
                />
              </div>
              <div className="flex-grow sm:flex-1 sm:pl-3 -mt-1  sm:max-w-[271px] min-w-[170px] sm:-ml-4">
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
                  px: { xs: 0 },
                },
              }}
              className="hidden sm:flex md:flex-[0.9] md:gap-4 items-center xl:justify-between"
            >
              <Chip
                label={`$ ${listItem.price}`}
                className=" py-5 px-4   hidden sm:flex rounded-md bg-inherit text-primary-500 font-semibold"
              />
            </TableCell>
            <TableCell
              sx={{
                "&.MuiTableCell-root": {
                  px: { xs: 0, sm: 2 },
                },
              }}
              className="flex sm:items-center"
            >
              <Chip
                sx={{ "& .MuiChip-label": { px: { xs: 0 } } }}
                className="bg-inherit"
                label={"01/02/22"}
              />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ClosedList;
