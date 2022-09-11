import { IconButton, Modal, Typography } from "@mui/material";
import Btn from "@shared/Btn/Btn";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
import pictureModalsSaves from "@assets/images/picture-modals-saves.png";
import { AiOutlineClose } from "react-icons/ai";
import DeleteBtn from "@shared/DeleteBtn/DeleteBtn";

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
          color="error"
          onClick={handleCloseUnArchive}
          className="absolute top-5 right-5"
        >
          <AiOutlineClose />
        </IconButton>
        <div>
          <Image src={pictureModalsSaves} alt="add to archive modal picture" />
        </div>
        <Typography
          className="text-center font-normal mt-4"
          color="primary.700"
          variant="h6"
          component="p"
        >
          Proceed to unarchive script?
        </Typography>
        <div className="flex gap-2 sm:gap-5 mt-8 justify-center items-stretch">
          <Btn
            size="large"
            className="py-3 px-5 text-white bg-primary-700 rounded-lg"
          >
            Proceed
          </Btn>
          <DeleteBtn onClick={handleCloseUnArchive} />
        </div>
      </div>
    </Modal>
  );
};

export default ModalArchive;
