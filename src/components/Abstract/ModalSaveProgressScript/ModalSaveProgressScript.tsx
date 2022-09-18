import { Button, Grow, IconButton, Modal, Typography } from "@mui/material";
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
      <Grow in={openModalSaveProgress}>
        <div className="px-6 relative bg-white w-full mt-12 lg:mt-28 max-w-xl mx-auto flex flex-col items-center py-16 rounded-lg">
          <IconButton
            color="error"
            onClick={() => setOpenModalSaveProgress(false)}
            className="absolute top-5 right-5"
          >
            <AiOutlineClose />
          </IconButton>
          <div>
            <Image src={success} alt="save progress" />
          </div>
          <Typography
            className="text-center mt-3 sm:mt-5 leading-normal lg:mt-8 futura font-medium"
            color="primary.700"
            variant="h5"
          >
            Your progress so far has been saved
          </Typography>
          <div className="flex gap-2 sm:gap-6 mt-3 sm:mt-6 xl:mt-7">
            <Btn
              size="large"
              className="sm:py-3 sm:px-5 text-white bg-primary-700"
            >
              Back to dash board
            </Btn>
            <Button
              onClick={() => setOpenModalSaveProgress(false)}
              variant="outlined"
              size="large"
              className="py-3 px-5"
            >
              Continue
            </Button>
          </div>
        </div>
      </Grow>
    </Modal>
  );
};

export default ModalSaveProgressScript;
