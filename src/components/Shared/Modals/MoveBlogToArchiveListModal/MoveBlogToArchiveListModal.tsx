import { IconButton, Modal, Slide, Typography } from "@mui/material";
import Btn from "@shared/Btn/Btn";
import CancelBtn from "@shared/CancelBtn/CancelBtn";
import useWeblogApi from "apis/Weblog.api";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
import { AiOutlineClose } from "react-icons/ai";
import moveImage from "./assets/move-image.png";

interface IProps {
  openMoveBlogToArchiveListModal: boolean;
  setOpenMoveBlogToArchiveListModal: Dispatch<SetStateAction<boolean>>;
  weblogId: string;
}

const MoveBlogToArchiveListModal = ({
  openMoveBlogToArchiveListModal,
  setOpenMoveBlogToArchiveListModal,
  weblogId,
}: IProps) => {
  const { updateWeblog } = useWeblogApi();

  const handleCloseMoveBlogToArchiveListModal = () =>
    setOpenMoveBlogToArchiveListModal(false);

  const handleMoveBlogToTrashList = async () => {
    try {
      const res = await updateWeblog({ archive: true }, weblogId);
      console.log(
        "🚀 ~ file: MoveBlogToTrashListModal.tsx ~ line 29 ~ handleMoveBlogToTrashList ~ res",
        res
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal
      className="px-5"
      open={openMoveBlogToArchiveListModal}
      onClose={handleCloseMoveBlogToArchiveListModal}
    >
      <Slide
        direction="up"
        in={openMoveBlogToArchiveListModal}
        mountOnEnter
        unmountOnExit
      >
        <div className="px-6 relative bg-white w-full mt-12 lg:mt-28 max-w-xl lg:max-w-2xl mx-auto flex flex-col items-center py-12 lg:py-16 rounded-lg">
          <IconButton
            onClick={handleCloseMoveBlogToArchiveListModal}
            className="absolute top-5 right-5"
            color="error"
          >
            <AiOutlineClose />
          </IconButton>
          <div>
            <Image src={moveImage} alt="add blog to move" />
          </div>
          <Typography
            className="text-center max-w-xs mt-2 lg:mt-5 leading-7 font-normal"
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
            <CancelBtn onClick={handleCloseMoveBlogToArchiveListModal} />
          </div>
        </div>
      </Slide>
    </Modal>
  );
};

export default MoveBlogToArchiveListModal;
