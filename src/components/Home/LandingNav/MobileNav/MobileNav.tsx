import MenuIcon from "@assets/icons/menu.svg";
import {
  Drawer,
  IconButton,
  InputAdornment,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  SvgIcon,
} from "@mui/material";
import CustomInput from "@shared/CustomInput/CustomInput";
import useMobileNav from "@shared/Layouts/GeneralLayout/Nav/MobileNav/useMobileNav";
import useUserStore from "app/user.store";
import Link from "next/link";
import { AiOutlineSearch } from "react-icons/ai";
import routes from "routes/routes";

interface IProps {
  links: { title: string; href: string }[];
}

const MobileNav = ({ links }: IProps) => {
  const { handleToggleDrawer, open } = useMobileNav();
  const user = useUserStore((state) => state.user);

  return (
    <>
      <IconButton
        onClick={handleToggleDrawer(true)}
        color="inherit"
        className="text-white"
      >
        <SvgIcon component={MenuIcon} inheritViewBox sx={{ fontSize: 40 }} />
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
                    <AiOutlineSearch className="text-primary-main" />
                  </InputAdornment>
                ),
              }}
            />
          </ListItem>
          {links.map(({ title, href }, i) => (
            <ListItem disablePadding key={i}>
              <Link href={href} legacyBehavior>
                <ListItemButton>
                  <ListItemText primary={title} />
                </ListItemButton>
              </Link>
            </ListItem>
          ))}
          {!user.email_verified && (
            <ListItem disablePadding>
              <ListItemButton href={routes.signin.url}>
                <ListItemText primary="Sign In" />
              </ListItemButton>
            </ListItem>
          )}
        </List>
      </Drawer>
    </>
  );
};

export default MobileNav;
