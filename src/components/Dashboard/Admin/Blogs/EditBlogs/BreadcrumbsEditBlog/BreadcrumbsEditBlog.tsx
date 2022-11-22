import PathIcon from "@assets/icons/path-icon.svg";
import {
  Breadcrumbs,
  IconButton,
  Link,
  SvgIcon,
  Typography,
} from "@mui/material";
import MoveBlogToArchiveListModal from "@shared/Modals/MoveBlogToArchiveListModal/MoveBlogToArchiveListModal";
import MoveBlogToTrashListModal from "@shared/Modals/MoveBlogToTrashListModal/MoveBlogToTrashListModal";
import { IWeblog } from "interfaces/weblog";
import { useState } from "react";
import { MdOutlineFolder } from "react-icons/md";
import { TfiTrash } from "react-icons/tfi";

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
      href="/admin/blogs"
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
      <MoveBlogToTrashListModal
        weblogId={oneWeblog._id}
        setOpenMoveBlogToTrashListModal={setOpenMoveBlogToTrashListModal}
        openMoveBlogToTrashListModal={openMoveBlogToTrashListModal}
      />
      <MoveBlogToArchiveListModal
        weblogId={oneWeblog._id}
        setOpenMoveBlogToArchiveListModal={setOpenMoveBlogToArchiveListModal}
        openMoveBlogToArchiveListModal={openMoveBlogToArchiveListModal}
      />
    </>
  );
};

export default BreadcrumbsEditBlog;
