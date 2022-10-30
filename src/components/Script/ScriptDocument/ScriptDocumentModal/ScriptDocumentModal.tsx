import { IconButton, Modal } from "@mui/material";
import { useRouter } from "next/router";
import { Dispatch, SetStateAction } from "react";
import { AiOutlineClose } from "react-icons/ai";
import ScriptDocument from "../ScriptDocument";

interface IProps {
  openDocumentModal: boolean;
  setOpenDocumentModal: Dispatch<SetStateAction<boolean>>;
}

const ScriptDocumentModal = ({
  openDocumentModal,
  setOpenDocumentModal,
}: IProps) => {
  const { push } = useRouter();

  const handleCloseExportFile = () => {
    setOpenDocumentModal(false);
    push("/script");
  };

  return (
    <Modal
      className="px-5 lg:hidden"
      open={openDocumentModal}
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
        <ScriptDocument />
      </div>
    </Modal>
  );
};

export default ScriptDocumentModal;
