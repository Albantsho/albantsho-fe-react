import { IconButton, Modal, Slide, Typography } from "@mui/material";
import Btn from "@shared/Btn/Btn";
import CancelBtn from "@shared/CancelBtn/CancelBtn";
import useWeblogApi from "apis/Weblog.api";
import { IWeblog } from "interfaces/weblog";
import Image from "next/image";
import { useRouter } from "next/router";
import { AiOutlineClose } from "react-icons/ai";
import { QueryClient, useMutation } from "react-query";
import routes from "routes/routes";
import errorHandler from "utils/error-handler";
import moveImage from "./assets/move-image.png";

interface IProps {
  openMoveBlogToArchiveListModal: boolean;
  setOpenMoveBlogToArchiveListModal: React.Dispatch<
    React.SetStateAction<boolean>
  >;
  weblogId: string;
  blogList?: IWeblog[];
}

const queryClient = new QueryClient();

const MoveBlogToArchiveListModal = ({
  openMoveBlogToArchiveListModal,
  setOpenMoveBlogToArchiveListModal,
  weblogId,
  blogList,
}: IProps) => {
  const { updateWeblog } = useWeblogApi();
  const { query, push } = useRouter();

  const { mutate: moveBlogToArchive, isLoading: loadingMoveBlogToArchive } =
    useMutation<void, Error, { archive: boolean; id: string }>(
      (data) => updateWeblog({ archive: data.archive }, data.id),
      {
        onError: (error) => {
          errorHandler(error);
        },
        onSuccess: () => {
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
          queryClient.invalidateQueries("weblog");
          setOpenMoveBlogToArchiveListModal(false);
          if (query.slug) push(routes.blogsAdminDashboard.url);
        },
      }
    );

  const handleCloseMoveBlogToArchiveListModal = () =>
    setOpenMoveBlogToArchiveListModal(false);

  const handleMoveBlogToArchiveList = async () =>
    moveBlogToArchive({ archive: true, id: weblogId });

  return (
    <Modal
      className="px-5"
      open={openMoveBlogToArchiveListModal}
      onClose={handleCloseMoveBlogToArchiveListModal}
    >
      <Slide
        direction="up"
        in={openMoveBlogToArchiveListModal}
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
            You’ll be archiving this post. Do you want to proceed?
          </Typography>
          <div className="flex w-full justify-center gap-3 sm:gap-6 mt-4 lg:mt-7">
            <Btn
              loading={loadingMoveBlogToArchive}
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

export default MoveBlogToArchiveListModal;
