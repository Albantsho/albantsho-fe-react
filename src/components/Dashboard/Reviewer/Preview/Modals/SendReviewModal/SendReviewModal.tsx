import { IconButton, Modal, Slide, Typography } from "@mui/material";
import Btn from "@shared/Btn/Btn";
import CancelBtn from "@shared/CancelBtn/CancelBtn";
import useReviewsApi from "apis/Reviews.api";
import { AiOutlineClose } from "react-icons/ai";
import errorHandler from "utils/error-handler";

interface IProps {
  openSendReview: boolean;
  setOpenSendReview: React.Dispatch<React.SetStateAction<boolean>>;
  setOpenSuccessReview: React.Dispatch<React.SetStateAction<boolean>>;
  reviewId: string;
}

const SendReviewModal = ({
  openSendReview,
  setOpenSendReview,
  setOpenSuccessReview,
  reviewId,
}: IProps) => {
  const { sendReviewToWriterEmail } = useReviewsApi();

  const handleCloseSendReview = () => setOpenSendReview(false);
  const sendReviewAsEmail = async () => {
    try {
      await sendReviewToWriterEmail(reviewId);
      setOpenSendReview(false);
      setOpenSuccessReview(true);
    } catch (error) {
      errorHandler(error);
    }
  };

  return (
    <Modal
      className="px-5"
      open={openSendReview}
      onClose={handleCloseSendReview}
    >
      <Slide direction="up" in={openSendReview} mountOnEnter unmountOnExit>
        <div className=" px-5 sm:px-10  relative bg-white w-full mt-8 sm:mt-12 lg:mt-28  max-w-xl mx-auto flex flex-col items-center py-12 pt-16 sm:py-16 rounded-lg">
          <IconButton
            color="error"
            onClick={handleCloseSendReview}
            className="absolute top-5 right-5"
          >
            <AiOutlineClose />
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
          <div className="flex gap-2 sm:gap-5 mt-8 sm:mt-12 justify-center items-stretch">
            <Btn
              onClick={sendReviewAsEmail}
              size="large"
              className="py-3 px-4 text-white bg-primary-700 rounded-lg"
            >
              Proceed
            </Btn>
            <CancelBtn onClick={handleCloseSendReview} />
          </div>
        </div>
      </Slide>
    </Modal>
  );
};

export default SendReviewModal;
