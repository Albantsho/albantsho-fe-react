import { IconButton, Modal, Slide, Typography } from "@mui/material";
import Btn from "@shared/Btn/Btn";
import CancelBtn from "@shared/CancelBtn/CancelBtn";
import useWeblogApi from "apis/Weblog.api";
import { IWeblog } from "interfaces/weblog";
import Image from "next/image";
import { useRouter } from "next/router";
import { AiOutlineClose } from "react-icons/ai";
import routes from "routes/routes";
import errorHandler from "utils/error-handler";
import moveImage from "./assets/move-image.png";

interface IProps {
  openRestoreBlogFromArchiveListModal: boolean;
  setRestoreBlogFromArchiveListModal: React.Dispatch<
    React.SetStateAction<boolean>
  >;
  weblogId: string;
  setBlogList?: React.Dispatch<React.SetStateAction<IWeblog[]>>;
}

const RestoreBlogFromArchiveListModal = ({
  openRestoreBlogFromArchiveListModal,
  setRestoreBlogFromArchiveListModal,
  weblogId,
  setBlogList,
}: IProps) => {
  const { updateWeblog } = useWeblogApi();
  const { query, push } = useRouter();

  const handleCloseMoveBlogToArchiveListModal = () =>
    setRestoreBlogFromArchiveListModal(false);

  const handleMoveBlogToArchiveList = async () => {
    try {
      await updateWeblog({ archive: false }, weblogId);
      if (setBlogList) {
        setBlogList((prevState) =>
          prevState.filter((blog) => blog._id !== weblogId)
        );
      }
      setRestoreBlogFromArchiveListModal(false);
      if (query.id) push(routes.blogsAdminDashboard.url);
    } catch (error) {
      errorHandler(error);
    }
  };

  return (
    <Modal
      className="px-5"
      open={openRestoreBlogFromArchiveListModal}
      onClose={handleCloseMoveBlogToArchiveListModal}
    >
      <Slide
        direction="up"
        in={openRestoreBlogFromArchiveListModal}
        mountOnEnter
        unmountOnExit
      >
        <div className="px-6 relative bg-white w-full mt-12 lg:mt-28 max-w-xl lg:max-w-2xl mx-auto flex flex-col items-center py-12 lg:py-16 rounded-lg">
          <IconButton
            onClick={handleCloseMoveBlogToArchiveListModal}
            className="absolute top-5 right-5"
            color="error"
          >
            <AiOutlineClose />
          </IconButton>
          <div>
            <Image src={moveImage} alt="add blog to move" />
          </div>
          <Typography
            className="text-center max-w-xs mt-2 lg:mt-5 leading-7 font-normal"
            color="primary.700"
            variant="h6"
          >
            You’ll be Unarchiving this post. Do you want to proceed?
          </Typography>
          <div className="flex w-full justify-center gap-3 sm:gap-6 mt-4 lg:mt-7">
            <Btn
              onClick={handleMoveBlogToArchiveList}
              size="large"
              className="py-3 px-5 text-white self-stretch bg-primary-700 rounded-lg"
            >
              Proceed
            </Btn>
            <CancelBtn onClick={handleCloseMoveBlogToArchiveListModal} />
          </div>
        </div>
      </Slide>
    </Modal>
  );
};

export default RestoreBlogFromArchiveListModal;
