import { IconButton, SvgIcon, Typography } from "@mui/material";
import { IWeblog } from "interfaces/weblog";
import Image from "next/image";
import { Dispatch, SetStateAction, useState } from "react";
import { TfiTrash } from "react-icons/tfi";
import DeleteBlogFromTrashListModal from "../Modals/DeleteBlogFromTrashListModal/DeleteBlogFromTrashListModal";
import RestoreBlogFromTrashListModal from "../Modals/RestoreBlogFromTrashListModal/RestoreBlogFromTrashListModal";
import RefreshIcon from "./assets/refresh-icon.svg";

interface IProps {
  blog: IWeblog;
  setTrashBlogList: Dispatch<SetStateAction<IWeblog[]>>;
}

const TrashBlog = ({
  blog: { media, description, title, _id },
  setTrashBlogList,
}: IProps) => {
  const [
    openDeleteBlogFromTrashListModal,
    setOpenDeleteBlogFromTrashListModal,
  ] = useState(false);
  const [
    openRestoreBlogFromTrashListModal,
    setOpenRestoreBlogFromTrashListModal,
  ] = useState(false);

  const handleOpenDeleteBlogFromTrashListModal = () =>
    setOpenDeleteBlogFromTrashListModal(true);

  const handleOpenRestoreBlogFromTrashListModal = () =>
    setOpenRestoreBlogFromTrashListModal(true);

  return (
    <>
      <div
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        className="flex bg-white flex-col md:flex-row lg:flex-col xl:flex-row shadow-primary rounded-lg px-4 lg:px-6 py-5 lg:py-7 gap-4 items-start"
      >
        <div className="flex gap-3 lg:gap-6">
          <div className="min-w-[76px] rounded-md flex h-[76px]  bg-tinted-50/50 justify-center items-center">
            <Image
              width={27}
              height={34}
              src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${media}`}
              alt={title}
            />
          </div>
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
            onClick={handleOpenRestoreBlogFromTrashListModal}
            color="primary"
          >
            <SvgIcon
              inheritViewBox
              fontSize="medium"
              className="text-primary-700 rotate-180"
              component={RefreshIcon}
            />
          </IconButton>
          <IconButton
            onClick={handleOpenDeleteBlogFromTrashListModal}
            color="primary"
          >
            <SvgIcon
              inheritViewBox
              fontSize="medium"
              className="text-primary-700"
              component={TfiTrash}
            />
          </IconButton>
        </div>
      </div>
      <DeleteBlogFromTrashListModal
        setTrashBlogList={setTrashBlogList}
        weblogId={_id}
        setOpenDeleteBlogFromTrashListModal={
          setOpenDeleteBlogFromTrashListModal
        }
        openDeleteBlogFromTrashListModal={openDeleteBlogFromTrashListModal}
      />
      <RestoreBlogFromTrashListModal
        setTrashBlogList={setTrashBlogList}
        weblogId={_id}
        setOpenRestoreBlogFromTrashListModal={
          setOpenRestoreBlogFromTrashListModal
        }
        openRestoreBlogFromTrashListModal={openRestoreBlogFromTrashListModal}
      />
    </>
  );
};

export default TrashBlog;
