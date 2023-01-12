import {
  Button,
  ButtonGroup,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import AcceptOfferModal from "@shared/Modals/AcceptOfferModal/AcceptOfferModal";
import useScripBidApi from "apis/ScripBid.api";
import { IBidForScript } from "interfaces/bid";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import routes from "routes/routes";

interface IProps {
  bidsList: IBidForScript[];
}

const ScriptsAuction = ({ bidsList }: IProps) => {
  const { query, push } = useRouter();
  const { rejectBid } = useScripBidApi();
  const [openAcceptOffer, setOpenAcceptOffer] = useState<boolean>(false);

  const handleOpenAcceptOfferModal = (
    event: React.PointerEvent<HTMLButtonElement>
  ) => {
    event.stopPropagation();
    setOpenAcceptOffer(true);
  };

  const rejectOfferFunc = (id: string) => async () => {
    await rejectBid(id);
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
            {bidsList.map((auction) => (
              <React.Fragment key={auction._id}>
                <TableRow
                  onClick={() => {
                    push(
                      routes.listingsBidScript.dynamicUrl(
                        auction.scriptId,
                        auction._id
                      )
                    );
                  }}
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
                  className="cursor-pointer hover:bg-primary-50/40 duration-200"
                >
                  <TableCell className="w-40 lg:py-6">
                    <Typography
                      variant="h6"
                      className="font-normal text-neutral-700"
                    >
                      {auction.producer.firstName}
                      {auction.producer.lastName}
                    </Typography>
                  </TableCell>
                  <TableCell align="center" className="w-20">
                    <Typography
                      variant="h6"
                      className="text-primary-700 font-semibold"
                    >
                      $ {auction.amount}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <div className="flex justify-end min-w-[240px]">
                      <div className="flex md:gap-8">
                        <Button
                          variant="text"
                          color="success"
                          onClick={handleOpenAcceptOfferModal}
                          className="hidden sm:flex font-semibold text-success-500"
                        >
                          Accept Offer
                        </Button>
                        <Button
                          onClick={rejectOfferFunc(auction._id)}
                          variant="text"
                          color="warning"
                          className="hidden sm:flex font-semibold text-secondary-700"
                        >
                          Decline
                        </Button>
                      </div>
                      <ButtonGroup className="gap-16">
                        <IconButton
                          color="success"
                          onClick={handleOpenAcceptOfferModal}
                          className="flex sm:hidden text-success-500"
                        >
                          <MdDone />
                        </IconButton>
                        <IconButton
                          onClick={rejectOfferFunc(auction._id)}
                          color="warning"
                          className="flex sm:hidden text-secondary-700"
                        >
                          <AiOutlineClose />
                        </IconButton>
                      </ButtonGroup>
                    </div>
                  </TableCell>
                </TableRow>
                {/* <AcceptOfferModal
                  script={script}
                  auction={auction}
                  openAcceptOffer={openAcceptOffer}
                  setOpenAcceptOffer={setOpenAcceptOffer}
                /> */}
              </React.Fragment>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default React.memo(ScriptsAuction);
