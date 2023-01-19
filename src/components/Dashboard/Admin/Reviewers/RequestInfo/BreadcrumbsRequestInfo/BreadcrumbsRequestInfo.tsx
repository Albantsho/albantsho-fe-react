import { Breadcrumbs, Link, SvgIcon, Typography } from "@mui/material";
import PathIcon from "@assets/icons/path-icon.svg";
import routes from "routes/routes";

interface IProps {
  title?: string;
}

const BreadcrumbsRequestInfo = ({ title }: IProps) => {
  const breadcrumbs = [
    <Link
      underline="hover"
      key="1"
      color="inherit"
      href={routes.reviewersAdminDashboard.url}
      className="text-gray-300 font-normal mr-2 sm:mr-6"
      variant="h5"
    >
      Current requests
    </Link>,
    <Typography
      key="2"
      className="font-normal sm:ml-4 leading-normal"
      variant="h5"
      color="primary.main"
    >
      {title ? title : ""}
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

export default BreadcrumbsRequestInfo;
