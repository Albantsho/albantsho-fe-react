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
import Btn from "@shared/Btn/Btn";
import CustomInput from "@shared/CustomInput/CustomInput";
import useMobileNav from "@shared/Layouts/GeneralLayout/Nav/MobileNav/useMobileNav";
import ProfileMenu from "@shared/ProfileMenu/ProfileMenu";
import useUserStore from "app/user.store";
import Link from "next/link";
import { AiOutlineClose, AiOutlineSearch } from "react-icons/ai";
import routes from "routes/routes";

interface IProps {
  links: { title: string; href: string }[];
}

const MobileNav = ({ links }: IProps) => {
  const { handleToggleDrawer, open } = useMobileNav();
  const user = useUserStore((state) => state.user);

  return (
    <>
      {/* <IconButton
        onClick={handleToggleDrawer(true)}
        color="inherit"
        className="text-white"
      >
        <SvgIcon component={MenuIcon} inheritViewBox sx={{ fontSize: 40 }} />
      </IconButton> */}
      <div className="flex items-center xl:hidden">
        <IconButton
          onClick={handleToggleDrawer(true)}
          color="inherit"
          className="text-white"
        >
          <SvgIcon component={MenuIcon} sx={{ fontSize: 40 }} />
        </IconButton>
        <Drawer
          className="relative"
          anchor="right"
          sx={{
            "& .MuiPaper-root": {
              maxWidth: { xs: "290px", sm: "390px" },
              width: "100%",
              py: 7,
              px: 2,
            },
          }}
          open={open}
          onClose={handleToggleDrawer(false)}
        >
          <IconButton
            onClick={handleToggleDrawer(false)}
            className="absolute top-4 right-4"
            color="error"
          >
            <AiOutlineClose />
          </IconButton>
          <CustomInput
            className="mt-1"
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
          <List className="px-4">
            {links.map(({ title, href }, i) => (
              <ListItem disablePadding key={i}>
                <Link legacyBehavior href={href} passHref>
                  <ListItemButton
                    TouchRippleProps={{ className: "text-transparent" }}
                    className="px-5 hover:bg-primary-50/25"
                  >
                    <ListItemText primary={title} />
                  </ListItemButton>
                </Link>
              </ListItem>
            ))}
            {user.email_verified ? (
              <ProfileMenu />
            ) : (
              <div className="px-5 py-2">
                <Link legacyBehavior href={routes.signin.url} passHref>
                  <Btn className="px-6 py-3">Sign In</Btn>
                </Link>
              </div>
            )}
          </List>
        </Drawer>
      </div>
      {/* <Drawer anchor="top" open={open} onClose={handleToggleDrawer(false)}>
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
      </Drawer> */}
    </>
  );
};

export default MobileNav;
