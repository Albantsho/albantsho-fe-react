import MiniLogo from "@assets/icons/mini-logo.svg";
import {
  Divider,
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
import { useState } from "react";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import routes from "routes/routes";
import Comment from "../assets/comment.svg";
import Document from "../assets/document.svg";
import Export from "../assets/export.svg";
import Scenes from "../assets/scenes.svg";

const listRoutes1 = [
  { route: "?tab=scenes", title: "Scenes", icon: Scenes, value: 1 },
  { route: "?tab=comment", title: "Comment", icon: Comment, value: 2 },
];
const listRoutes2 = [
  { route: "?tab=export", title: "Export", icon: Export, value: 3 },
  { route: "?tab=document", title: "Document", icon: Document, value: 4 },
];

const drawerWidth = 340;

const ScriptSidebarOnDesktop = () => {
  const { query, push } = useRouter();
  const [openCompleteDrawer, setOpenCompleteDrawer] = useState(true);

  const handleOpenCompleteDrawer = (value: number, route: string) => () => {
    if (query.tab !== route.split("=")[1]) {
      push(route);
      setOpenCompleteDrawer(false);
      return;
    }
    if (query.tab === route.split("=")[1]) {
      setOpenCompleteDrawer((prevState) => !prevState);
      push("/script");
      return;
    }
  };

  return (
    <div
      data-aos="fade-right"
      data-aos-duration="300"
      className="min-h-screen bg-primary-900 overflow-hidden"
    >
      <Drawer
        sx={{
          width: openCompleteDrawer ? drawerWidth : 120,
          transition: "all 0.4s ease-in",
          overflow: "hidden",
          "& .MuiDrawer-paper": {
            width: openCompleteDrawer ? drawerWidth : 120,
            boxSizing: "border-box",
            backgroundColor: "#573195",
            padding: "38px 20px",
            color: "#fff",
            position: "sticky",
            top: 0,
            display: { xs: "none", lg: "block" },
            border: "none",
          },
          position: "sticky",
          top: 0,
          backgroundColor: "#573195",
          display: { xs: "none", lg: "block" },
        }}
        variant="permanent"
        anchor="left"
      >
        {openCompleteDrawer ? (
          <Logo color="primary" className="text-white ml-3 mb-5" />
        ) : (
          <Link href={`${routes.home}`} passHref>
            <a>
              <SvgIcon
                component={MiniLogo}
                className="text-white ml-6 mb-8"
                inheritViewBox
                fontSize="large"
              />
            </a>
          </Link>
        )}
        <List className="">
          {listRoutes1.map((item) => (
            <ListItem
              disablePadding
              key={item.title}
              sx={{
                "&:hover": {
                  backgroundColor: "#6842A5",
                },
                width: !openCompleteDrawer ? "72px" : "100%",
                height: !openCompleteDrawer ? "72px" : "100%",
                boxSizing: "content-box",
              }}
              className={`${
                item.route.split("=")[1] === query.tab &&
                "border-l-4 border-secondary-500 bg-primary-700"
              } rounded-sm mb-4`}
            >
              <ListItemButton
                onClick={handleOpenCompleteDrawer(item.value, item.route)}
                sx={{
                  "&:hover": {
                    backgroundColor: "#6842A5",
                  },
                  "&.MuiButtonBase-root": {
                    px: openCompleteDrawer ? 4 : 3,
                    py: openCompleteDrawer ? 2 : 3,
                  },
                }}
              >
                <ListItemIcon>
                  <SvgIcon component={item.icon} inheritViewBox />
                </ListItemIcon>
                {openCompleteDrawer && <ListItemText primary={item.title} />}
              </ListItemButton>
            </ListItem>
          ))}
          <Divider className="my-14 bg-gray-400" />
          {listRoutes2.map((item) => (
            <ListItem
              disablePadding
              key={item.title}
              sx={{
                "&:hover": {
                  backgroundColor: "#6842A5",
                },
                width: !openCompleteDrawer ? "72px" : "100%",
                height: !openCompleteDrawer ? "72px" : "100%",
                boxSizing: "content-box",
              }}
              className={`${
                item.route.split("=")[1] === query.tab &&
                "border-l-4 border-secondary-500 bg-primary-700"
              } rounded-sm mb-4`}
            >
              <ListItemButton
                onClick={handleOpenCompleteDrawer(item.value, item.route)}
                sx={{
                  "&:hover": {
                    backgroundColor: "#6842A5",
                  },
                  "&.MuiButtonBase-root": {
                    px: openCompleteDrawer ? 4 : 3,
                    py: openCompleteDrawer ? 2 : 3,
                  },
                }}
              >
                <ListItemIcon>
                  <SvgIcon component={item.icon} inheritViewBox />
                </ListItemIcon>
                {openCompleteDrawer && <ListItemText primary={item.title} />}
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      {openCompleteDrawer && (
        <div className="fixed text-white hidden lg:flex gap-6  justify-start bottom-8 left-[90px]">
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
      )}
    </div>
  );
};

export default ScriptSidebarOnDesktop;
