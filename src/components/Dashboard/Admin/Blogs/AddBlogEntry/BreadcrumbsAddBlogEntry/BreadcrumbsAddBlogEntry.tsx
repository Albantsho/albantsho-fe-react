import PathIcon from "@assets/icons/path-icon.svg";
import { Breadcrumbs, Link, SvgIcon, Typography } from "@mui/material";
import routes from "routes/routes";

const BreadcrumbsAddBlogEntry = () => {
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
      New Blog
    </Typography>,
  ];

  return (
    <div>
      <Breadcrumbs
        separator={<SvgIcon fontSize="medium" component={PathIcon} />}
        aria-label="breadcrumb"
      >
        {breadcrumbs}
      </Breadcrumbs>
    </div>
  );
};

export default BreadcrumbsAddBlogEntry;
