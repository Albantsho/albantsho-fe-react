import { IconButton, Modal, Slide, Typography } from "@mui/material";
import Btn from "@shared/Btn/Btn";
import CancelBtn from "@shared/CancelBtn/CancelBtn";
import useScripBidApi from "apis/ScripBid.api";
import { IBidForScript } from "interfaces/bid";
import { IResData } from "interfaces/response";
import Image from "next/image";
import { useRouter } from "next/router";
import { AiOutlineClose } from "react-icons/ai";
import { QueryClient, useMutation } from "react-query";
import routes from "routes/routes";
import errorHandler from "utils/error-handler";
import successHandler from "utils/success-handler";
import acceptOffer from "./assets/accept-offer.png";

interface IProps {
  openAcceptOffer: boolean;
  setOpenAcceptOffer: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
  auction: IBidForScript;
  refetch?: any;
}

const queryClient = new QueryClient();

const AcceptOfferModal = ({
  openAcceptOffer,
  setOpenAcceptOffer,
  auction,
  title,
  refetch,
}: IProps) => {
  const { acceptBid } = useScripBidApi();
  const { replace } = useRouter();

  const { mutate: acceptBidMutation, isLoading: loadingAcceptBid } =
    useMutation<IResData<object>, Error, string>((data) => acceptBid(data), {
      onError: (error) => errorHandler(error),
      onSuccess: (data) => {
        successHandler(data.message);
        refetch && refetch();
        queryClient.invalidateQueries(["script", "bid"]);
        replace(routes.writerDashboard.url);
      },
    });

  const handleCloseAcceptOffer = () => setOpenAcceptOffer(false);

  const acceptOfferFunc = (id: string) => async () => acceptBidMutation(id);

  return (
    <Modal
      className="px-5"
      open={openAcceptOffer}
      onClose={handleCloseAcceptOffer}
    >
      <Slide direction="up" in={openAcceptOffer} mountOnEnter unmountOnExit>
        <div className="px-6 relative bg-white w-full mt-12 lg:mt-28 max-w-xl mx-auto flex flex-col items-center py-14 xl:py-20 rounded-lg">
          <IconButton
            onClick={handleCloseAcceptOffer}
            className="absolute top-5 right-5"
            color="error"
          >
            <AiOutlineClose />
          </IconButton>
          <div>
            <Image src={acceptOffer} alt="accept offer" />
          </div>
          <Typography
            className="text-center my-3 sm:my-5 lg:mt-6 lg:mb-3"
            color="primary.700"
            variant="body1"
          >
            You are accepting a bid for your script
          </Typography>
          <Typography
            className="text-center futura leading-normal font-medium"
            color="primary.700"
            variant="h5"
          >
            {title}
          </Typography>
          <Typography
            className="text-center mt-3 lg:mt-6 leading-normal  futura font-semibold"
            color="primary.700"
            variant="h4"
          >
            @${auction.amount}
          </Typography>
          <div className="flex w-full justify-center gap-3 sm:gap-6 mt-10 lg:mt-8">
            <Btn
              loading={loadingAcceptBid}
              onClick={acceptOfferFunc(auction._id)}
              size="large"
              className="py-3 px-5 text-white self-stretch bg-primary-700 rounded-lg"
            >
              Accept Offer
            </Btn>
            <CancelBtn onClick={handleCloseAcceptOffer} />
          </div>
        </div>
      </Slide>
    </Modal>
  );
};

export default AcceptOfferModal;
