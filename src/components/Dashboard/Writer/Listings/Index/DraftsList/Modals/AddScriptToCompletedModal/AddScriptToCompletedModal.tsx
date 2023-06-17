import pictureModalsSaves from "@assets/images/picture-modals-saves.png";
import { IconButton, Modal, Slide, Typography } from "@mui/material";
import Btn from "@shared/Btn/Btn";
import CancelBtn from "@shared/CancelBtn/CancelBtn";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose } from "react-icons/ai";
import routes from "utils/routes";

interface IProps {
  openAddToScript: boolean;
  setOpenAddToScript: React.Dispatch<React.SetStateAction<boolean>>;
  id: string;
}

const AddScriptToCompletedModal = ({
  openAddToScript,
  setOpenAddToScript,
  id,
}: IProps) => {
  const handleClose = () => setOpenAddToScript(false);
  return (
    <Modal className="px-5" open={openAddToScript} onClose={handleClose}>
      <Slide direction="down" in={openAddToScript} mountOnEnter unmountOnExit>
        <div className="px-6 relative bg-white w-full mt-12 lg:mt-28 max-w-xl mx-auto flex flex-col items-center py-16 rounded-lg">
          <IconButton
            color="error"
            onClick={handleClose}
            className="absolute top-5 right-5"
          >
            <AiOutlineClose />
          </IconButton>
          <div>
            <Image src={pictureModalsSaves} alt="add script to completed" />
          </div>
          <Typography
            className="text-center my-5 lg:my-6 font-medium"
            color="primary.700"
            mt={1}
            variant="body1"
          >
            Proceed to complete listing
          </Typography>
          <div className="flex gap-3 sm:gap-6">
            <Link passHref legacyBehavior href={routes.abstract.url(id)}>
              <Btn size="large" className="py-3 px-5 text-white bg-primary-700">
                Proceed
              </Btn>
            </Link>
            <CancelBtn onClick={handleClose} />
          </div>
        </div>
      </Slide>
    </Modal>
  );
};

export default AddScriptToCompletedModal;
