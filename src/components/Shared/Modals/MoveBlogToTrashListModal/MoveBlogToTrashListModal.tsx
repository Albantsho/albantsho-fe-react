import { Grow, IconButton, Modal, Typography } from "@mui/material";
import Btn from "@shared/Btn/Btn";
import CancelBtn from "@shared/CancelBtn/CancelBtn";
import useWeblogApi from "apis/Weblog.api";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
import { AiOutlineClose } from "react-icons/ai";
import Trash from "./assets/trash.png";

interface IProps {
  openMoveBlogToTrashListModal: boolean;
  setOpenMoveBlogToTrashListModal: Dispatch<SetStateAction<boolean>>;
  weblogId: string;
}

const MoveBlogToTrashListModal = ({
  openMoveBlogToTrashListModal,
  setOpenMoveBlogToTrashListModal,
  weblogId,
}: IProps) => {
  const { updateWeblog } = useWeblogApi();

  const handleCloseMoveBlogToTrashListModal = () =>
    setOpenMoveBlogToTrashListModal(false);

  const handleMoveBlogToTrashList = async () => {
    try {
      const res = await updateWeblog({ trash: true }, weblogId);
      console.log(
        "🚀 ~ file: MoveBlogToTrashListModal.tsx ~ line 29 ~ handleMoveBlogToTrashList ~ res",
        res
      );
      setOpenMoveBlogToTrashListModal(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal
      className="px-5"
      open={openMoveBlogToTrashListModal}
      onClose={handleCloseMoveBlogToTrashListModal}
    >
      <Grow in={openMoveBlogToTrashListModal}>
        <div className="px-6 relative bg-white w-full mt-12 lg:mt-28 max-w-xl lg:max-w-2xl mx-auto flex flex-col items-center py-12 rounded-lg">
          <IconButton
            onClick={handleCloseMoveBlogToTrashListModal}
            className="absolute top-5 right-5"
            color="error"
          >
            <AiOutlineClose />
          </IconButton>
          <div>
            <Image src={Trash} alt="add blog to trash" />
          </div>
          <Typography
            className="text-center max-w-[351px] mt-2 lg:mt-5 leading-7 font-normal"
            color="primary.700"
            variant="h6"
          >
            Are you sure you want to move this blog post to trash?
          </Typography>
          <div className="flex w-full justify-center gap-3 sm:gap-6 mt-4 lg:mt-7">
            <Btn
              onClick={handleMoveBlogToTrashList}
              size="large"
              className="py-3 px-5 text-white self-stretch bg-primary-700 rounded-lg"
            >
              Proceed
            </Btn>
            <CancelBtn onClick={handleCloseMoveBlogToTrashListModal} />
          </div>
        </div>
      </Grow>
    </Modal>
  );
};

export default MoveBlogToTrashListModal;
