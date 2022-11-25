import { IconButton, Modal, Slide, Typography } from "@mui/material";
import Btn from "@shared/Btn/Btn";
import CancelBtn from "@shared/CancelBtn/CancelBtn";
import useScriptsApi from "apis/Scripts.api";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
import { AiOutlineClose } from "react-icons/ai";
import errorHandler from "utils/error-handler";
import UnListingItem from "./assets/un-listing-item.png";

interface IProps {
  openUnListingItem: boolean;
  setOpenUnListingItem: Dispatch<SetStateAction<boolean>>;
  id: string;
}

const UnListingItemModal = ({
  openUnListingItem,
  setOpenUnListingItem,
  id,
}: IProps) => {
  const { updateWriterListingScript } = useScriptsApi();

  const handleClose = () => setOpenUnListingItem(false);

  const unListingScript = async () => {
    try {
      await updateWriterListingScript({ market: false }, id);
      handleClose();
    } catch (error) {
      errorHandler(error);
    }
  };

  return (
    <Modal className="px-5" open={openUnListingItem} onClose={handleClose}>
      <Slide
        direction="right"
        in={openUnListingItem}
        mountOnEnter
        unmountOnExit
      >
        <div className="px-6 relative bg-white w-full mt-12 lg:mt-28 max-w-xl mx-auto flex flex-col items-center py-16 rounded-lg">
          <IconButton
            color="error"
            onClick={handleClose}
            className="absolute top-5 right-5"
          >
            <AiOutlineClose />
          </IconButton>
          <div>
            <Image src={UnListingItem} alt="UnListing Item" />
          </div>
          <Typography
            className="text-center max-w-[212px] my-5 lg:my-6"
            color="primary.700"
            variant="body1"
          >
            Are you sure you want to unlist this script?
          </Typography>
          <div className="flex gap-3 sm:gap-6">
            <Btn
              onClick={unListingScript}
              size="large"
              className="py-3 px-5 md:px-3 rounded-lg md:py-4 text-white bg-primary-700"
            >
              Unlist Script
            </Btn>
            <CancelBtn onClick={handleClose} />
          </div>
        </div>
      </Slide>
    </Modal>
  );
};

export default UnListingItemModal;
