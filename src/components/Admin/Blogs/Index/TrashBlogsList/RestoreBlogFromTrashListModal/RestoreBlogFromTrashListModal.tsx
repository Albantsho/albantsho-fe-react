import { IconButton, Modal, Slide, Typography } from "@mui/material";
import Btn from "@shared/Btn/Btn";
import CancelBtn from "@shared/CancelBtn/CancelBtn";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
import { AiOutlineClose } from "react-icons/ai";
import moveImage from "./assets/move-image.png";

interface IProps {
  openRestoreBlogFromTrashListModal: boolean;
  setOpenRestoreBlogFromTrashListModal: Dispatch<SetStateAction<boolean>>;
}

const RestoreBlogFromTrashListModal = ({
  openRestoreBlogFromTrashListModal,
  setOpenRestoreBlogFromTrashListModal,
}: IProps) => {
  const handleCloseRestoreBlogFromTrashListModal = () =>
    setOpenRestoreBlogFromTrashListModal(false);

  return (
    <Modal
      className="px-5"
      open={openRestoreBlogFromTrashListModal}
      onClose={handleCloseRestoreBlogFromTrashListModal}
    >
      <Slide
        direction="up"
        in={openRestoreBlogFromTrashListModal}
        mountOnEnter
        unmountOnExit
      >
        <div className="px-6 relative bg-white w-full mt-12 lg:mt-28 max-w-2xl mx-auto flex flex-col items-center py-12 rounded-lg">
          <IconButton
            onClick={handleCloseRestoreBlogFromTrashListModal}
            className="absolute top-5 right-5"
            color="error"
          >
            <AiOutlineClose />
          </IconButton>
          <div>
            <Image src={moveImage} alt="add blog to move" />
          </div>
          <Typography
            className="text-center max-w-[278px] mt-2 lg:mt-5 leading-normal font-normal"
            color="primary.700"
            variant="h6"
          >
            You’ll be archiving this post. Do you want to proceed?
          </Typography>
          <div className="flex w-full justify-center gap-3 sm:gap-6 mt-4 lg:mt-7">
            <Btn
              size="large"
              className="py-3 px-5 text-white self-stretch bg-primary-700 rounded-lg"
            >
              Proceed
            </Btn>
            <CancelBtn onClick={handleCloseRestoreBlogFromTrashListModal} />
          </div>
        </div>
      </Slide>
    </Modal>
  );
};

export default RestoreBlogFromTrashListModal;
