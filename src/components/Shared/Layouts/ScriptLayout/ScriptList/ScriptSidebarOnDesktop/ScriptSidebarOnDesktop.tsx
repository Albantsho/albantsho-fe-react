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
  { route: routes.scenesScript, title: "Scenes", icon: Scenes, value: 1 },
  { route: routes.commentScript, title: "Comment", icon: Comment, value: 2 },
];
const listRoutes2 = [
  { route: routes.exportScript, title: "Export", icon: Export, value: 3 },
  { route: routes.documentScript, title: "Document", icon: Document, value: 4 },
];

const drawerWidth = 340;

const ScriptSidebarOnDesktop = () => {
  const [openCompleteDrawer, setOpenCompleteDrawer] = useState(true);
  const [openInformationTab, setOpenInformationTab] = useState(0);
  const { route } = useRouter();

  const handleOpenCompleteDrawer = (value: number) => () => {
    setOpenCompleteDrawer((prevState) => !prevState);
    setOpenInformationTab(value);
  };

  return (
    <div className="min-h-screen relative bg-primary-900 flex">
      <Drawer
        sx={{
          width: openCompleteDrawer ? drawerWidth : 100,
          "& .MuiDrawer-paper": {
            width: openCompleteDrawer ? drawerWidth : 100,
            boxSizing: "border-box",
            backgroundColor: "#573195",
            padding: "38px 20px",
            color: "#fff",
            position: "sticky",
            top: 0,
            display: { xs: "none", lg: "block" },
          },
          position: "sticky",
          top: 0,
          backgroundColor: "#573195",
          display: { xs: "none", lg: "block" },
        }}
        variant="permanent"
        anchor="left"
      >
        <Logo color="primary" className="text-white ml-3 mb-5" />

        <List className="space-y-4 h-full">
          {listRoutes1.map((item) => (
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
              <Link className="text-white" href={`${item.route}`} passHref>
                <ListItemButton
                  onClick={handleOpenCompleteDrawer(item.value)}
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
                    <SvgIcon component={item.icon} inheritViewBox />
                  </ListItemIcon>
                  {openCompleteDrawer && <ListItemText primary={item.title} />}
                </ListItemButton>
              </Link>
            </ListItem>
          ))}
          <Divider className="my-10" />
          {listRoutes2.map((item) => (
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
              <Link className="text-white" href={`${item.route}`} passHref>
                <ListItemButton
                  onClick={handleOpenCompleteDrawer(item.value)}
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
                    <SvgIcon component={item.icon} inheritViewBox />
                  </ListItemIcon>
                  {openCompleteDrawer && <ListItemText primary={item.title} />}
                </ListItemButton>
              </Link>
            </ListItem>
          ))}
        </List>
      </Drawer>
      {openInformationTab === 1 && (
        <div className="">
          <h1>Scense</h1>
        </div>
      )}
      {openInformationTab === 2 && (
        <div>
          <h1>comment</h1>
        </div>
      )}
      {openInformationTab === 3 && (
        <div>
          <h1>export</h1>
        </div>
      )}
      {openInformationTab === 4 && (
        <div>
          <h1>document</h1>
        </div>
      )}
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
    </div>
  );
};

export default ScriptSidebarOnDesktop;
