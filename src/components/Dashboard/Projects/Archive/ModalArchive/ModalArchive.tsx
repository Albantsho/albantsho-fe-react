import { IconButton, Modal, Typography } from "@mui/material";
import Btn from "@shared/Btn/Btn";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
import pictureModalsSaves from "@assets/images/picture-modals-saves.png";
import { AiOutlineClose } from "react-icons/ai";

interface IProps {
  openModalUnArchive: boolean;
  setOpenModalUnArchive: Dispatch<SetStateAction<boolean>>;
}

const ModalArchive = ({
  openModalUnArchive,
  setOpenModalUnArchive,
}: IProps) => {
  const handleCloseUnArchive = () => setOpenModalUnArchive(false);
  return (
    <Modal
      className="px-5"
      open={openModalUnArchive}
      onClose={handleCloseUnArchive}
    >
      <div className="px-6 relative bg-white w-full mt-12 max-w-lg mx-auto flex flex-col items-center py-16 rounded-lg">
        <IconButton
          onClick={handleCloseUnArchive}
          className="absolute top-5 right-5"
        >
          <AiOutlineClose className="text-error-500" />
        </IconButton>
        <div>
          <Image src={pictureModalsSaves} alt="add to archive modal picture" />
        </div>
        <Typography
          className="text-center"
          color="primary.700"
          mt={1}
          variant="body1"
        >
          Proceed to unarchive script?
        </Typography>
        <div className="flex flex-wrap gap-2 sm:gap-5 mt-8 justify-center items-center">
          <Btn
            size="large"
            className="py-3 px-5 md:px-3 md:py-4 text-white bg-primary-700"
          >
            Create Script
          </Btn>
          <Btn
            onClick={handleCloseUnArchive}
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

export default ModalArchive;
