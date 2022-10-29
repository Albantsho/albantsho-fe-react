import { IconButton, Modal } from "@mui/material";
import { useRouter } from "next/router";
import { AiOutlineClose } from "react-icons/ai";
import CommentList from "../CommentList";

const CommentModal = () => {
  const { query, push } = useRouter();

  const handleCloseExportFile = () => push("/script");

  return (
    <Modal
      className="px-5 lg:hidden"
      open={true}
      onClose={handleCloseExportFile}
    >
      <div className="px-6 relative bg-white w-full mt-12 lg:mt-28 max-w-xs mx-auto py-14 xl:py-20 rounded-lg max-h-96 overflow-y-scroll no-scrollbar">
        <IconButton
          onClick={handleCloseExportFile}
          className="absolute top-4 right-4"
          color="error"
        >
          <AiOutlineClose />
        </IconButton>
        <CommentList />
      </div>
    </Modal>
  );
};

export default CommentModal;
