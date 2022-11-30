import { Divider, IconButton, Modal, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { AiOutlineClose } from "react-icons/ai";
import ScenesList from "../ScenesList";

interface IProps {
  openScenesModal: boolean;
  setOpenScenesModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const ScenesListModal = ({ openScenesModal, setOpenScenesModal }: IProps) => {
  const { push } = useRouter();

  const handleCloseExportFile = () => {
    push("/script");
    setOpenScenesModal(false);
  };

  return (
    <Modal
      className="px-5 lg:hidden"
      open={openScenesModal}
      onClose={handleCloseExportFile}
    >
      <div className="px-6 relative bg-white w-full mt-12 lg:mt-28 max-w-xs mx-auto pt-14 pb-2 xl:py-20 rounded-lg max-h-96 overflow-y-scroll no-scrollbar">
        <IconButton
          onClick={handleCloseExportFile}
          className="absolute top-4 right-4"
          color="error"
        >
          <AiOutlineClose />
        </IconButton>
        <Typography variant="h6" className="futura text-primary-700">
          Scenes list
        </Typography>
        <Divider className="my-2" />
        <ScenesList />
      </div>
    </Modal>
  );
};

export default ScenesListModal;
