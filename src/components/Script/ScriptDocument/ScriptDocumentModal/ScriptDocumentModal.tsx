import { IconButton, Modal } from "@mui/material";
import { DefaultEventsMap } from "@socket.io/component-emitter";
import { IFullInformationScript } from "interfaces/script";
import { useRouter } from "next/router";
import { AiOutlineClose } from "react-icons/ai";
import { Socket } from "socket.io-client";
import routes from "utils/routes";
import ScriptDocument from "../ScriptDocument";

interface IProps {
  openDocumentModal: boolean;
  setOpenDocumentModal: React.Dispatch<React.SetStateAction<boolean>>;
  script: IFullInformationScript;
  socket: Socket<DefaultEventsMap, DefaultEventsMap>;
}

const ScriptDocumentModal = ({
  openDocumentModal,
  setOpenDocumentModal,
  script,
  socket,
}: IProps) => {
  const { push, query } = useRouter();

  const handleCloseExportFile = () => {
    setOpenDocumentModal(false);
    push(routes.script.url(query.id as string), undefined, {
      shallow: true,
    });
  };

  return (
    <Modal
      className="px-5 xl:hidden"
      open={openDocumentModal}
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
        <ScriptDocument socket={socket} script={script} />
      </div>
    </Modal>
  );
};

export default ScriptDocumentModal;
