import { IconButton, Modal } from "@mui/material";
import { useRouter } from "next/router";
import { AiOutlineClose } from "react-icons/ai";
import routes from "routes/routes";
import ExportFile from "../ExportFile";

interface IProps {
  openExportModal: boolean;
  setOpenExportModal: React.Dispatch<React.SetStateAction<boolean>>;
  textEditorValue: string;
}

const ExportFileModal = ({
  openExportModal,
  setOpenExportModal,
  textEditorValue,
}: IProps) => {
  const { push, query } = useRouter();

  const handleCloseExportFile = () => {
    push(routes.script.dynamicUrl(query.id as string));
    setOpenExportModal(false);
  };

  return (
    <Modal
      className="px-5 lg:hidden"
      open={openExportModal}
      onClose={handleCloseExportFile}
    >
      <div className="px-6 relative bg-white w-full mt-12 lg:mt-28 max-w-sm mx-auto py-14 xl:py-20 rounded-lg">
        <IconButton
          onClick={handleCloseExportFile}
          className="absolute top-5 right-5"
          color="error"
        >
          <AiOutlineClose />
        </IconButton>
        <ExportFile textEditorValue={textEditorValue} />
      </div>
    </Modal>
  );
};

export default ExportFileModal;
