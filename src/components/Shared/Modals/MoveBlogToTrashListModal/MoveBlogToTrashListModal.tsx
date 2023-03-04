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
  openMoveBlogToTrashListModal: boolean;
  setOpenMoveBlogToTrashListModal: React.Dispatch<
    React.SetStateAction<boolean>
  >;
  weblogId: string;
  blogList?: IWeblog[];
}

const queryClient = new QueryClient();

const MoveBlogToTrashListModal = ({
  openMoveBlogToTrashListModal,
  setOpenMoveBlogToTrashListModal,
  weblogId,
  blogList,
}: IProps) => {
  const { updateWeblog } = useWeblogApi();
  const { query, push } = useRouter();

  const { mutate: moveBlogToTrash, isLoading: loadingMoveBlogToTrash } =
    useMutation<void, Error, { trash: boolean; id: string }>(
      (data) => updateWeblog({ trash: data.trash }, data.id),
      {
        onError: (error) => {
          errorHandler(error);
        },

        onSuccess: () => {
          setOpenMoveBlogToTrashListModal(false);
          queryClient.invalidateQueries("weblog");
          if (blogList && blogList.length <= 1) {
            query.archive
              ? push(
                  `?archive=true&page=${+String(query.page) - 1}`,
                  undefined,
                  {
                    shallow: true,
                  }
                )
              : query.trash
              ? push(`?trash=true&page=${+String(query.page) - 1}`, undefined, {
                  shallow: true,
                })
              : push(`?page=${+String(query.page) - 1}`, undefined, {
                  shallow: true,
                });
          }
        },
      }
    );

  const handleCloseMoveBlogToTrashListModal = () =>
    setOpenMoveBlogToTrashListModal(false);

  const handleMoveBlogToTrashList = async () =>
    moveBlogToTrash({ id: weblogId, trash: true });

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
              loading={loadingMoveBlogToTrash}
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
