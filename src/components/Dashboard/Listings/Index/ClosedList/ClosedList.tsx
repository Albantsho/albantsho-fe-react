import beautySmall from "@assets/images/beauty-small.jpg";
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
    image: beautySmall,
    title: "The Long man of Long Beach",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesu fermentum ipsum ",
    price: 6000,
  },
  {
    id: 2,
    image: beautySmall,
    title: "The Long man of Long Beach",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesu fermentum ipsum ",
    price: 6000,
  },
  {
    id: 3,
    image: beautySmall,
    title: "The Long man of Long Beach",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesu fermentum ipsum ",
    price: 6000,
  },
  {
    id: 4,
    image: beautySmall,
    title: "The Long man of Long Beach",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesu fermentum ipsum ",
    price: 6000,
  },
  {
    id: 5,
    image: beautySmall,
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
          <TableCell className="flex-1  xl:flex-[0.6] pl-2 2xl:flex-[0.4]  sm:pl-6 lg:pl-10 xl:pl-16 ">
            <Typography
              variant="body1"
              className="text-primary-700 font-medium"
            >
              Script
            </Typography>
          </TableCell>
          <TableCell className="hidden sm:flex flex-[0.5] lg:flex-[0.22] ">
            <Typography
              variant="body1"
              className="text-primary-700 font-medium"
            >
              Price
            </Typography>
          </TableCell>
          <TableCell className="flex  pr-2 sm:pr-8 lg:pr-12 xl:flex-[0.3] 2xl:flex-[0.4] xl:pr-20 justify-end">
            <Typography
              variant="body1"
              className="text-primary-700 font-medium "
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
            className="flex "
          >
            <TableCell className="flex flex-1  xl:flex-[0.5] 2xl:flex-[0.39] items-center flex-wrap sm:flex-nowrap gap-1 sm:gap-4 ">
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
              className="hidden sm:flex sm:flex-[0.6] lg:flex-[0.3] md:gap-4 items-center xl:justify-between"
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
              className="flex sm:items-center xl:flex-[0.2] 2xl:flex-[0.35] sm:justify-end"
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
