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
          <List className="px-4 flex gap-1 flex-col justify-start items-start">
            {user.email_verified && (
              <li className="px-5 mt-1">
                <ProfileMenu isMobile />
              </li>
            )}
            {links.map(({ title, href }, i) => (
              <ListItem disablePadding key={i}>
                <Link legacyBehavior href={href} passHref>
                  <ListItemButton
                    TouchRippleProps={{ className: "text-transparent" }}
                    className="px-5 hover:bg-primary-50/25"
                  >
                    <ListItemText
                      primaryTypographyProps={{
                        className: "text-primary-700 font-semibold",
                      }}
                      primary={title}
                    />
                  </ListItemButton>
                </Link>
              </ListItem>
            ))}
            {!user.email_verified && (
              <div className="px-5 py-2">
                <Link legacyBehavior href={routes.signin.url} passHref>
                  <Btn className="px-6 py-3">Sign In</Btn>
                </Link>
              </div>
            )}
          </List>
        </Drawer>
      </div>
    </>
  );
};

export default MobileNav;
