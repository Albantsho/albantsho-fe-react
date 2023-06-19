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
import useScripBidApi from "apis/ScripBid.api";
import { IBid } from "interfaces/bid";
import { IResData } from "interfaces/response";
import { IFullInformationScript } from "interfaces/script";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import React, { Suspense, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import { QueryClient, useMutation } from "react-query";
import errorHandler from "utils/error-handler";
import routes from "utils/routes";
import successHandler from "utils/success-handler";

const AcceptOfferModal = dynamic(
  () => import("@shared/Modals/AcceptOfferModal/AcceptOfferModal")
);

interface IProps {
  bidsList: IBid[];
  script: IFullInformationScript;
  refetch?: any;
}

const queryClient = new QueryClient();

const ScriptsAuction = ({ bidsList, script, refetch }: IProps) => {
  const { push } = useRouter();
  const { rejectBid } = useScripBidApi();
  const [openAcceptOffer, setOpenAcceptOffer] = useState<boolean>(false);

  const { mutate: rejectBidMutation, isLoading: loadingRejectBid } =
    useMutation<IResData<object>, Error, string>((data) => rejectBid(data), {
      onError: (error) => errorHandler(error),
      onSuccess: (data) => {
        successHandler(data.message);
        refetch && refetch();
        queryClient.invalidateQueries(["script", "bid"]);
      },
    });

  const handleOpenAcceptOfferModal = (
    event: React.PointerEvent<HTMLButtonElement>
  ) => {
    event.stopPropagation();
    setOpenAcceptOffer(true);
  };

  const rejectOfferFunc =
    (id: string) => async (event: React.PointerEvent<HTMLButtonElement>) => {
      event.stopPropagation();
      rejectBidMutation(id);
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
                      {`${auction.producer[0].firstName} ${auction.producer[0].lastName}`}
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
                          disabled={loadingRejectBid}
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
                          disabled={loadingRejectBid}
                        >
                          <AiOutlineClose />
                        </IconButton>
                      </ButtonGroup>
                    </div>
                  </TableCell>
                </TableRow>
                <Suspense>
                  {openAcceptOffer ? (
                    <AcceptOfferModal
                      refetch={refetch}
                      title={script.title}
                      id={auction._id}
                      amount={auction.amount}
                      openAcceptOffer={openAcceptOffer}
                      setOpenAcceptOffer={setOpenAcceptOffer}
                    />
                  ) : null}
                </Suspense>
              </React.Fragment>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default React.memo(ScriptsAuction);
