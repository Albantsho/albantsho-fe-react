import { IconButton, Modal, Typography } from "@mui/material";
import Btn from "@shared/Btn/Btn";
import DeleteBtn from "@shared/DeleteBtn/DeleteBtn";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
import { AiOutlineClose } from "react-icons/ai";
import acceptOffer from "./assets/accept-offer.png";

interface IProps {
  openAcceptOffer: boolean;
  setOpenAcceptOffer: Dispatch<SetStateAction<boolean>>;
}

const AcceptOfferModal = ({ openAcceptOffer, setOpenAcceptOffer }: IProps) => {
  const handleCloseAcceptOffer = () => setOpenAcceptOffer(false);

  return (
    <Modal
      className="px-5"
      open={openAcceptOffer}
      onClose={handleCloseAcceptOffer}
    >
      <div className="px-6 relative bg-white w-full mt-12 max-w-lg mx-auto flex flex-col items-center py-16 rounded-lg">
        <IconButton
          onClick={handleCloseAcceptOffer}
          className="absolute top-5 right-5"
        >
          <AiOutlineClose className="text-error-500" />
        </IconButton>
        <div>
          <Image src={acceptOffer} alt="accept offer" />
        </div>
        <Typography
          className="text-center mt-3 sm:mt-5 lg:mt-8"
          color="primary.700"
          variant="body2"
        >
          You are accepting a bid for your script
        </Typography>
        <Typography
          className="text-center mt-1 futura font-medium"
          color="primary.700"
          variant="h6"
        >
          The Longman of Long Beach
        </Typography>
        <Typography
          className="text-center mt-3 sm:mt-5  futura font-semibold"
          color="primary.700"
          variant="h6"
        >
          @$6,000
        </Typography>
        <div className="flex flex-wrap gap-2 sm:gap-6 mt-5 sm:mt-6 lg:mt-10 xl:mt-12   justify-center items-center">
          <Btn size="large" className="py-3 text-white bg-primary-700 rounded-lg">
            Accept Offer
          </Btn>
          <DeleteBtn onClick={handleCloseAcceptOffer} />
        </div>
      </div>
    </Modal>
  );
};

export default AcceptOfferModal;
