import MenuIcon from "@assets/icons/menu.svg";
import {
  Badge,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  SvgIcon,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import useMobileNavDashboard from "./useMobileNavDashboard";
import alert from "./assets/alert.png";
import Logo from "@shared/Logo/Logo";

interface IProps {
  links: { title: string; href: string }[];
  isTransparent: boolean;
}

const MobileNavDashboard = ({ links, isTransparent }: IProps) => {
  const { handleToggleDrawer, open } = useMobileNavDashboard();

  return (
    <>
      <Logo className={isTransparent ? "text-white" : "text-primary-main"} />
      <IconButton className="ml-auto mr-7 mt-1">
        <Badge badgeContent={1} color="error">
          <div>
            <Image src={alert} alt="alert" />
          </div>
        </Badge>
      </IconButton>
      <IconButton
        onClick={handleToggleDrawer(true)}
        color="inherit"
        className={isTransparent ? "text-white" : "text-primary-main"}
      >
        <SvgIcon component={MenuIcon} sx={{ fontSize: 40 }} />
      </IconButton>

      <Drawer anchor="top" open={open} onClose={handleToggleDrawer(false)}>
        <List>
          {links.map(({ title, href }, i) => (
            <ListItem disablePadding key={i}>
              <Link href={href} passHref>
                <ListItemButton>
                  <ListItemText primary={title} />
                </ListItemButton>
              </Link>
            </ListItem>
          ))}
          <ListItem disablePadding>
            <Link href="/login" passHref>
              <ListItemButton>
                <ListItemText primary="Sign In" />
              </ListItemButton>
            </Link>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default MobileNavDashboard;
