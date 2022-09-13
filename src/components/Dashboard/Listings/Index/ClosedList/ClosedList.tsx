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

const closedList = [
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
    <Table className=" mt-4 sm:mt-6 bg-white rounded-md shadow-sm  py-5 xl:py-8 flex flex-col mb-16">
      <TableHead>
        <TableRow className="flex">
          <TableCell className="flex-1 sm:max-w-[370px] sm:min-w-[370px] md:min-w-[470px] md:max-w-[470px] lg:min-w-[370px] lg:max-w-[370px] xl:max-w-[500px] xl:min-w-[500px] pl-5 pt-0 xl:pb-8 pb-5  sm:pl-6 lg:pl-10 xl:pl-16 ">
            <Typography
              variant="h6"
              className="text-primary-700 futura font-medium"
            >
              Script
            </Typography>
          </TableCell>
          <TableCell className="hidden sm:flex flex-[0.5] pt-0 xl:pb-8 pb-5">
            <Typography
              variant="h6"
              className="text-primary-700 futura font-medium"
            >
              Price
            </Typography>
          </TableCell>
          <TableCell className="hidden sm:flex pr-2 sm:pr-8 lg:pr-12 pt-0 xl:pb-8 pb-5 xl:flex-[0.3] xl:pr-20 justify-end">
            <Typography
              variant="h6"
              className="text-primary-700 futura font-medium "
            >
              Date
            </Typography>
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody className="px-1  xl:px-12">
        {closedList.map((listItem) => (
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
            <TableCell className="flex flex-1 sm:max-w-[365px] sm:py-6 xl:py-10 sm:min-w-[365px] md:max-w-[465px] md:min-w-[465px] lg:max-w-[365px] lg:min-w-[365px] xl:max-w-[465px] xl:min-w-[465px] items-center flex-wrap sm:flex-nowrap gap-1 sm:gap-4 ">
              <div className="flex gap-2 sm:gap-0">
                <Image
                  layout="fixed"
                  width="64"
                  height="64"
                  className="rounded-md"
                  loading="lazy"
                  src={listItem.image}
                  alt={listItem.title}
                />
                <div className="flex flex-col gap-2">
                  <Chip
                    label={`$${listItem.price}`}
                    className="text-success-500 bg-success-50 sm:hidden"
                  />
                  <Chip
                    label={` 01/02/22`}
                    className="text-secondary-500 bg-secondary-50 sm:hidden"
                  />
                </div>
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
              className="hidden sm:flex sm:w-full lg:flex-[0.3] md:gap-4 items-center xl:justify-between"
            >
              <Typography
                variant="h6"
                className="rounded-md bg-inherit sm:min-w-[70px] lg:min-w-[85px] text-primary-500 font-semibold"
              >{`$ ${listItem.price}`}</Typography>
            </TableCell>
            <TableCell
              sx={{
                "&.MuiTableCell-root": {
                  px: { xs: 0, sm: 2 },
                },
              }}
              className="hidden sm:flex items-center xl:flex-[0.2] lg:w-full 2xl:flex-[0.4] justify-end"
            >
              <Typography
                variant="h6"
                className=" text-neutral-700 font-medium"
              >
                01/02/22
              </Typography>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ClosedList;
