import { IconButton, Modal, Typography } from "@mui/material";
import Btn from "@shared/Btn/Btn";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
import { AiOutlineClose } from "react-icons/ai";
import pictureModalsSaves from "@assets/images/picture-modals-saves.png";
import CancelBtn from "@shared/CancelBtn/CancelBtn";

interface IProps {
  openRelistScript: boolean;
  setOpenRelistScript: Dispatch<SetStateAction<boolean>>;
}

const RelistScriptModal = ({
  openRelistScript,
  setOpenRelistScript,
}: IProps) => {
  const handleCloseRelistScript = () => setOpenRelistScript(false);
  return (
    <Modal
      className="px-5"
      open={openRelistScript}
      onClose={handleCloseRelistScript}
    >
      <div className="px-6 relative bg-white w-full mt-12 lg:mt-28 max-w-xl mx-auto flex flex-col items-center py-16 rounded-lg">
        <IconButton
          onClick={handleCloseRelistScript}
          className="absolute top-5 right-5"
          color="error"
        >
          <AiOutlineClose />
        </IconButton>
        <div>
          <Image src={pictureModalsSaves} alt="add to archive modal picture" />
        </div>
        <Typography
          className="text-center max-w-[279px] my-5 lg:my-6"
          color="primary.700"
          variant="body1"
        >
          You’re about to list this script back on the marketplace
        </Typography>
        <div className="flex gap-3 sm:gap-6">
          <Btn
            size="large"
            className="py-3 px-5 rounded-lg text-white bg-primary-700"
          >
            Proceed
          </Btn>
          <CancelBtn onClick={handleCloseRelistScript} />
        </div>
      </div>
    </Modal>
  );
};

export default RelistScriptModal;
