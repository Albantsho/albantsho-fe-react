import { IconButton, Modal, Typography } from "@mui/material";
import Btn from "@shared/Btn/Btn";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
import { AiOutlineClose } from "react-icons/ai";
import unlistengItem from "./assets/unlisteng-item.png";

interface IProps {
  openUnListingItem: boolean;
  setOpenUnListingItem: Dispatch<SetStateAction<boolean>>;
}

const UnListingItemModal = ({
  openUnListingItem,
  setOpenUnListingItem,
}: IProps) => {
  const handleClose = () => setOpenUnListingItem(false);
  return (
    <Modal className="px-5" open={openUnListingItem} onClose={handleClose}>
      <div className="px-6 relative bg-white w-full mt-12 max-w-lg mx-auto flex flex-col items-center py-16 rounded-lg">
        <IconButton onClick={handleClose} className="absolute top-5 right-5">
          <AiOutlineClose className="text-error-500" />
        </IconButton>
        <div>
          <Image src={unlistengItem} alt="UnListing Item" />
        </div>
        <Typography
          className="text-center max-w-[212px]"
          color="primary.700"
          mt={1}
          variant="body1"
        >
          Are you sure you want to unlist this script?
        </Typography>
        <div className="flex flex-wrap gap-2  sm:gap-6 lg:gap-8 mt-6 justify-center items-center">
          <Btn
            size="large"
            className="py-3 px-5 md:px-3 md:py-4 text-white bg-primary-700"
          >
            Unlist Script
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

export default UnListingItemModal;
