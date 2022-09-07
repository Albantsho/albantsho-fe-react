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
import beautySmall from "@assets/images/beauty-small.jpg";

const CurrentBidsArray = [
  {
    id: 1,
    image: beautySmall,
    title: "The Long man of Long Beach",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesu fermentum ipsum ",
    CurrentBid: 4000,
  },
  {
    id: 2,
    image: beautySmall,
    title: "The Long man of Long Beach",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesu fermentum ipsum ",
    CurrentBid: 6000,
  },
  {
    id: 3,
    image: beautySmall,
    title: "The Long man of Long Beach",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesu fermentum ipsum ",
    CurrentBid: 6000,
  },
  {
    id: 4,
    image: beautySmall,
    title: "The Long man of Long Beach",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesu fermentum ipsum ",
    CurrentBid: 4000,
  },
  {
    id: 5,
    image: beautySmall,
    title: "The Long man of Long Beach",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesu fermentum ipsum ",
    CurrentBid: 6000,
  },
];

const CurrentBids = () => {
  return (
    <Table className="mt-4 sm:mt-6 bg-white rounded-md shadow-sm  py-5 flex flex-col mb-16">
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
          <TableCell className=" md:flex-[0.55] lg:flex-[0.63]  xl:flex-1 2xl:flex-[0.64]  hidden md:flex  ">
            <Typography
              variant="body1"
              className="text-primary-700 font-medium"
            >
              Current Bid
            </Typography>
          </TableCell>
          <TableCell className=" hidden md:flex 2xl:flex-[0.3] "></TableCell>
        </TableRow>
      </TableHead>
      <TableBody className="px-3  xl:px-12">
        {CurrentBidsArray.map((bid) => (
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
              className="flex flex-1 2xl:flex-[0.53]  flex-wrap sm:flex-nowrap gap-4 sm:gap-8 lg:gap-4"
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
                  Withdraw Bid
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
              className="hidden md:flex items-center md:flex-[0.25]  lg:flex-[0.3] xl:flex-[0.6]"
            >
          
                <Chip
                  label={`$ ${bid.CurrentBid}`}
                  className=" hidden md:flex bg-white text-primary-700 text-lg futura font-semibold"
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
                variant="text"
                sx={{
                  paddingY: 1,
                  border: "1px solid #7953B5",
                  borderRadius: 1.5,
                }}
                className="md:ml-auto xl:ml-0"
              >
                Withdraw Bid
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default CurrentBids;
