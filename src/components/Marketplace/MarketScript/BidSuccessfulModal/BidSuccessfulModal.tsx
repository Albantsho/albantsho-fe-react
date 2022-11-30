import success from "@assets/images/success.png";
import { Fade, IconButton, Modal, Typography } from "@mui/material";
import Image from "next/image";
import { AiOutlineClose } from "react-icons/ai";
interface IProps {
  setOpenBidSuccessful: React.Dispatch<React.SetStateAction<boolean>>;
  openBidSuccessful: boolean;
}

const BidSuccessfulModal = ({
  setOpenBidSuccessful,
  openBidSuccessful,
}: IProps) => {
  const handleCloseBidSuccessful = () => setOpenBidSuccessful(false);
  return (
    <Modal
      className="px-5"
      open={openBidSuccessful}
      onClose={handleCloseBidSuccessful}
    >
      <Fade in={openBidSuccessful}>
        <div className="px-6 relative bg-white w-full mt-12 lg:mt-28 max-w-xl mx-auto flex flex-col items-center py-16 rounded-lg">
          <IconButton
            onClick={handleCloseBidSuccessful}
            className="absolute top-5 right-5"
          >
            <AiOutlineClose className="text-error-500" />
          </IconButton>
          <div>
            <Image src={success} alt="success" />
          </div>
          <Typography color="primary.700" mt={1} variant="h5">
            Bid Successful
          </Typography>
          <Typography className="text-center max-w-[385px] text-[#484848]">
            You have successfully placed a bid on this script. Check your
            dashboard to monitor your bids
          </Typography>
        </div>
      </Fade>
    </Modal>
  );
};

export default BidSuccessfulModal;
