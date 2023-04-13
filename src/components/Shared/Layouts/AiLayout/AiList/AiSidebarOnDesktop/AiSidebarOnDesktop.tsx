import {
  Drawer,
  IconButton,
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
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { GiSecretBook } from "react-icons/gi";
import { MdDescription } from "react-icons/md";
import routes from "routes/routes";

const routesArray = [
  {
    route: routes.aiWritingScript.url,
    title: "Write script",
    icon: MdDescription,
  },
  {
    route: routes.aiWritingStory.url,
    title: "Write story",
    icon: GiSecretBook,
  },
];

const drawerWidth = 340;

const AiSidebarOnDesktop = () => {
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
        <Logo color="primary" className="text-white ml-3 mb-5" />

        <List className="space-y-4 h-full">
          {routesArray.map((item) => (
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
                  <ListItemIcon className="text-white">
                    <SvgIcon inheritViewBox component={item.icon} />
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

export default AiSidebarOnDesktop;
