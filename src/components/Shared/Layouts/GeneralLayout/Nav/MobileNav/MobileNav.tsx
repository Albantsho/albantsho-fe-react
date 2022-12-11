import MenuIcon from "@assets/icons/menu.svg";
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  SvgIcon,
} from "@mui/material";
import Btn from "@shared/Btn/Btn";
import ProfileMenu from "@shared/ProfileMenu/ProfileMenu";
import useUserStore from "app/user.store";
// import { useUserStore } from "app/user.store";
import Link from "next/link";
import { AiOutlineClose } from "react-icons/ai";
import routes from "routes/routes";
import useMobileNav from "./useMobileNav";

interface IProps {
  links: { title: string; href: string }[];
  isTransparent: boolean;
}

const MobileNav = ({ links, isTransparent }: IProps) => {
  const { handleToggleDrawer, open } = useMobileNav();
  const user = useUserStore((state) => state.user);

  return (
    <div className="flex items-center lg:hidden">
      <IconButton
        onClick={handleToggleDrawer(true)}
        color="inherit"
        className={isTransparent ? "text-white" : "text-primary-main"}
      >
        <SvgIcon component={MenuIcon} sx={{ fontSize: 40 }} />
      </IconButton>
      <Drawer
        className="relative"
        anchor="right"
        sx={{
          "& .MuiPaper-root": {
            maxWidth: "290px",
            width: "100%",
            px: 5,
            py: 7,
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
        <List>
          {user.email_verified && <ProfileMenu isMobile />}
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
  );
};

export default MobileNav;
