import { CardMedia, IconButton, SvgIcon, Typography } from "@mui/material";
import { IWeblog } from "interfaces/weblog";
import dynamic from "next/dynamic";
import { Suspense, useState } from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { MdOutlineFolder } from "react-icons/md";
import { TfiTrash } from "react-icons/tfi";
import routes from "routes/routes";

const MoveBlogToArchiveListModal = dynamic(
  () =>
    import(
      "@shared/Modals/MoveBlogToArchiveListModal/MoveBlogToArchiveListModal"
    )
);
const MoveBlogToTrashListModal = dynamic(
  () =>
    import("@shared/Modals/MoveBlogToTrashListModal/MoveBlogToTrashListModal")
);

interface IProps {
  blog: IWeblog;
  blogList: IWeblog[];
}

const LiveBlog = ({
  blog: { _id, title, description, media, slug },
  blogList,
}: IProps) => {
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
        className="flex bg-white flex-col justify-between md:flex-row lg:flex-col xl:flex-row shadow-primary rounded-lg px-4 lg:px-6 py-5 lg:py-7 gap-4 items-start min-h-[155px]"
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
            href={routes.editBlogAdminDashboard.dynamicUrl(slug)}
            color="primary"
          >
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
      <Suspense fallback={null}>
        {openMoveBlogToTrashListModal ? (
          <MoveBlogToTrashListModal
            blogList={blogList}
            weblogId={_id}
            setOpenMoveBlogToTrashListModal={setOpenMoveBlogToTrashListModal}
            openMoveBlogToTrashListModal={openMoveBlogToTrashListModal}
          />
        ) : null}
      </Suspense>
      <Suspense fallback={null}>
        {openMoveBlogToArchiveListModal ? (
          <MoveBlogToArchiveListModal
            blogList={blogList}
            weblogId={_id}
            setOpenMoveBlogToArchiveListModal={
              setOpenMoveBlogToArchiveListModal
            }
            openMoveBlogToArchiveListModal={openMoveBlogToArchiveListModal}
          />
        ) : null}
      </Suspense>
    </>
  );
};

export default LiveBlog;
