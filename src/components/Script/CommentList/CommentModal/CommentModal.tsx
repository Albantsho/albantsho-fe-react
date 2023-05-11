import { Divider, IconButton, Modal, Typography } from "@mui/material";
import { DefaultEventsMap } from "@socket.io/component-emitter";
import { useRouter } from "next/router";
import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import routes from "utils/routes";
import { Socket } from "socket.io-client";
import CommentList from "../CommentList";

interface IProps {
  openCommentsModal: boolean;
  setOpenCommentsModal: React.Dispatch<React.SetStateAction<boolean>>;
  socket: Socket<DefaultEventsMap, DefaultEventsMap>;
}

const CommentModal = ({
  openCommentsModal,
  setOpenCommentsModal,
  socket,
}: IProps) => {
  const { push, query } = useRouter();

  const handleCloseExportFile = () => {
    push(routes.script.dynamicUrl(query.id as string), undefined, {
      shallow: true,
    });
    setOpenCommentsModal(false);
  };
  return (
    <Modal
      className="px-5 xl:hidden"
      open={openCommentsModal}
      onClose={handleCloseExportFile}
    >
      <div className="px-6 relative bg-white w-full mt-12 lg:mt-28 max-w-sm mx-auto pt-14 pb-2 rounded-lg max-h-96 overflow-y-scroll no-scrollbar">
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
          Comments list
        </Typography>
        <Divider className="my-4 -mx-6" />
        <CommentList socket={socket} />
      </div>
    </Modal>
  );
};

export default React.memo(CommentModal);
