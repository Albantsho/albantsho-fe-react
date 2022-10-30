import { IconButton, Modal } from "@mui/material";
import { useRouter } from "next/router";
import { Dispatch, SetStateAction } from "react";
import { AiOutlineClose } from "react-icons/ai";
import ExportFile from "../ExportFile";

interface IProps {
  openExportModal: boolean;
  setOpenExportModal: Dispatch<SetStateAction<boolean>>;
}

const ExportFileModal = ({ openExportModal, setOpenExportModal }: IProps) => {
  const { push } = useRouter();

  const handleCloseExportFile = () => {
    push("/script");
    setOpenExportModal(false);
  };

  return (
    <Modal
      className="px-5 lg:hidden"
      open={openExportModal}
      onClose={handleCloseExportFile}
    >
      <div className="px-6 relative bg-white w-full mt-12 lg:mt-28 max-w-xs mx-auto py-14 xl:py-20 rounded-lg">
        <IconButton
          onClick={handleCloseExportFile}
          className="absolute top-5 right-5"
          color="error"
        >
          <AiOutlineClose />
        </IconButton>
        <ExportFile />
      </div>
    </Modal>
  );
};

export default ExportFileModal;
