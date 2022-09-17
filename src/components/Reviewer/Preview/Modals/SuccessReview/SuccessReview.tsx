import { IconButton, Modal, Typography } from "@mui/material";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
import { AiOutlineClose } from "react-icons/ai";
import success from "@assets/images/success.png";
import Btn from "@shared/Btn/Btn";
import { useRouter } from "next/router";
import routes from "routes/routes";
interface IProps {
  setOpenSuccessReview: Dispatch<SetStateAction<boolean>>;
  openSuccessReview: boolean;
}

const SuccessReview = ({ setOpenSuccessReview, openSuccessReview }: IProps) => {
  const { push } = useRouter();

  const handleCloseSuccessReview = () => setOpenSuccessReview(false);
  return (
    <Modal
      className="px-5"
      open={openSuccessReview}
      onClose={handleCloseSuccessReview}
    >
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

        <Btn
          onClick={() => push(routes.projectsDashboard)}
          size="medium"
          className="mt-4 sm:mt-6 py-3 px-6"
        >
          Back to dashboard
        </Btn>
      </div>
    </Modal>
  );
};

export default SuccessReview;
