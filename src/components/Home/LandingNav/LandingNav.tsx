import {
  AppBar,
  Button,
  Drawer,
  Icon,
  IconButton,
  InputAdornment,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  useMediaQuery,
} from "@mui/material";
import CustomInput from "@shared/CustomInput/CustomInput";
import MenuIcon from "@assets/icons/menu.svg";
import Search from "./assets/search.svg";
import Logo from "@assets/logo.svg";
import Link from "next/link";
import useLandingNav from "./useLandingNav";
import UserIcon from "./assets/user.svg";

const links = [
  { title: "Story Base", href: "#" },
  { title: "Write", href: "#" },
  { title: "List", href: "#" },
  { title: "Blog", href: "#" },
];

const LandingNav = () => {
  const xlScreen = useMediaQuery("(min-width: 1280px)");
  const { handleToggleDrawer, open } = useLandingNav();

  return (
    <AppBar position="absolute" elevation={0} color="transparent">
      <Toolbar
        className="py-10 px-5 sm:px-10 max-w-screen-2xl w-full mx-auto justify-between"
        component="nav"
      >
        <Link href="/" passHref>
          <a className="mr-10">
            <Logo width="120" height="30" />
          </a>
        </Link>
        {xlScreen ? (
          <>
            <CustomInput
              className="max-w-[335px] w-full"
              placeholder="Search stories, themes, budget, budget"
              variant="outlined"
              InputProps={{
                classes: {
                  root: "!text-white !text-[12px] py-3",
                  notchedOutline: "!border-white",
                },
                startAdornment: (
                  <InputAdornment position="start">
                    <Icon sx={{ path: { fill: "#fff" } }}>
                      <Search />
                    </Icon>
                  </InputAdornment>
                ),
              }}
            />
            <div className="flex gap-12 text-white mx-10 flex-1 justify-center">
              {links.map(({ title, href }, i) => (
                <Link href={href} passHref key={i}>
                  <Button color="inherit" size="large">
                    {title}
                  </Button>
                </Link>
              ))}
            </div>
            <div className="flex gap-10 text-white">
              <IconButton color="inherit">
                <UserIcon width="32" height="32" />
              </IconButton>
              <Button className="rounded-lg" color="inherit" variant="outlined">
                Sign In
              </Button>
            </div>
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
                <ListItem>
                  <CustomInput
                    fullWidth
                    placeholder="Search stories, themes, budget, budget"
                    variant="outlined"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Icon sx={{ path: { fill: "primary.main" } }}>
                            <Search />
                          </Icon>
                        </InputAdornment>
                      ),
                    }}
                  />
                </ListItem>
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
                  <ListItemButton>
                    <ListItemText primary="Sign In" />
                  </ListItemButton>
                </ListItem>
              </List>
            </Drawer>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default LandingNav;
