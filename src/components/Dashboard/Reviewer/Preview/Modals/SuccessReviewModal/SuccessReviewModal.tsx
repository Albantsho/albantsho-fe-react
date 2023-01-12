import success from "@assets/images/success.png";
import { Grow, IconButton, Modal, Typography } from "@mui/material";
import Btn from "@shared/Btn/Btn";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose } from "react-icons/ai";
import routes from "routes/routes";
interface IProps {
  setOpenSuccessReview: React.Dispatch<React.SetStateAction<boolean>>;
  openSuccessReview: boolean;
}

const SuccessReviewModal = ({
  setOpenSuccessReview,
  openSuccessReview,
}: IProps) => {
  const handleCloseSuccessReview = () => setOpenSuccessReview(false);
  return (
    <Modal
      className="px-5"
      open={openSuccessReview}
      onClose={handleCloseSuccessReview}
    >
      <Grow in={openSuccessReview}>
        <div className="px-6 relative bg-white w-full mt-8 sm:mt-12 lg:mt-28 max-w-xl mx-auto flex flex-col items-center py-16 rounded-lg">
          <IconButton
            color="error"
            onClick={handleCloseSuccessReview}
            className="absolute top-5 right-5"
          >
            <AiOutlineClose />
          </IconButton>
          <div>
            <Image src={success} alt="success" />
          </div>
          <Typography
            color="primary.700"
            mt={1}
            className="futura font-medium"
            variant="h5"
          >
            Review complete
          </Typography>
          <Typography variant="body1" className="text-center text-[#484848]">
            Thanks for your professional review
          </Typography>
          <Link passHref legacyBehavior href={routes.reviewerDashboard.url}>
            <Btn size="medium" className="mt-4 sm:mt-6 py-3 px-6">
              Back to dashboard
            </Btn>
          </Link>
        </div>
      </Grow>
    </Modal>
  );
};

export default SuccessReviewModal;
