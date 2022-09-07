import { IconButton, Modal, Typography } from "@mui/material";
import Btn from "@shared/Btn/Btn";
import Image from "next/image";
import { AiOutlineClose } from "react-icons/ai";
import success from "@assets/images/success.png";
import { Dispatch, SetStateAction } from "react";

interface IProps {
  openModalSaveProgress: boolean;
  setOpenModalSaveProgress: Dispatch<SetStateAction<boolean>>;
}

const ModalSaveProgressScript = ({
  openModalSaveProgress,
  setOpenModalSaveProgress,
}: IProps) => {
  return (
    <Modal
      open={openModalSaveProgress}
      onClick={() => setOpenModalSaveProgress(false)}
      className="px-5"
    >
      <div className="px-6 relative bg-white w-full mt-12 max-w-lg mx-auto flex flex-col items-center py-16 rounded-lg">
        <IconButton
          onClick={() => setOpenModalSaveProgress(false)}
          className="absolute top-5 right-5"
        >
          <AiOutlineClose className="text-error-500" />
        </IconButton>
        <div>
          <Image src={success} alt="save progress" />
        </div>
        <Typography
          className="text-center mt-3 sm:mt-5 lg:mt-8 futura font-medium"
          color="primary.700"
          variant="h6"
        >
          Your progress so far has been saved
        </Typography>
        <div className="flex flex-wrap gap-2 sm:gap-6 mt-3 sm:mt-4 lg:mt-6 xl:mt-8   justify-center items-center">
          <Btn size="large" className="px-6 py-3 text-white bg-primary-700">
            Back to dash board
          </Btn>
          <Btn
            onClick={() => setOpenModalSaveProgress(false)}
            size="large"
            disabled
            className="px-6 py-3 border border-gray-300"
          >
            Continue
          </Btn>
        </div>
      </div>
    </Modal>
  );
};

export default ModalSaveProgressScript;
