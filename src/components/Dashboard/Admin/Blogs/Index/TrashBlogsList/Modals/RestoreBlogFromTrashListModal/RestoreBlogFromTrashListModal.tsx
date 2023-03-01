import { IconButton, Modal, Slide, Typography } from "@mui/material";
import Btn from "@shared/Btn/Btn";
import CancelBtn from "@shared/CancelBtn/CancelBtn";
import useWeblogApi from "apis/Weblog.api";
import { IWeblog } from "interfaces/weblog";
import Image from "next/image";
import { useRouter } from "next/router";
import { AiOutlineClose } from "react-icons/ai";
import { QueryClient, useMutation } from "react-query";
import errorHandler from "utils/error-handler";
import moveImage from "./assets/move-image.png";

interface IProps {
  openRestoreBlogFromTrashListModal: boolean;
  setOpenRestoreBlogFromTrashListModal: React.Dispatch<
    React.SetStateAction<boolean>
  >;
  weblogId: string;
  blogList: IWeblog[];
}

const queryClient = new QueryClient();

const RestoreBlogFromTrashListModal = ({
  openRestoreBlogFromTrashListModal,
  setOpenRestoreBlogFromTrashListModal,
  weblogId,
  blogList,
}: IProps) => {
  const { updateWeblog } = useWeblogApi();
  const { query, push } = useRouter();

  const { mutate: restoreTrashBlog, isLoading: loadingRestoreTrashBlog } =
    useMutation<void, Error, { trash: boolean; id: string }>(
      (data) => updateWeblog({ trash: data.trash }, data.id),
      {
        onError: (error) => {
          errorHandler(error);
        },
        onSuccess: () => {
          queryClient.invalidateQueries({
            predicate: (query) => {
              return query.queryKey[0] === "weblog";
            },
          });
          handleCloseRestoreBlogFromTrashListModal();
          if (blogList.length <= 1) {
            push(`?trash=true&page=${+String(query.page) - 1}`, undefined, {
              shallow: true,
            });
          }
        },
      }
    );

  const handleCloseRestoreBlogFromTrashListModal = () =>
    setOpenRestoreBlogFromTrashListModal(false);

  const handleRestoreWeblogFromTrashList = async () =>
    restoreTrashBlog({ trash: false, id: weblogId });

  return (
    <Modal
      className="px-5"
      open={openRestoreBlogFromTrashListModal}
      onClose={handleCloseRestoreBlogFromTrashListModal}
    >
      <Slide
        direction="up"
        in={openRestoreBlogFromTrashListModal}
        mountOnEnter
        unmountOnExit
      >
        <div className="px-6 relative bg-white w-full mt-12 lg:mt-28 max-w-xl lg:max-w-2xl mx-auto flex flex-col items-center py-12 lg:py-24 rounded-lg">
          <IconButton
            onClick={handleCloseRestoreBlogFromTrashListModal}
            className="absolute top-5 right-5"
            color="error"
          >
            <AiOutlineClose />
          </IconButton>
          <div>
            <Image src={moveImage} alt="add blog to move" />
          </div>
          <Typography
            className="text-center max-w-md mt-2 lg:mt-5 leading-7 font-normal"
            color="primary.700"
            variant="h6"
          >
            This blog will be restored by to live blogs. Do you want to proceed?
          </Typography>
          <div className="flex w-full justify-center gap-3 sm:gap-6 mt-4 lg:mt-7">
            <Btn
              loading={loadingRestoreTrashBlog}
              onClick={handleRestoreWeblogFromTrashList}
              size="large"
              className="py-3 px-5 text-white self-stretch bg-primary-700 rounded-lg"
            >
              Proceed
            </Btn>
            <CancelBtn onClick={handleCloseRestoreBlogFromTrashListModal} />
          </div>
        </div>
      </Slide>
    </Modal>
  );
};

export default RestoreBlogFromTrashListModal;
