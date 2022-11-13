import { IconButton, SvgIcon, Typography } from "@mui/material";
import MoveBlogToArchiveListModal from "@shared/Modals/MoveBlogToArchiveListModal/MoveBlogToArchiveListModal";
import MoveBlogToTrashListModal from "@shared/Modals/MoveBlogToTrashListModal/MoveBlogToTrashListModal";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { MdOutlineFolder } from "react-icons/md";
import { TfiTrash } from "react-icons/tfi";

interface IProps {
  blog: {
    id: number;
    title: string;
    image: StaticImageData;
    blogDescription: string;
  };
}

const LiveBlog = ({ blog: { image, blogDescription, title } }: IProps) => {
  const [openMoveBlogToTrashListModal, setOpenMoveBlogToTrashListModal] =
    useState(false);
  const [openMoveBlogToArchiveListModal, setOpenMoveBlogToArchiveListModal] =
    useState(false);

  const handleOpenMoveBlogToTrashList = () =>
    setOpenMoveBlogToTrashListModal(true);
  const handleOpenMoveBlogToArchiveList = () =>
    setOpenMoveBlogToArchiveListModal(true);

  return (
    <>
      <div
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        className="flex bg-white flex-col md:flex-row lg:flex-col xl:flex-row shadow-primary rounded-lg px-4 lg:px-6 py-5 lg:py-7 gap-4 items-start"
      >
        <div className="flex gap-3 lg:gap-6">
          <div className="max-w-[76px] rounded-md w-full flex max-h-[76px] bg-tinted-50/50 justify-center items-center">
            <Image width={27} height={34} src={image} alt={title} />
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
              {blogDescription}
            </Typography>
          </div>
        </div>
        <div className="ml-auto flex md:self-start lg:self-center xl:self-start gap-3 md:gap-1">
          <IconButton href="/admin/blogs/edit-blog/2" color="primary">
            <SvgIcon
              inheritViewBox
              fontSize="medium"
              className="text-primary-700"
              component={AiOutlineEdit}
            />
          </IconButton>
          <IconButton onClick={handleOpenMoveBlogToArchiveList} color="primary">
            <SvgIcon
              inheritViewBox
              fontSize="medium"
              className="text-primary-700"
              component={MdOutlineFolder}
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
        weblogId={"weblogId"}
        setOpenMoveBlogToTrashListModal={setOpenMoveBlogToTrashListModal}
        openMoveBlogToTrashListModal={openMoveBlogToTrashListModal}
      />
      <MoveBlogToArchiveListModal
        weblogId={"weblogId"}
        setOpenMoveBlogToArchiveListModal={setOpenMoveBlogToArchiveListModal}
        openMoveBlogToArchiveListModal={openMoveBlogToArchiveListModal}
      />
    </>
  );
};

export default LiveBlog;
