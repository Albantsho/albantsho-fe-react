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
import { IProducerBid } from "interfaces/bid";

interface IProps {
  bidsList: IProducerBid[];
}

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

const CurrentBids = ({ bidsList }: IProps) => {
  return (
    <Table className="mt-4 sm:mt-6 bg-white rounded-md shadow-primary py-5 xl:py-8 flex flex-col mb-16">
      <TableHead>
        <TableRow className="flex">
          <TableCell className="flex-1 md:max-w-[380px] xl:max-w-[465px] pl-5 sm:pl-10  xl:pl-16 xl:pb-8 pb-5 pt-0">
            <Typography
              variant="h6"
              className="text-primary-700 font-medium futura"
            >
              Script
            </Typography>
          </TableCell>
          <TableCell className=" md:flex-[0.55] hidden md:flex lg:hidden xl:flex  pb-5 pt-0">
            <Typography
              variant="h6"
              className="text-primary-700 font-medium futura"
            >
              Current Bid
            </Typography>
          </TableCell>
          <TableCell className="hidden md:flex lg:w-full xl:w-auto 2xl:flex-1 xl:pb-8 pb-5 pt-0"></TableCell>
        </TableRow>
      </TableHead>
      <TableBody className="px-5 xl:px-12 overflow-hidden">
        {CurrentBidsArray.map((bid) => (
          <TableRow
            data-aos="fade-up"
            key={bid.id}
            sx={{
              "& td, & th": {
                borderBottom: { xs: 0, sm: "1px solid #DCD8E4" },
              },
              "&:last-child td, &:last-child th": { border: 0 },
            }}
            className="flex flex-1 md:justify-start"
          >
            <TableCell
              sx={{
                "&.MuiTableCell-root": {
                  px: { xs: 0, sm: 2 },
                },
              }}
              className="flex flex-1 md:min-w-[360px] xl:min-w-[440px] md:flex-grow-0 sm:py-6 xl:py-10 flex-wrap sm:flex-nowrap gap-2 sm:gap-8 lg:gap-4"
            >
              <div className="flex gap-3 items-end flex-wrap justify-center sm:justify-start sm:items-start">
                <Image
                  width="64"
                  height="64"
                  className="rounded-md"
                  loading="lazy"
                  src={bid.image}
                  alt={bid.title}
                />
                <Chip
                  className="bg-success-50 font-xs font-semibold sm:hidden text-success-500"
                  label={`Current Bid : $${bid.CurrentBid}`}
                />
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
              <Button
                variant="text"
                sx={{
                  paddingY: 1,
                  border: "1px solid #7953B5",
                  borderRadius: 1.5,
                }}
                className="sm:hidden mb-1 mt-2"
              >
                Withdraw Bid
              </Button>
            </TableCell>
            <TableCell
              sx={{
                "&.MuiTableCell-root": {
                  pl: { lg: 0 },
                },
              }}
              className="hidden md:flex md:w-full items-center sm:py-6 lg:hidden xl:flex xl:py-10  xl:flex-[0.6]"
            >
              <Chip
                label={`$ ${bid.CurrentBid}`}
                className=" hidden md:flex bg-white md:mr-auto text-primary-700 text-lg futura font-semibold"
              />
            </TableCell>
            <TableCell
              sx={{
                "&.MuiTableCell-root": {
                  pl: { lg: 0 },
                },
              }}
              className="hidden sm:flex md:min-w-[160px] lg:w-full gap-3 flex-col items-center md:justify-center sm:py-6 xl:py-10"
            >
              <Chip
                className="bg-success-50 font-xs font-semibold md:hidden lg:flex lg:ml-auto xl:hidden text-success-500"
                label={`Current Bid : $${bid.CurrentBid}`}
              />
              <Button
                variant="text"
                sx={{
                  paddingY: 1,
                  border: "1px solid #7953B5",
                  borderRadius: 1.5,
                }}
                className="md:ml-auto lg:mr-5"
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
