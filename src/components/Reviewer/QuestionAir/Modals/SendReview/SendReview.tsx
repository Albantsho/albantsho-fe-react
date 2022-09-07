import { IconButton, Modal, Typography } from "@mui/material";
import Btn from "@shared/Btn/Btn";
import { Dispatch, SetStateAction } from "react";
import { AiOutlineClose } from "react-icons/ai";

interface IProps {
  openSendReview: boolean;
  setOpenSendReview: Dispatch<SetStateAction<boolean>>;
  setOpenSuccessReview: Dispatch<SetStateAction<boolean>>;
}

const SendReview = ({
  openSendReview,
  setOpenSendReview,
  setOpenSuccessReview,
}: IProps) => {
  const handleCloseSendReview = () => setOpenSendReview(false);
  return (
    <Modal
      className="px-5"
      open={openSendReview}
      onClose={handleCloseSendReview}
    >
      <div className=" px-5 sm:px-10  relative bg-white w-full mt-8 sm:mt-12  max-w-lg mx-auto flex flex-col items-center py-12 pt-16 sm:py-16 rounded-lg">
        <IconButton
          onClick={handleCloseSendReview}
          className="absolute top-5 right-5"
        >
          <AiOutlineClose className="text-error-500" />
        </IconButton>

        <Typography
          className="text-center max-w-[415px]"
          color="primary.700"
          mt={1}
          variant="body1"
        >
          By clicking the send review as email button, you are confirming you
          are done with review on this script and your review will be sent to
          the writer.
          <br />
          <br />
          Would you want to proceed?
        </Typography>
        <div className="flex flex-wrap gap-2 sm:gap-5 mt-8 sm:mt-12 justify-center items-center">
          <Btn
            onClick={() => {
              setOpenSendReview(false);
              setOpenSuccessReview(true);
            }}
            size="large"
            className="py-3 px-4 text-white bg-primary-700"
          >
            Proceed
          </Btn>
          <Btn
            onClick={handleCloseSendReview}
            size="large"
            disabled
            className="py-3 px-4 border border-gray-300"
          >
            Cancel
          </Btn>
        </div>
      </div>
    </Modal>
  );
};

export default SendReview;
