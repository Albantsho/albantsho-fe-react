import { IconButton, Modal, Typography } from "@mui/material";
import Btn from "@shared/Btn/Btn";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
import onArchive from "../assets/on-archive.png";
import { AiOutlineClose } from "react-icons/ai";

interface IProps {
  openRelistScript: boolean;
  setOpenRelistScript: Dispatch<SetStateAction<boolean>>;
}

const ModalRelistScript = ({
  openRelistScript,
  setOpenRelistScript,
}: IProps) => {
  const handleClose = () => setOpenRelistScript(false);
  return (
    <Modal className="px-5" open={openRelistScript} onClose={handleClose}>
      <div className="px-6 relative bg-white w-full mt-12 max-w-lg mx-auto flex flex-col items-center py-16 rounded-lg">
        <IconButton onClick={handleClose} className="absolute top-5 right-5">
          <AiOutlineClose className="text-error-500" />
        </IconButton>
        <div>
          <Image src={onArchive} alt="add to archive modal picture" />
        </div>
        <Typography
          className="text-center max-w-[279px]"
          color="primary.700"
          mt={1}
          variant="body1"
        >
          You’re about to list this script back on the marketplace
        </Typography>
        <div className="flex flex-wrap gap-2 sm:gap-6 mt-8 justify-center items-center">
          <Btn
            size="large"
            className="py-3 px-5 md:px-3 md:py-4 text-white bg-primary-700"
          >
            Proceed
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

export default ModalRelistScript;
