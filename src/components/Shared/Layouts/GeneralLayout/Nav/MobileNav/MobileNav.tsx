import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@assets/icons/menu.svg";
import Link from "next/link";
import useMobileNav from "./useMobileNav";

interface IProps {
  links: { title: string; href: string }[];
}

const MobileNav = ({ links }: IProps) => {
  const { handleToggleDrawer, open } = useMobileNav();

  return (
    <>
      <IconButton
        onClick={handleToggleDrawer(true)}
        color="inherit"
        sx={{ path: { fill: "#fff" } }}
      >
        <MenuIcon width="40" height="40" />
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

export default MobileNav;
