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
import { IProduct } from "interfaces/product";

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

interface IProps {
  scripts: IProduct[];
}

const ClosedList = ({ scripts }: IProps) => {
  const closedScripts = scripts.filter(
    (script) => script.script_market_status === "closed"
  );

  return (
    <Table className=" mt-4 sm:mt-6 bg-white rounded-md shadow-primary  py-5 xl:py-8 flex flex-col mb-16">
      <TableHead>
        <TableRow className="flex">
          <TableCell className="flex-1 sm:max-w-[360px] sm:min-w-[360px] md:min-w-[460px] md:max-w-[460px] lg:min-w-[360px] lg:max-w-[360px] xl:max-w-[500px] xl:min-w-[500px] pl-5 pt-0 xl:pb-8 pb-5  sm:pl-6 lg:pl-10 xl:pl-16 ">
            <Typography
              variant="h6"
              className="text-primary-700 futura font-medium"
            >
              Script
            </Typography>
          </TableCell>
          <TableCell className="hidden sm:flex flex-[0.6]  pt-0 xl:pb-8 pb-5">
            <Typography
              variant="h6"
              className="text-primary-700 futura font-medium"
            >
              Price
            </Typography>
          </TableCell>
          <TableCell className="hidden sm:flex pr-2 sm:pr-8 lg:pr-8 pt-0 xl:pb-8 pb-5 xl:flex-[0.3] xl:pr-20 justify-end">
            <Typography
              variant="h6"
              className="text-primary-700 futura font-medium "
            >
              Date
            </Typography>
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody className="px-1  xl:px-12 overflow-hidden">
        {closedScripts.map((listItem) => (
          <TableRow
            data-aos="fade-right"
            key={listItem.id}
            sx={{
              "& td, & th": {
                borderBottom: { xs: 0, sm: "1px solid #DCD8E4" },
              },
              "&:last-child td, &:last-child th": { border: 0 },
            }}
            className="flex "
          >
            <TableCell className="flex flex-1 sm:flex-auto sm:min-w-[365px] sm:py-6 xl:py-10 md:min-w-[465px] lg:min-w-[365px] xl:min-w-[465px] xl:max-w-[465px] items-center flex-wrap sm:flex-nowrap gap-1 sm:gap-4 ">
              <div className="flex gap-2 sm:gap-0">
                <img
                  // layout="fixed"
                  width="64"
                  height="64"
                  className="rounded-md"
                  // loading="lazy"
                  src={listItem.script_image}
                  alt={listItem.title}
                />
                <div className="flex flex-col gap-2">
                  <Chip
                    label={`Price: $${listItem.script_price}`}
                    className="text-success-500 bg-success-50 sm:hidden"
                  />
                  <Chip
                    label={`Date:`}
                    className="text-primary-700 bg-primary-50/50 sm:hidden"
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
                  {listItem.script_themes}
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
                variant="body1"
                className="rounded-md bg-inherit sm:min-w-[70px] lg:min-w-[85px] text-primary-500 font-semibold"
              >{`$ ${listItem.script_price}`}</Typography>
            </TableCell>
            <TableCell
              sx={{
                "&.MuiTableCell-root": {
                  px: { xs: 0, sm: 2 },
                },
              }}
              className="hidden sm:flex items-center xl:flex-[0.5] lg:w-full 2xl:flex-[0.6] justify-end"
            >
              <Typography
                variant="body1"
                className=" text-neutral-700 font-medium"
              >
                1/12/2022
              </Typography>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ClosedList;
