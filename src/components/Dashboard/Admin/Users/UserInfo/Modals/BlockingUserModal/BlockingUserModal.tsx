import { IconButton, Modal, Slide, Typography } from "@mui/material";
import Btn from "@shared/Btn/Btn";
import CancelBtn from "@shared/CancelBtn/CancelBtn";
import useAuthApi from "apis/Auth.api";
import { IUserInformationInAdminPanel } from "interfaces/user";
import Image from "next/image";
import { AiOutlineClose } from "react-icons/ai";
import errorHandler from "utils/error-handler";
import blockImage from "./assets/block.png";

interface IProps {
  openBlockingUserModal: boolean;
  setOpenBlockingUserModal: React.Dispatch<React.SetStateAction<boolean>>;
  setOneUser: React.Dispatch<
    React.SetStateAction<IUserInformationInAdminPanel | null>
  >;
  user: IUserInformationInAdminPanel;
}

const BlockingUserModal = ({
  openBlockingUserModal,
  setOpenBlockingUserModal,
  setOneUser,
  user,
}: IProps) => {
  const { updateUserRestriction } = useAuthApi();

  const handleCloseBlockingUserModal = () => setOpenBlockingUserModal(false);

  const blockUser = async () => {
    try {
      const res = await updateUserRestriction({ block: true }, user._id);
      setOneUser({ ...user, block: true });
      handleCloseBlockingUserModal();
    } catch (error) {
      errorHandler(error);
    }
  };

  return (
    <Modal
      className="px-5"
      open={openBlockingUserModal}
      onClose={handleCloseBlockingUserModal}
    >
      <Slide
        direction="up"
        in={openBlockingUserModal}
        mountOnEnter
        unmountOnExit
      >
        <div className="px-6 relative bg-white w-full mt-12 lg:mt-28 max-w-xl lg:max-w-2xl mx-auto flex flex-col items-center py-12 lg:py-24 rounded-lg">
          <IconButton
            onClick={handleCloseBlockingUserModal}
            className="absolute top-5 right-5"
            color="error"
          >
            <AiOutlineClose />
          </IconButton>
          <div>
            <Image src={blockImage} alt="blocking user" />
          </div>
          <Typography
            className="text-center max-w-md mt-4 lg:mt-10 leading-7 font-normal"
            color="primary.700"
            variant="h6"
          >
            Blocking this user implies this user won’t have access to the
            platform anymore.
          </Typography>
          <Typography
            className="text-center max-w-md mt-3 leading-7 font-normal"
            color="primary.700"
            variant="h6"
          >
            Are you sure you want to block this user?
          </Typography>
          <div className="flex w-full justify-center gap-3 sm:gap-6 mt-4 lg:mt-7">
            <Btn
              onClick={blockUser}
              size="large"
              className="py-3 px-5 text-white self-stretch bg-primary-700 rounded-lg"
            >
              Proceed
            </Btn>
            <CancelBtn onClick={handleCloseBlockingUserModal} />
          </div>
        </div>
      </Slide>
    </Modal>
  );
};

export default BlockingUserModal;
