import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import Logo from "@shared/Logo/Logo";
import useUserStore from "app/user.store";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import routes from "routes/routes";
import listings from "../assets/listings.png";
import projects from "../assets/projects.png";
import reviews from "../assets/reviews.png";
import scripts from "../assets/scripts.png";

const listRoutes = [
  { route: routes.projectsDashboard, title: "Projects", icon: projects },
  { route: routes.listingsDashboard, title: "Listings", icon: listings },
  { route: routes.reviewsDashboard, title: "Reviews", icon: reviews },
];

const listRoutes2 = [
  { route: routes.scriptsDashboard, title: "Scripts", icon: scripts },
];

const drawerWidth = 340;

const DashboardSidebarOnDesktop = () => {
  const { route } = useRouter();
  const user = useUserStore((state) => state.user);

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
        <Logo color="primary" className="text-white ml-3 mb-5" />

        <List className="space-y-4 h-full">
          {user.user_type === "writer" &&
            listRoutes.map((item) => (
              <ListItem
                disablePadding
                key={item.title}
                sx={{
                  "&:hover": {
                    backgroundColor: "#6842A5",
                  },
                }}
                className={`${
                  item.route === route &&
                  "border-l-4 border-secondary-500 bg-primary-700"
                } rounded-sm`}
              >
                <Link
                  legacyBehavior
                  className="text-white"
                  href={`${item.route}`}
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
                      <Image loading="lazy" src={item.icon} alt={item.title} />
                    </ListItemIcon>
                    <ListItemText primary={item.title} />
                  </ListItemButton>
                </Link>
              </ListItem>
            ))}
          {user.user_type === "producer" &&
            listRoutes2.map((item) => (
              <ListItem
                disablePadding
                key={item.title}
                sx={{
                  "&:hover": {
                    backgroundColor: "#6842A5",
                  },
                }}
                className={`${
                  item.route === route &&
                  "border-l-4 border-secondary-500 bg-primary-700"
                } rounded-sm`}
              >
                <Link
                  legacyBehavior
                  className="text-white"
                  href={`${item.route}`}
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
                      <Image loading="lazy" src={item.icon} alt={item.title} />
                    </ListItemIcon>
                    <ListItemText primary={item.title} />
                  </ListItemButton>
                </Link>
              </ListItem>
            ))}
        </List>
        <div className="mt-auto self-center text-white hidden lg:flex gap-6  justify-start pt-3">
          <IconButton
            href="https://www.twitter.com/albantsho"
            target="_blank"
            color="inherit"
            sx={{
              "&.MuiButtonBase-root": {
                border: "1px solid #fff",
                borderRadius: "100%",
                width: "32px",
                height: "32px",
              },
            }}
          >
            <FaTwitter />
          </IconButton>
          <IconButton
            href="https://www.facebook.com/albantsho"
            target="_blank"
            color="inherit"
            sx={{
              "&.MuiButtonBase-root": {
                border: "1px solid #fff",
                borderRadius: "100%",
                width: "32px",
                height: "32px",
              },
            }}
          >
            <FaFacebookF className="p-[2px]" />
          </IconButton>
          <IconButton
            href="https://www.instagram.com/albantsho/"
            target="_blank"
            color="inherit"
            sx={{
              "&.MuiButtonBase-root": {
                border: "1px solid #fff",
                borderRadius: "100%",
                width: "32px",
                height: "32px",
              },
            }}
          >
            <AiFillInstagram />
          </IconButton>
        </div>
      </Drawer>
    </div>
  );
};

export default DashboardSidebarOnDesktop;
