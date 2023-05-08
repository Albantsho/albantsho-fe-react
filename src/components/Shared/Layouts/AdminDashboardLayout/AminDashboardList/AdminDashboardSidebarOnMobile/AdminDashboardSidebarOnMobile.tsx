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
import NFTIcon from "@assets/icons/mini-logo.svg";
import { MdOutlineContactSupport } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";

const listRoutes = [
  { route: routes.blogsAdminDashboard.url, title: "Blogs", icon: BlogIcon },
  { route: routes.usersAdminDashboard.url, title: "Users", icon: UserIcon },
  {
    route: routes.reviewersAdminDashboard.url,
    title: "Reviews",
    icon: StarIcon,
  },
  {
    route: routes.nftAdminDashboard.url,
    title: "NFT",
    icon: NFTIcon,
  },
  {
    route: routes.contactsAdminDashboard.url,
    title: "Contacts",
    icon: MdOutlineContactSupport,
  },
  {
    route: routes.withdrawsAdminDashboard.url,
    title: "Withdraws",
    icon: GiReceiveMoney,
  },
];

const AdminDashboardSidebarOnMobile = () => {
  const [activeRoute, setActiveRoute] = useState(0);
  const { push, route } = useRouter();

  return (
    <BottomNavigation
      showLabels
      value={activeRoute}
      className="bg-primary-900 w-full min-h-[65px] flex justify-between text-white sm:px-8 no-scrollbar lg:hidden"
      sx={{
        "&.MuiBottomNavigation-root": { overflow: "scroll" },
        overflow: "scroll",
      }}
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
                minWidth: 65,
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
              listRoute.route === route && "bg-primary-700"
            } sm:max-w-full`}
            label={listRoute.title}
            icon={<SvgIcon component={listRoute.icon} inheritViewBox />}
          />
        );
      })}
    </BottomNavigation>
  );
};

export default AdminDashboardSidebarOnMobile;
