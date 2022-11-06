import { IconButton, SvgIcon, Typography } from "@mui/material";
import MoveBlogToTrashListModal from "@shared/Modals/MoveBlogToTrashListModal/MoveBlogToTrashListModal";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { BsCursor } from "react-icons/bs";
import { TfiTrash } from "react-icons/tfi";

interface IProps {
  blog: {
    id: number;
    title: string;
    image: StaticImageData;
    blogDescription: string;
  };
}

const ArchiveBlog = ({ blog: { image, blogDescription, title } }: IProps) => {
  const [openMoveBlogToTrashListModal, setOpenMoveBlogToTrashListModal] =
    useState(false);

  const handleOpenMoveBlogToTrashList = () =>
    setOpenMoveBlogToTrashListModal(true);

  return (
    <>
      <div className="flex bg-white flex-col md:flex-row lg:flex-col xl:flex-row shadow-primary rounded-lg px-4 lg:px-6 py-5 lg:py-7 gap-4 items-start">
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
          <IconButton color="primary">
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
        setOpenMoveBlogToTrashListModal={setOpenMoveBlogToTrashListModal}
        openMoveBlogToTrashListModal={openMoveBlogToTrashListModal}
      />
    </>
  );
};

export default ArchiveBlog;
