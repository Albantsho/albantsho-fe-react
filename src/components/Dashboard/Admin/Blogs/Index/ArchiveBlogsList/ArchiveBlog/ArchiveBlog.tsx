import { IconButton, SvgIcon, Typography } from "@mui/material";
import MoveBlogToTrashListModal from "@shared/Modals/MoveBlogToTrashListModal/MoveBlogToTrashListModal";
import { IWeblog } from "interfaces/weblog";
import Image from "next/image";
import { Dispatch, SetStateAction, useState } from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { BsCursor } from "react-icons/bs";
import { TfiTrash } from "react-icons/tfi";
import routes from "routes/routes";
import RestoreBlogFromArchiveListModal from "../Modals/RestoreBlogFromArchiveListModal/RestoreBlogFromArchiveListModal";

interface IProps {
  blog: IWeblog;
  setBlogList: Dispatch<SetStateAction<IWeblog[]>>;
}

const ArchiveBlog = ({
  blog: { media, description, title, _id },
  setBlogList,
}: IProps) => {
  const [openMoveBlogToTrashListModal, setOpenMoveBlogToTrashListModal] =
    useState(false);
  const [
    openRestoreBlogFromArchiveListModal,
    setRestoreBlogFromArchiveListModal,
  ] = useState(false);

  const handleOpenMoveBlogToTrashList = () =>
    setOpenMoveBlogToTrashListModal(true);
  const handleOpenRestoreBlogFromTrashList = () =>
    setRestoreBlogFromArchiveListModal(true);

  return (
    <>
      <div
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        className="flex bg-white flex-col md:flex-row lg:flex-col xl:flex-row shadow-primary rounded-lg px-4 lg:px-6 py-5 lg:py-7 gap-4 items-start"
      >
        <div className="flex gap-3 lg:gap-6">
          <Image
            className="rounded-lg min-h-[76px]"
            width={76}
            height={76}
            src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${media}`}
            alt={title}
          />
          <div className="sm:max-w-xl sm:w-full leading-none">
            <Typography
              gutterBottom
              variant="h6"
              className="text-primary-700 futura font-medium leading-none"
            >
              {title}
            </Typography>
            <Typography variant="caption" className="leading-4">
              {description}
            </Typography>
          </div>
        </div>
        <div className="ml-auto flex md:self-start lg:self-center xl:self-start gap-3 md:gap-1">
          <IconButton
            href={routes.editBlogAdminDashboard.dynamicUrl(_id)}
            color="primary"
          >
            <SvgIcon
              inheritViewBox
              fontSize="medium"
              className="text-primary-700"
              component={AiOutlineEdit}
            />
          </IconButton>
          <IconButton
            onClick={handleOpenRestoreBlogFromTrashList}
            color="primary"
          >
            <SvgIcon
              inheritViewBox
              fontSize="medium"
              className="text-primary-700"
              component={BsCursor}
            />
          </IconButton>
          <IconButton onClick={handleOpenMoveBlogToTrashList} color="primary">
            <SvgIcon
              inheritViewBox
              fontSize="medium"
              className="text-primary-700"
              component={TfiTrash}
            />
          </IconButton>
        </div>
      </div>
      <MoveBlogToTrashListModal
        setBlogList={setBlogList}
        weblogId={_id}
        setOpenMoveBlogToTrashListModal={setOpenMoveBlogToTrashListModal}
        openMoveBlogToTrashListModal={openMoveBlogToTrashListModal}
      />
      <RestoreBlogFromArchiveListModal
        setBlogList={setBlogList}
        weblogId={_id}
        setRestoreBlogFromArchiveListModal={setRestoreBlogFromArchiveListModal}
        openRestoreBlogFromArchiveListModal={
          openRestoreBlogFromArchiveListModal
        }
      />
    </>
  );
};

export default ArchiveBlog;
