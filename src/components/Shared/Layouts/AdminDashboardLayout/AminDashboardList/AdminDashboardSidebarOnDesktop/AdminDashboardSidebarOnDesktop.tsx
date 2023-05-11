import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  SvgIcon,
} from "@mui/material";
import Logo from "@shared/Logo/Logo";
import Link from "next/link";
import { useRouter } from "next/router";
import routes from "utils/routes";
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

const drawerWidth = 340;

const AdminDashboardSidebarOnDesktop = () => {
  const { route } = useRouter();
  return (
    <div
      data-aos="fade-right"
      data-aos-duration="300"
      className="min-h-screen bg-primary-900"
    >
      <Drawer
        className="min-h-screen"
        sx={{
          width: drawerWidth,
          "& .MuiDrawer-paper": {
            minHeight: "100vh",
            width: drawerWidth,
            boxSizing: "border-box",
            backgroundColor: "#573195",
            padding: "38px 20px",
            color: "#fff",
            position: "sticky",
            top: 0,
            display: { xs: "none", lg: "flex" },
            flexDirection: "column",
          },
          minHeight: "100vh",
          position: "sticky",
          top: 0,
          backgroundColor: "#573195",
          display: { xs: "none", lg: "flex" },
          flexDirection: "column",
        }}
        variant="permanent"
        anchor="left"
      >
        <Logo color="primary" className="text-white ml-3 mb-14" />

        <List className="space-y-4 h-full">
          {listRoutes.map((listRoute) => (
            <ListItem
              disablePadding
              key={listRoute.title}
              sx={{
                "&:hover": {
                  backgroundColor: "#6842A5",
                },
              }}
              className={`${
                listRoute.route === route &&
                "border-l-4 border-secondary-500 bg-primary-700"
              } rounded-sm`}
            >
              <Link
                legacyBehavior
                className="text-white"
                href={`${listRoute.route}`}
                passHref
              >
                <ListItemButton
                  sx={{
                    "&:hover": {
                      backgroundColor: "#6842A5",
                    },
                    "&.MuiButtonBase-root": {
                      px: 4,
                      py: 2,
                    },
                  }}
                >
                  <ListItemIcon>
                    <SvgIcon
                      component={listRoute.icon}
                      className="text-white"
                      inheritViewBox
                    />
                  </ListItemIcon>
                  <ListItemText primary={listRoute.title} />
                </ListItemButton>
              </Link>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
};

export default AdminDashboardSidebarOnDesktop;
