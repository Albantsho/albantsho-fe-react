import { IconButton, Modal, Typography } from "@mui/material";
import Btn from "@shared/Btn/Btn";
import { useRouter } from "next/router";
import { Dispatch, SetStateAction } from "react";
import { AiOutlineClose } from "react-icons/ai";

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
        <Typography
          variant="h5"
          color="primary.main"
          className="futura font-semibold leading-normal"
        >
          Export Document
        </Typography>
        <Typography className="max-w-[230px] mb-6">
          Document will be exported as a PDF file.
        </Typography>
        <Btn className="py-2 px-6">Export File</Btn>
      </div>
    </Modal>
  );
};

export default ExportFileModal;
