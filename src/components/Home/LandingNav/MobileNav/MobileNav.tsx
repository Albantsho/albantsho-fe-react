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
import MenuIcon from "../assets/menu.svg";
import Search from "../assets/search.svg";
import Logo from "@assets/logo.svg";
import useMobileNav from "./useMobileNav";

const MobileNav = () => {
  const { handleToggleDrawer, open } = useMobileNav();

  return (
    <AppBar position="static" elevation={0} color="transparent">
      <Toolbar className="py-4 px-0 justify-between text-white">
        <Link href="/" className="cursor-pointer">
          <Logo width="120" height="30" />
        </Link>
        <IconButton
          onClick={handleToggleDrawer(true)}
          color="inherit"
          sx={{ path: { fill: "#fff" } }}
        >
          <MenuIcon width="40" height="40" />
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
