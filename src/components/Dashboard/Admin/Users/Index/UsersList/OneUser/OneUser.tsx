import { SvgIcon, Typography } from "@mui/material";
import { IUserInformation } from "interfaces/user";
import Link from "next/link";
import { FaUserAlt } from "react-icons/fa";
import { MdNotInterested } from "react-icons/md";
import { SlDislike } from "react-icons/sl";
import routes from "utils/routes";

interface IProps {
  user: IUserInformation;
}

const OneUser = ({
  user: { _id, block, freeze, firstName, lastName, userType },
}: IProps) => {
  return (
    <Link legacyBehavior href={routes.userAdminDashboard.dynamicUrl(`${_id}`)}>
      <div
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        className="rounded-lg w-full min-h-[208px] sm:min-h-min justify-center items-center shadow-primary bg-white p-4 flex sm:items-center flex-col sm:flex-row gap-y-3 cursor-pointer"
      >
        <div className="flex-1 gap-4 flex items-center justify-between sm:justify-start flex-col sm:flex-row">
          <div className="w-12 h-12 flex justify-center items-center bg-tinted-50 rounded-lg">
            <SvgIcon
              fontSize="small"
              inheritViewBox
              className="text-primary-700"
              component={FaUserAlt}
            />
          </div>
          <Typography
            variant="h6"
            className="futura font-medium text-primary-700 sm:w-64 leading-none"
          >
            {firstName} {lastName}
          </Typography>
          <Typography
            variant="h6"
            className="futura font-medium text-primary-700  leading-none text-center sm:text-start min-w-[80px]"
          >
            {userType}
          </Typography>
        </div>
        <div className="flex sm:justify-end gap-2 flex-col sm:flex-row">
          {block && (
            <SvgIcon
              fontSize="small"
              className="text-error-700"
              inheritViewBox
              component={MdNotInterested}
            />
          )}
          {freeze && (
            <SvgIcon
              fontSize="small"
              className="text-primary-700"
              inheritViewBox
              component={SlDislike}
            />
          )}
        </div>
      </div>
    </Link>
  );
};

export default OneUser;
