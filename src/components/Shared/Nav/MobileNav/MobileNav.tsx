import MenuIcon from "@assets/icons/menu.svg";
import {
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  SvgIcon,
} from "@mui/material";
import ProfileMenu from "@shared/ProfileMenu/ProfileMenu";
import Link from "next/link";
import { AiOutlineClose } from "react-icons/ai";
import useUserStore from "store/user.store";
import routes from "utils/routes";
import useMobileNav from "./useMobileNav";

interface IProps {
  links: { title: string; href: string }[];
}

const MobileNav = ({ links }: IProps) => {
  const { handleToggleDrawer, open ,userData} = useMobileNav();

  return (
    <>
      <div className="flex items-center xl:hidden">
        <IconButton onClick={handleToggleDrawer(true)} color="primary">
          <SvgIcon component={MenuIcon} sx={{ fontSize: 40 }} />
        </IconButton>
        <Drawer
          className="relative"
          anchor="right"
          sx={{
            "& .MuiPaper-root": {
              maxWidth: "290px",
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
          <List className="px-4 flex gap-1 flex-col justify-start items-start">
            {userData && (
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
            {!userData && (
              <div className="px-5 py-2">
                <Link legacyBehavior href={routes.signin.url} passHref>
                  <Button
                    variant="outlined"
                    className="px-4 py-3 rounded-lg font-medium"
                  >
                    Sign In
                  </Button>
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
