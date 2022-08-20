import MenuIcon from "@assets/icons/menu.svg";
import {
  AppBar,
  type AppBarProps,
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  useMediaQuery,
} from "@mui/material";
import Btn from "@shared/Btn/Btn";
import Logo from "@shared/Logo/Logo";
import Link from "next/link";
import useNav from "./useNav";

const links = [
  { title: "About Us", href: "/about-us" },
  { title: "Marketplace", href: "/marketplace" },
  { title: "Education", href: "/education" },
  { title: "iDraft", href: "/iDraft" },
];

const Nav = ({ position, elevation, color, ...otherProps }: AppBarProps) => {
  const isLgScreen = useMediaQuery("(min-width: 1024px)");
  const { handleToggleDrawer, open } = useNav();

  return (
    <AppBar
      position={position ?? "absolute"}
      elevation={elevation ?? 0}
      color={color ?? "transparent"}
      {...otherProps}
    >
      <Toolbar
        className="py-2 sm:py-7 px-5 sm:px-10 max-w-screen-2xl mx-auto w-full justify-between"
        component="nav"
      >
        <Logo />
        {isLgScreen ? (
          <>
            <div className="flex gap-12 text-white mx-10 flex-1 justify-center">
              {links.map(({ title, href }, i) => (
                <Link href={href} passHref key={i}>
                  <Button color="inherit" size="large">
                    {title}
                  </Button>
                </Link>
              ))}
            </div>
            <Link href="/login" passHref>
              <Btn size="large">Sign In</Btn>
            </Link>
          </>
        ) : (
          <>
            <IconButton
              onClick={handleToggleDrawer(true)}
              color="inherit"
              sx={{ path: { fill: "#fff" } }}
            >
              <MenuIcon width="40" height="40" />
            </IconButton>
            <Drawer
              anchor="top"
              open={open}
              onClose={handleToggleDrawer(false)}
            >
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
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Nav;
