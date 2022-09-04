import { IconButton, Modal, Typography } from "@mui/material";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
import { AiOutlineClose } from "react-icons/ai";
import success from "@assets/images/success.png";
interface IProps {
  setOpen: Dispatch<SetStateAction<boolean>>;
  open: boolean;
}

const ModalBidSuccessful = ({ setOpen, open }: IProps) => {
  const handleClose = () => setOpen(false);
  return (
    <Modal className="px-5" open={open} onClose={handleClose}>
      <div className="px-6 relative bg-white w-full mt-44 max-w-xl mx-auto flex flex-col items-center py-16 rounded-lg">
        <IconButton onClick={handleClose} className="absolute top-5 right-5">
          <AiOutlineClose className="text-error-500" />
        </IconButton>
        <div>
          <Image src={success} alt="success" />
        </div>
        <Typography color="primary.700" mt={1} variant="h5">
          Bid Successful
        </Typography>
        <Typography className="text-center text-[#484848]">
          You have successfully placed a bid on this script. Check your
          dashboard to monitor your bids
        </Typography>
      </div>
    </Modal>
  );
};

export default ModalBidSuccessful;
