import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import Logo from "@shared/Logo/Logo";
import projects from "../assets/projects.png";
import reviews from "../assets/reviews.png";
import listnings from "../assets/listnings.png";
import Image from "next/image";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/router";

const listRoutes = [
  { route: "/projects", title: "Projects", icon: projects },
  { route: "/listings", title: "Listings", icon: listnings },
  { route: "/reviews", title: "Reviews", icon: reviews },
];

const drawerWidth = 340;

const ListDashboardBigSize = () => {
  const { route } = useRouter();
  console.log(route);
  return (
    <div className="min-h-screen hidden  gap-2  lg:block">
      <Drawer
        sx={{
          width: drawerWidth,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            backgroundColor: "#573195",
            padding: "38px 20px",
            color: "#fff",
          },
          position: "relative",
          backgroundColor: "#573195",
        }}
        variant="permanent"
        anchor="left"
      >
        <Logo color="primary" className="text-white ml-3 mb-5" />

        <List className="space-y-4">
          {listRoutes.map((item) => (
            <Link
              key={item.title}
              className="text-white"
              href={`${item.route}`}
              passHref
            >
              <ListItem
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
                <ListItemButton
                  disableRipple={true}
                  sx={{
                    "&:hover": {
                      backgroundColor: "#6842A5",
                    },
                  }}
                >
                  <ListItemIcon>
                    <Image loading="lazy" src={item.icon} alt={item.title} />
                  </ListItemIcon>
                  <ListItemText primary={item.title} />
                </ListItemButton>
              </ListItem>
            </Link>
          ))}
        </List>
        <div className="flex absolute justify-start bottom-14 left-0 right-0 pl-12 gap-6">
          <span className="w-9 h-9 flex justify-center items-center border border-white rounded-full">
            <FaTwitter />
          </span>
          <span className="w-9 h-9 flex justify-center items-center border border-white rounded-full">
            <FaFacebook />
          </span>
          <span className="w-9 h-9 flex justify-center items-center border border-white rounded-full">
            <FaInstagram />
          </span>
        </div>
      </Drawer>
    </div>
  );
};

export default ListDashboardBigSize;
