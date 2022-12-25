import { Divider, IconButton, Modal, Typography } from "@mui/material";
import { IComment } from "interfaces/comment";
import { useRouter } from "next/router";
import { AiOutlineClose } from "react-icons/ai";
import routes from "routes/routes";
import CommentList from "../CommentList";
import { Socket } from "socket.io-client";
import { DefaultEventsMap } from "@socket.io/component-emitter";

interface IProps {
  openCommentsModal: boolean;
  setOpenCommentsModal: React.Dispatch<React.SetStateAction<boolean>>;
  commentList: IComment[];
  socket: Socket<DefaultEventsMap, DefaultEventsMap>;
}

const CommentModal = ({
  openCommentsModal,
  setOpenCommentsModal,
  commentList,
  socket,
}: IProps) => {
  const { push, query } = useRouter();

  const handleCloseExportFile = () => {
    push(routes.script.dynamicUrl(query.id as string));
    setOpenCommentsModal(false);
  };
  return (
    <Modal
      className="px-5 lg:hidden"
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
        <CommentList socket={socket} commentList={commentList} />
      </div>
    </Modal>
  );
};

export default CommentModal;
