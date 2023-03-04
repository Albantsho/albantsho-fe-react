import { Grow, IconButton, Modal, Typography } from "@mui/material";
import Btn from "@shared/Btn/Btn";
import CancelBtn from "@shared/CancelBtn/CancelBtn";
import useWeblogApi from "apis/Weblog.api";
import { IWeblog } from "interfaces/weblog";
import Image from "next/image";
import { useRouter } from "next/router";
import { AiOutlineClose } from "react-icons/ai";
import { QueryClient, useMutation } from "react-query";
import errorHandler from "utils/error-handler";
import Trash from "./assets/trash.png";

interface IProps {
  openDeleteBlogFromTrashListModal: boolean;
  setOpenDeleteBlogFromTrashListModal: React.Dispatch<
    React.SetStateAction<boolean>
  >;
  weblogId: string;
  blogList: IWeblog[];
  refetch: any;
}

const queryClient = new QueryClient();

const DeleteBlogFromTrashListModal = ({
  openDeleteBlogFromTrashListModal,
  setOpenDeleteBlogFromTrashListModal,
  weblogId,
  blogList,
  refetch,
}: IProps) => {
  const { deleteWeblog } = useWeblogApi();
  const { query, push } = useRouter();

  const { mutate: deleteTrashBlog, isLoading: loadingDeleteTrashBlog } =
    useMutation<void, Error, { id: string }>((data) => deleteWeblog(data.id), {
      mutationKey: "weblog",
      onError: (error) => {
        errorHandler(error);
      },
      onSuccess: () => {
        refetch();
        handleCloseDeleteBlogFromTrashListModal();
        if (blogList.length <= 1) {
          push(`?trash=true&page=${+String(query.page) - 1}`, undefined, {
            shallow: true,
          });
        }

        return queryClient.invalidateQueries("weblog");
      },
      retry: true,
    });

  const handleCloseDeleteBlogFromTrashListModal = () =>
    setOpenDeleteBlogFromTrashListModal(false);

  const deleteBlogFromTrashList = () => deleteTrashBlog({ id: weblogId });

  return (
    <Modal
      className="px-5"
      open={openDeleteBlogFromTrashListModal}
      onClose={handleCloseDeleteBlogFromTrashListModal}
    >
      <Grow in={openDeleteBlogFromTrashListModal}>
        <div className="px-6 relative bg-white w-full mt-12 lg:mt-28 max-w-xl lg:max-w-2xl mx-auto flex flex-col items-center py-12 lg:py-24 rounded-lg">
          <IconButton
            onClick={handleCloseDeleteBlogFromTrashListModal}
            className="absolute top-5 right-5"
            color="error"
          >
            <AiOutlineClose />
          </IconButton>
          <div>
            <Image src={Trash} alt="add blog to trash" />
          </div>
          <Typography
            className="text-center max-w-md leading-7 mt-2 lg:mt-5 font-normal"
            color="primary.700"
            variant="h6"
          >
            You will be deleting this file permanently. Do you want to proceed?
          </Typography>
          <div className="flex w-full justify-center gap-3 sm:gap-6 mt-4 lg:mt-7">
            <Btn
              loading={loadingDeleteTrashBlog}
              onClick={deleteBlogFromTrashList}
              size="large"
              className="py-3 px-5 text-white self-stretch bg-primary-700 rounded-lg"
            >
              Proceed
            </Btn>
            <CancelBtn onClick={handleCloseDeleteBlogFromTrashListModal} />
          </div>
        </div>
      </Grow>
    </Modal>
  );
};

export default DeleteBlogFromTrashListModal;
