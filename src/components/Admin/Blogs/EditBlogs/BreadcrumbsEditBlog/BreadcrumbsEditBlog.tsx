import {
  Breadcrumbs,
  IconButton,
  Link,
  SvgIcon,
  Typography,
} from "@mui/material";
import { CiFolderOn } from "react-icons/ci";
import { TfiTrash } from "react-icons/tfi";
import PathIcon from "../../assets/path-icon.svg";

function handleClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

const BreadcrumbsEditBlog = () => {
  const breadcrumbs = [
    <Link
      underline="hover"
      key="1"
      color="inherit"
      href="/admin/blogs"
      onClick={handleClick}
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
      Edit Blog
    </Typography>,
  ];

  return (
    <div className="flex justify-between flex-wrap gap-2">
      <Breadcrumbs
        separator={<SvgIcon fontSize="medium" component={PathIcon} />}
        aria-label="breadcrumb"
      >
        {breadcrumbs}
      </Breadcrumbs>
      <div className="ml-auto flex md:self-start lg:self-center xl:self-start">
        <IconButton color="primary">
          <SvgIcon
            inheritViewBox
            fontSize="medium"
            className="text-primary-700"
            component={CiFolderOn}
          />
        </IconButton>
        <IconButton color="primary">
          <SvgIcon
            inheritViewBox
            fontSize="medium"
            className="text-primary-700"
            component={TfiTrash}
          />
        </IconButton>
      </div>
    </div>
  );
};

export default BreadcrumbsEditBlog;
