import {
  BottomNavigation,
  BottomNavigationAction,
  SvgIcon,
} from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";
import routes from "routes/routes";
import BlogIcon from "../assets/blog-icon.svg";
import StarIcon from "../assets/star-icon.svg";
import UserIcon from "../assets/user-icon.svg";

const listRoutes = [
  { route: routes.blogsAdminDashboard.url, title: "Blogs", icon: BlogIcon },
  { route: routes.usersAdminDashboard.url, title: "Users", icon: UserIcon },
  {
    route: routes.reviewersAdminDashboard.url,
    title: "Reviews",
    icon: StarIcon,
  },
];

const AdminDashboardSidebarOnMobile = () => {
  const [activeRoute, setActiveRoute] = useState(0);
  const { push, route } = useRouter();

  return (
    <div className=" lg:hidden">
      <BottomNavigation
        showLabels
        value={activeRoute}
        className="bg-primary-900 w-full min-h-[65px] flex justify-evenly text-white sm:px-8"
        onChange={(event, newValue) => {
          setActiveRoute(newValue);
        }}
      >
        {listRoutes.map((listRoute) => {
          return (
            <BottomNavigationAction
              key={listRoute.title}
              onClick={() => push(`${listRoute.route}`)}
              showLabel
              sx={{
                "&:hover": {
                  backgroundColor: "#6842A5",
                },
                "&.MuiButtonBase-root": {
                  color: "white",
                },
                gap: 0.5,
                py: 1,
                borderBottom: `${
                  listRoute.route === route && "4px solid #FDDC6A"
                }`,
                "&.Mui-selected": {
                  borderBottom: `${
                    listRoute.route === route && "4px solid #FDDC6A"
                  }`,
                },
              }}
              className={`${
                listRoute.route === route && " bg-primary-700"
              } sm:max-w-full`}
              label={listRoute.title}
              icon={<SvgIcon component={listRoute.icon} />}
            />
          );
        })}
      </BottomNavigation>
    </div>
  );
};

export default AdminDashboardSidebarOnMobile;
