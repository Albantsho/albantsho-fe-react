import { Divider, IconButton, Modal, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { AiOutlineClose } from "react-icons/ai";
import routes from "routes/routes";
import ScenesList from "../ScenesList";

interface IProps {
  openScenesModal: boolean;
  setOpenScenesModal: React.Dispatch<React.SetStateAction<boolean>>;
  textEditorValue: string;
}

const ScenesListModal = ({
  openScenesModal,
  setOpenScenesModal,
  textEditorValue,
}: IProps) => {
  const { push, query } = useRouter();

  const handleCloseExportFile = () => {
    push(routes.script.dynamicUrl(query.id as string));
    setOpenScenesModal(false);
  };

  return (
    <Modal
      className="px-5 lg:hidden"
      open={openScenesModal}
      onClose={handleCloseExportFile}
    >
      <div className="px-6 relative bg-white w-full mt-12 lg:mt-28 max-w-sm mx-auto pt-14 pb-2 xl:py-20 rounded-lg max-h-96 overflow-y-scroll no-scrollbar">
        <IconButton
          onClick={handleCloseExportFile}
          className="absolute top-4 right-4"
          color="error"
        >
          <AiOutlineClose />
        </IconButton>
        <Typography
          variant="h5"
          className="futura text-primary-700 text-center leading-none"
        >
          Scenes list
        </Typography>
        <Divider className="my-4 -mx-6" />
        <ScenesList textEditorValue={textEditorValue} />
      </div>
    </Modal>
  );
};

export default ScenesListModal;
