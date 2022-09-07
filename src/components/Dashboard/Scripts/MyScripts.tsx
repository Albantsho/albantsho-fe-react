import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import Image from "next/image";
import beautySmall from "@assets/images/beauty-small.jpg";

const MyScriptsArray = [
  {
    id: 1,
    image: beautySmall,
    title: "The Long man of Long Beach",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesu fermentum ipsum ",
  },
  {
    id: 2,
    image: beautySmall,
    title: "The Long man of Long Beach",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesu fermentum ipsum ",
  },
  {
    id: 3,
    image: beautySmall,
    title: "The Long man of Long Beach",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesu fermentum ipsum ",
  },
  {
    id: 4,
    image: beautySmall,
    title: "The Long man of Long Beach",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesu fermentum ipsum ",
  },
  {
    id: 5,
    image: beautySmall,
    title: "The Long man of Long Beach",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesu fermentum ipsum ",
  },
];

const MyScripts = () => {
  return (
    <Table className="mt-4 sm:mt-6 bg-white rounded-md shadow-sm  py-5 flex flex-col mb-16">
      <TableHead>
        <TableRow className="flex">
          <TableCell className="flex-1 pl-3 sm:pl-7  xl:pl-16">
            <Typography
              variant="body1"
              className="text-primary-700 font-medium"
            >
              Script
            </Typography>
          </TableCell>
          <TableCell className=" hidden md:flex"></TableCell>
        </TableRow>
      </TableHead>
      <TableBody className="px-3  xl:px-12">
        {MyScriptsArray.map((bid) => (
          <TableRow
            key={bid.id}
            sx={{
              "& td, & th": {
                borderBottom: { xs: 0, sm: "1px solid #DCD8E4" },
              },
              "&:last-child td, &:last-child th": { border: 0 },
            }}
            className="flex flex-1"
          >
            <TableCell
              className="flex flex-1 flex-wrap sm:flex-nowrap gap-4"
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
                    src={bid.image}
                    alt={bid.title}
                  />
                </div>
                <Button
                  variant="text"
                  sx={{
                    border: "1px solid #7953B5",
                    borderRadius: 1.5,
                  }}
                  className=" sm:hidden mb-1"
                >
                  View script
                </Button>
              </div>
              <div className="flex-grow sm:flex-1 sm:max-w-[271px] min-w-[170px] sm:-ml-4 lg:ml-0">
                <Typography
                  variant="body1"
                  className="futura font-semibold text-primary-700"
                >
                  {bid.title}
                </Typography>
                <Typography variant="caption" className="text-stone-800">
                  {bid.description}
                </Typography>
              </div>
            </TableCell>
            <TableCell
              sx={{
                "&.MuiTableCell-root": {
                  pl: { lg: 0 },
                },
              }}
              className="hidden sm:flex items-center justify-end"
            >
              <Button
                variant="text"
                sx={{
                  paddingY: 1,
                  border: "1px solid #7953B5",
                  borderRadius: 1.5,
                }}
                className="md:ml-auto xl:ml-0"
              >
                View script
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default MyScripts;
