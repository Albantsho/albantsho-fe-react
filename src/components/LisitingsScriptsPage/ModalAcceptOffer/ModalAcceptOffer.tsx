import { IconButton, Modal, Typography } from "@mui/material";
import Btn from "@shared/Btn/Btn";
import Image from "next/image";
import { AiOutlineClose } from "react-icons/ai";
import auctionModal from "./assets/auction-modal.png";
const ModalAcceptOffer = () => {
  return (
    <Modal className="px-5">
      <div className="px-6 relative bg-white w-full mt-44 max-w-xl mx-auto flex flex-col items-center py-16 rounded-lg">
        <IconButton className="absolute top-5 right-5">
          <AiOutlineClose className="text-error-500" />
        </IconButton>
        <div>
          <Image src={auctionModal} alt="success" />
        </div>
        <Typography
          color="primary.700"
          mt={1}
          variant="body2"
          className="font-light text-center"
        >
          You are accepting a bid for your script
        </Typography>
        <Typography
          variant="subtitle2"
          className="text-center futura font-medium"
        >
          The Longman of Long Beach
        </Typography>
        <Typography variant="h6" className="text-center font-semibold">
          @$6,000
        </Typography>
        <div className="flex flex-wrap gap-2 sm:gap-5 mt-8 justify-center items-center">
          <Btn
            size="large"
            className="py-3 px-5 md:px-3 md:py-4 text-white bg-primary-700"
          >
            Create Script
          </Btn>
          <Btn
            onClick={handleClose}
            size="large"
            disabled
            className="py-3 px-5 md:px-3 md:py-4 border border-gray-300"
          >
            Cancel
          </Btn>
        </div>
      </div>
    </Modal>
  );
};

export default ModalAcceptOffer;
