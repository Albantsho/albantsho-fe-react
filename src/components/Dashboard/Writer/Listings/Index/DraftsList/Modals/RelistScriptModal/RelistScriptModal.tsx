import pictureModalsSaves from "@assets/images/picture-modals-saves.png";
import { IconButton, Modal, Slide, Typography } from "@mui/material";
import Btn from "@shared/Btn/Btn";
import CancelBtn from "@shared/CancelBtn/CancelBtn";
import useScriptsApi from "apis/Scripts.api";
import { IUnlistedScript } from "interfaces/script";
import Image from "next/image";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import errorHandler from "utils/error-handler";

interface IProps {
  openRelistScript: boolean;
  setOpenRelistScript: React.Dispatch<React.SetStateAction<boolean>>;
  id: string;
  setUnListedScripts: React.Dispatch<React.SetStateAction<IUnlistedScript[]>>;
}

const RelistScriptModal = ({
  openRelistScript,
  setOpenRelistScript,
  setUnListedScripts,
  id,
}: IProps) => {
  const { updatePublishedScript } = useScriptsApi();
  const [loading, setLoading] = useState(false);

  const handleCloseRelistScript = () => setOpenRelistScript(false);

  const reListScriptToMarketplace = async () => {
    try {
      setLoading(true);
      await updatePublishedScript({ published: true }, id);
      setUnListedScripts((prev) => prev.filter((script) => script._id !== id));
    } catch (error) {
      errorHandler(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <Modal
      className="px-5"
      open={openRelistScript}
      onClose={handleCloseRelistScript}
    >
      <Slide direction="left" in={openRelistScript} mountOnEnter unmountOnExit>
        <div className="px-6 relative bg-white w-full mt-12 lg:mt-28 max-w-xl mx-auto flex flex-col items-center py-16 rounded-lg">
          <IconButton
            onClick={handleCloseRelistScript}
            className="absolute top-5 right-5"
            color="error"
          >
            <AiOutlineClose />
          </IconButton>
          <div>
            <Image
              src={pictureModalsSaves}
              alt="add to archive modal picture"
            />
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
              onClick={reListScriptToMarketplace}
              size="large"
              className="py-3 px-5 rounded-lg text-white bg-primary-700"
              loading={loading}
            >
              Proceed
            </Btn>
            <CancelBtn onClick={handleCloseRelistScript} />
          </div>
        </div>
      </Slide>
    </Modal>
  );
};

export default RelistScriptModal;
