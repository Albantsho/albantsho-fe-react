import { CardMedia, IconButton, SvgIcon, Typography } from "@mui/material";
import { IWeblog } from "interfaces/weblog";
import dynamic from "next/dynamic";
import { Suspense, useState } from "react";
import { TfiTrash } from "react-icons/tfi";
import RefreshIcon from "./assets/refresh-icon.svg";

const DeleteBlogFromTrashListModal = dynamic(
  () =>
    import(
      "../Modals/DeleteBlogFromTrashListModal/DeleteBlogFromTrashListModal"
    )
);
const RestoreBlogFromTrashListModal = dynamic(
  () =>
    import(
      "../Modals/RestoreBlogFromTrashListModal/RestoreBlogFromTrashListModal"
    )
);

interface IProps {
  blog: IWeblog;
  blogList: IWeblog[];
}

const TrashBlog = ({
  blog: { media, description, title, _id },
  blogList,
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
        className="flex bg-white flex-col md:flex-row justify-between lg:flex-col xl:flex-row shadow-primary rounded-lg px-4 lg:px-6 py-5 lg:py-7 gap-4 items-start min-h-[155px]"
      >
        <div className="flex gap-3 lg:gap-6">
          <CardMedia
            component="img"
            loading="lazy"
            className="rounded-lg h-[76px] min-w-[76px] w-[76px]"
            width={76}
            height={76}
            src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${media}`}
            alt={title}
          />

          <div className="sm:max-w-xl sm:w-full leading-none">
            <Typography
              gutterBottom
              variant="h6"
              className="text-primary-700 futura font-medium leading-none break-words"
            >
              {title}
            </Typography>
            <Typography variant="caption" className="leading-4">
              {description.slice(0, 350)}
              {description.length >= 350 && "..."}
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
      <Suspense fallback={null}>
        {openDeleteBlogFromTrashListModal ? (
          <DeleteBlogFromTrashListModal
            key={_id}
            weblogId={_id}
            blogList={blogList}
            setOpenDeleteBlogFromTrashListModal={
              setOpenDeleteBlogFromTrashListModal
            }
            openDeleteBlogFromTrashListModal={openDeleteBlogFromTrashListModal}
          />
        ) : null}
      </Suspense>
      <Suspense fallback={null}>
        {openRestoreBlogFromTrashListModal ? (
          <RestoreBlogFromTrashListModal
            key={_id}
            weblogId={_id}
            blogList={blogList}
            setOpenRestoreBlogFromTrashListModal={
              setOpenRestoreBlogFromTrashListModal
            }
            openRestoreBlogFromTrashListModal={
              openRestoreBlogFromTrashListModal
            }
          />
        ) : null}
      </Suspense>
    </>
  );
};

export default TrashBlog;
