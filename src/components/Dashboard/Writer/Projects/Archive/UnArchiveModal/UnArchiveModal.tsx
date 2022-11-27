import { IconButton, Modal, Typography, Zoom } from "@mui/material";
import Btn from "@shared/Btn/Btn";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
import pictureModalsSaves from "@assets/images/picture-modals-saves.png";
import { AiOutlineClose } from "react-icons/ai";
import CancelBtn from "@shared/CancelBtn/CancelBtn";
import useScriptsApi from "apis/Scripts.api";
import { IWriterScript } from "interfaces/script";

interface IProps {
  openUnArchive: boolean;
  setOpenUnArchive: Dispatch<SetStateAction<boolean>>;
  setListScripts: React.Dispatch<React.SetStateAction<IWriterScript[]>>;
  id: string;
}

const UnArchiveModal = ({
  openUnArchive,
  setOpenUnArchive,
  id,
  setListScripts,
}: IProps) => {
  const { updateWriterArchiveScript } = useScriptsApi();
  const handleCloseUnArchive = () => setOpenUnArchive(false);

  const unArchivingScript = async () => {
    await updateWriterArchiveScript({ archive: false }, id);
    setListScripts((prevState) =>
      prevState.filter((script) => script._id !== id)
    );
  };

  return (
    <Modal className="px-5" open={openUnArchive} onClose={handleCloseUnArchive}>
      <Zoom in={openUnArchive}>
        <div className="px-6 relative bg-white w-full mt-12 lg:mt-28 max-w-xl mx-auto flex flex-col items-center py-16 rounded-lg">
          <IconButton
            color="error"
            onClick={handleCloseUnArchive}
            className="absolute top-5 right-5"
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
            className="text-center font-normal mt-4"
            color="primary.700"
            variant="h6"
            component="p"
          >
            Proceed to unarchive script?
          </Typography>
          <div className="flex gap-2 sm:gap-5 mt-8 justify-center items-stretch">
            <Btn
              size="large"
              className="py-3 px-5 text-white bg-primary-700 rounded-lg"
              onClick={unArchivingScript}
            >
              Proceed
            </Btn>
            <CancelBtn onClick={handleCloseUnArchive} />
          </div>
        </div>
      </Zoom>
    </Modal>
  );
};

export default UnArchiveModal;
