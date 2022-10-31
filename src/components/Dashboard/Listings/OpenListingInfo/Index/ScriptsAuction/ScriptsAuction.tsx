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
import BidsApi from "apis/Bids.api";
import { IProduct } from "interfaces/product";
import { useRouter } from "next/router";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import routes from "routes/routes";

const auctions = [
  { id: 1, name: "Woyenbrakemi", price: 4000 },
  { id: 2, name: "Talan", price: 6000 },
  { id: 3, name: "Odhran", price: 5700 },
  { id: 4, name: "Desmond", price: 2000 },
  { id: 5, name: "Musa", price: 1000 },
  { id: 6, name: "Lawlyn", price: 18000 },
];

interface IProps {
  script: IProduct;
}

const ScriptsAuction = ({ script }: IProps) => {
  const { query, push } = useRouter();
  const { rejectBid } = BidsApi();
  const [openAcceptOffer, setOpenAcceptOffer] = useState<boolean>(false);

  const handleOpenAcceptOfferModal = (
    event: React.PointerEvent<HTMLButtonElement>
  ) => {
    event.stopPropagation();
    setOpenAcceptOffer(true);
  };

  const rejectOfferFunc =
    (script_basic_id: string, amount: number) => async () => {
      await rejectBid({ script_basic_id, amount });
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
        {script.market_bid_script ? (
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
              {script.market_bid_script.map((auction) => (
                <>
                  <TableRow
                    key={auction.id}
                    onClick={() =>
                      push(`${routes.listingsDashboard}/${query.id}/bids`)
                    }
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
                        {auction.user.name}
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
                            onClick={rejectOfferFunc(
                              auction.script_basic_id,
                              auction.amount
                            )}
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
                            onClick={rejectOfferFunc(
                              auction.script_basic_id,
                              auction.amount
                            )}
                            color="warning"
                            className="flex sm:hidden text-secondary-700"
                          >
                            <AiOutlineClose />
                          </IconButton>
                        </ButtonGroup>
                      </div>
                    </TableCell>
                  </TableRow>
                  <AcceptOfferModal
                    script={script}
                    auction={auction}
                    openAcceptOffer={openAcceptOffer}
                    setOpenAcceptOffer={setOpenAcceptOffer}
                  />
                </>
              ))}
            </TableBody>
          </Table>
        ) : (
          <h2>not bid found</h2>
        )}
      </TableContainer>
    </div>
  );
};

export default ScriptsAuction;
