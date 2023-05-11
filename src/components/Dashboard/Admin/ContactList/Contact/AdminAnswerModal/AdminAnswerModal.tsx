import { IconButton, Modal, Slide, Typography } from "@mui/material";
import { AiOutlineClose } from "react-icons/ai";
import parse from "html-react-parser";

interface IProps {
  openAdminAnswerToContactModal: boolean;
  handleCloseAdminAnswerToContactModal: () => void;
  adminAnswer: string;
}

const AdminAnswerModal = ({
  openAdminAnswerToContactModal,
  handleCloseAdminAnswerToContactModal,
  adminAnswer,
}: IProps) => {
  return (
    <Modal
      className="px-5 overflow-y-auto py-20"
      open={openAdminAnswerToContactModal}
      onClose={handleCloseAdminAnswerToContactModal}
    >
      <Slide direction="up" in={openAdminAnswerToContactModal}>
        <div className="px-6 relative bg-white w-full max-w-screen-lg flex flex-col mx-auto py-16 rounded-lg">
          <IconButton
            onClick={handleCloseAdminAnswerToContactModal}
            className="absolute top-5 right-5"
            color="error"
          >
            <AiOutlineClose />
          </IconButton>
          <Typography variant="h5" color="primary">
            Your Answer
          </Typography>
          <div className="h-96 overflow-y-auto border rounded-lg p-3">
            {parse(adminAnswer)}
          </div>
        </div>
      </Slide>
    </Modal>
  );
};

export default AdminAnswerModal;
