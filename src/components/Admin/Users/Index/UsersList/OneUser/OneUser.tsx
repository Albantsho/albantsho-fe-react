import { SvgIcon, Typography } from "@mui/material";
import Link from "next/link";
import { FaUserAlt } from "react-icons/fa";
import { MdNotInterested } from "react-icons/md";
import { SlDislike } from "react-icons/sl";
import routes from "routes/routes";

interface IProps {
  user: {
    id: number;
    name: string;
    role: string;
    status?: "Freeze" | "Block" | undefined;
  };
}

const OneUser = ({ user: { name, role, status, id } }: IProps) => {
  return (
    <Link href={routes.userAdminDashboard(`${id}`)} passHref>
      <a>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          className="rounded-lg w-full min-h-[180px] sm:min-h-min justify-center items-center shadow-primary bg-white p-4 flex sm:items-center flex-col sm:flex-row gap-y-3"
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
              {name}
            </Typography>
            <Typography
              variant="h6"
              className="futura font-medium text-primary-700  leading-none text-center sm:text-start min-w-[80px]"
            >
              {role}
            </Typography>
          </div>
          <div className="flex sm:justify-end">
            {status === "Block" ? (
              <SvgIcon
                fontSize="small"
                className="text-error-700"
                inheritViewBox
                component={MdNotInterested}
              />
            ) : status === "Freeze" ? (
              <SvgIcon
                fontSize="small"
                className="text-primary-700"
                inheritViewBox
                component={SlDislike}
              />
            ) : (
              ""
            )}
          </div>
        </div>
      </a>
    </Link>
  );
};

export default OneUser;