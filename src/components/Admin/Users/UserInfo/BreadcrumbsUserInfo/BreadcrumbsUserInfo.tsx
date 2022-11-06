import { Breadcrumbs, Link, SvgIcon, Typography } from "@mui/material";
import PathIcon from "@assets/icons/path-icon.svg";

interface IProps {
  name?: string;
}

const BreadcrumbsUserInfo = ({ name }: IProps) => {
  const breadcrumbs = [
    <Link
      underline="hover"
      key="1"
      color="inherit"
      href="/admin/users"
      className="text-gray-300 font-normal mr-2 sm:mr-6"
      variant="h5"
    >
      User List
    </Link>,
    <Typography
      key="2"
      className="font-normal sm:ml-4"
      variant="h5"
      color="primary.main"
    >
      {name ? name : ""}
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

export default BreadcrumbsUserInfo;
