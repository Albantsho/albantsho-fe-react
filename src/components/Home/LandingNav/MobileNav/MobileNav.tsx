import {
  AppBar,
  Drawer,
  Icon,
  IconButton,
  InputAdornment,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
} from "@mui/material";
import CustomInput from "@shared/CustomInput/CustomInput";
import MenuIcon from "assets/icons/menu.svg";
import Search from "assets/icons/search.svg";
import Logo from "assets/logo.svg";
import useMobileNav from "./useMobileNav";

const MobileNav = () => {
  const { handleToggleDrawer, open } = useMobileNav();

  return (
    <AppBar position="static" elevation={0} color="transparent">
      <Toolbar className="py-4 max-w-screen-2xl text-white justify-between mx-auto w-full px-5 sm:px-10">
        <Link href="/" className="max-w-[120px] cursor-pointer">
          <Logo />
        </Link>
        <IconButton
          onClick={handleToggleDrawer(true)}
          color="inherit"
          sx={{ path: { fill: "#fff" } }}
        >
          <MenuIcon className="w-[40px] h-[40px]" />
        </IconButton>
        <Drawer anchor="top" open={open} onClose={handleToggleDrawer(false)}>
          <List>
            <ListItem>
              <CustomInput
                fullWidth
                placeholder="Search stories, themes, budget, budget"
                variant="outlined"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Icon sx={{ path: { fill: "primary.700" } }}>
                        <Search />
                      </Icon>
                    </InputAdornment>
                  ),
                }}
              />
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="Story Base" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="Write" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="List" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="Blog" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="Sign In" />
              </ListItemButton>
            </ListItem>
          </List>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default MobileNav;
