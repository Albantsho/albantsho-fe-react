import {
  Button,
  ButtonGroup,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Paper,
} from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { Dispatch, SetStateAction } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { MdDone } from "react-icons/md";

const auctions = [
  { id: 1, name: "Woyenbrakemi", price: 4000 },
  { id: 2, name: "Talan", price: 6000 },
  { id: 3, name: "Odhran", price: 5700 },
  { id: 4, name: "Desmond", price: 2000 },
  { id: 5, name: "Musa", price: 1000 },
  { id: 6, name: "Lawlyn", price: 18000 },
];

interface IProps {
  setOpenAcceptOffer: Dispatch<SetStateAction<boolean>>;
}

const AuctionsScripts = ({ setOpenAcceptOffer }: IProps) => {
  const { query } = useRouter();

  const handleOpenAcceptOfferModal = (
    event: React.PointerEvent<HTMLButtonElement>
  ) => {
    event.stopPropagation();
    setOpenAcceptOffer(true);
  };

  return (
    <div className="mt-12 md:mt-20 grid">
      <Typography
        className="pl-4 futura font-medium leading-normal"
        variant="h4"
        color="primary.700"
      >
        Auctions
      </Typography>
      <TableContainer
        className="mt-4 xl:mt-8 2xl:mt-10 shadow-none"
        component={Paper}
      >
        <Table>
          <TableHead>
            <TableRow className="border-b border-gray-200">
              <TableCell className="pr-20 lg:pr-40">
                <Typography
                  variant="h6"
                  className="text-primary-700 futura font-medium w-28"
                >
                  Bidder
                </Typography>
              </TableCell>
              <TableCell>
                <Typography
                  variant="h6"
                  className="text-primary-700 text-center futura font-medium w-28"
                >
                  Asking Price
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {auctions.map((auction) => (
              <Link
                key={auction.id}
                href={`/listings/${query.scriptSlug}/bids`}
                passHref
              >
                <TableRow
                  sx={{
                    "&:nth-of-type(odd)": {
                      backgroundColor: "#FBF9FF",
                    },
                    "&:nth-of-type(event)": {
                      backgroundColor: "#FFF",
                    },
                    " td, th": {
                      border: 0,
                    },
                  }}
                  key={auction.id}
                  className="cursor-pointer hover:bg-primary-50/40 duration-200"
                >
                  <TableCell className="w-40 lg:py-6">
                    <Typography variant="h6" className="font-normal text-neutral-700">
                      {auction.name}
                    </Typography>
                  </TableCell>
                  <TableCell align="center" className="w-20">
                    <Typography
                      variant="h6"
                      className="text-primary-700 font-semibold"
                    >
                      $ {auction.price}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <div className="flex justify-end min-w-[240px]">
                      <ButtonGroup className="border-none md:gap-8">
                        <Button
                          onClick={handleOpenAcceptOfferModal}
                          className="hidden sm:flex border-none hover:border-none font-semibold text-success-500"
                        >
                          Accept Offer
                        </Button>
                        <Button className="hidden sm:flex border-none hover:border-none font-semibold text-secondary-700">
                          Decline
                        </Button>
                      </ButtonGroup>
                      <ButtonGroup className="gap-16">
                        <IconButton
                          onClick={handleOpenAcceptOfferModal}
                          className="flex sm:hidden text-success-500"
                        >
                          <MdDone />
                        </IconButton>
                        <IconButton className="flex sm:hidden text-secondary-700">
                          <AiOutlineClose />
                        </IconButton>
                      </ButtonGroup>
                    </div>
                  </TableCell>
                </TableRow>
              </Link>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default AuctionsScripts;
