import { Grow, IconButton, Modal, Typography } from "@mui/material";
import Btn from "@shared/Btn/Btn";
import CancelBtn from "@shared/CancelBtn/CancelBtn";
import useWeblogApi from "apis/Weblog.api";
import { IWeblog } from "interfaces/weblog";
import Image from "next/image";
import { useRouter } from "next/router";
import { AiOutlineClose } from "react-icons/ai";
import routes from "routes/routes";
import errorHandler from "utils/error-handler";
import Trash from "./assets/trash.png";

interface IProps {
  openMoveBlogToTrashListModal: boolean;
  setOpenMoveBlogToTrashListModal: React.Dispatch<
    React.SetStateAction<boolean>
  >;
  weblogId: string;
  setBlogList?: React.Dispatch<React.SetStateAction<IWeblog[]>>;
}

const MoveBlogToTrashListModal = ({
  openMoveBlogToTrashListModal,
  setOpenMoveBlogToTrashListModal,
  weblogId,
  setBlogList,
}: IProps) => {
  const { updateWeblog } = useWeblogApi();
  const { query, push } = useRouter();

  const handleCloseMoveBlogToTrashListModal = () =>
    setOpenMoveBlogToTrashListModal(false);

  const handleMoveBlogToTrashList = async () => {
    try {
      await updateWeblog({ trash: true }, weblogId);
      if (setBlogList) {
        setBlogList((prevState) =>
          prevState.filter((blog) => blog._id !== weblogId)
        );
      }
      setOpenMoveBlogToTrashListModal(false);
      if (query.slug) push(routes.blogsAdminDashboard.url);
    } catch (error) {
      errorHandler(error);
    }
  };

  return (
    <Modal
      className="px-5"
      open={openMoveBlogToTrashListModal}
      onClose={handleCloseMoveBlogToTrashListModal}
    >
      <Grow in={openMoveBlogToTrashListModal}>
        <div className="px-6 relative bg-white w-full mt-12 lg:mt-28 max-w-xl lg:max-w-2xl mx-auto flex flex-col items-center py-12 rounded-lg">
          <IconButton
            onClick={handleCloseMoveBlogToTrashListModal}
            className="absolute top-5 right-5"
            color="error"
          >
            <AiOutlineClose />
          </IconButton>
          <div>
            <Image src={Trash} alt="add blog to trash" />
          </div>
          <Typography
            className="text-center max-w-[351px] mt-2 lg:mt-5 leading-7 font-normal"
            color="primary.700"
            variant="h6"
          >
            Are you sure you want to move this blog post to trash?
          </Typography>
          <div className="flex w-full justify-center gap-3 sm:gap-6 mt-4 lg:mt-7">
            <Btn
              onClick={handleMoveBlogToTrashList}
              size="large"
              className="py-3 px-5 text-white self-stretch bg-primary-700 rounded-lg"
            >
              Proceed
            </Btn>
            <CancelBtn onClick={handleCloseMoveBlogToTrashListModal} />
          </div>
        </div>
      </Grow>
    </Modal>
  );
};

export default MoveBlogToTrashListModal;
