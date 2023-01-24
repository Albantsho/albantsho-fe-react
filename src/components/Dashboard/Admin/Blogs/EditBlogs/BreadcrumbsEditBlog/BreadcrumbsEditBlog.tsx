import PathIcon from "@assets/icons/path-icon.svg";
import {
  Breadcrumbs,
  IconButton,
  Link,
  SvgIcon,
  Typography,
} from "@mui/material";
import { IWeblog } from "interfaces/weblog";
import dynamic from "next/dynamic";
import { Suspense, useState } from "react";
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
  oneWeblog: IWeblog;
}

const BreadcrumbsEditBlog = ({ oneWeblog }: IProps) => {
  const [openMoveBlogToTrashListModal, setOpenMoveBlogToTrashListModal] =
    useState(false);
  const [openMoveBlogToArchiveListModal, setOpenMoveBlogToArchiveListModal] =
    useState(false);

  const handleOpenMoveBlogToTrashList = () =>
    setOpenMoveBlogToTrashListModal(true);
  const handleOpenMoveBlogToArchiveList = () =>
    setOpenMoveBlogToArchiveListModal(true);

  const breadcrumbs = [
    <Link
      underline="hover"
      key="1"
      color="inherit"
      href={routes.blogsAdminDashboard.url}
      className="text-gray-300 font-normal mr-2 sm:mr-6"
      variant="h5"
    >
      Blogs
    </Link>,
    <Typography
      key="2"
      className="font-normal sm:ml-4"
      variant="h5"
      color="primary.main"
    >
      {oneWeblog.title}
    </Typography>,
  ];

  return (
    <>
      <div className="flex justify-between flex-wrap gap-2">
        <Breadcrumbs
          separator={<SvgIcon fontSize="medium" component={PathIcon} />}
          aria-label="breadcrumb"
        >
          {breadcrumbs}
        </Breadcrumbs>
        <div className="ml-auto flex sm:gap-3 items-center">
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
      {openMoveBlogToTrashListModal ? (
        <Suspense fallback={null}>
          <MoveBlogToTrashListModal
            weblogId={oneWeblog._id}
            setOpenMoveBlogToTrashListModal={setOpenMoveBlogToTrashListModal}
            openMoveBlogToTrashListModal={openMoveBlogToTrashListModal}
          />
        </Suspense>
      ) : null}

      {openMoveBlogToArchiveListModal ? (
        <Suspense fallback={null}>
          <MoveBlogToArchiveListModal
            weblogId={oneWeblog._id}
            setOpenMoveBlogToArchiveListModal={
              setOpenMoveBlogToArchiveListModal
            }
            openMoveBlogToArchiveListModal={openMoveBlogToArchiveListModal}
          />
        </Suspense>
      ) : null}
    </>
  );
};

export default BreadcrumbsEditBlog;
