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
import Link from "next/link";
import routes from "routes/routes";
import useMobileNav from "./useMobileNav";

interface IProps {
  links: { title: string; href: string }[];
  isTransparent: boolean;
}

const MobileNav = ({ links, isTransparent }: IProps) => {
  const { handleToggleDrawer, open } = useMobileNav();

  return (
    <>
      <IconButton
        onClick={handleToggleDrawer(true)}
        color="inherit"
        className={isTransparent ? "text-white" : "text-primary-main"}
      >
        <SvgIcon component={MenuIcon} sx={{ fontSize: 40 }} />
      </IconButton>
      <Drawer
        anchor="right"
        sx={{
          "& .MuiPaper-root": { maxWidth: "240px", width: "100%" },
        }}
        open={open}
        onClose={handleToggleDrawer(false)}
      >
        <List>
          {links.map(({ title, href }, i) => (
            <ListItem disablePadding key={i}>
              <Link href={href} passHref>
                <ListItemButton className="px-5">
                  <ListItemText primary={title} />
                </ListItemButton>
              </Link>
            </ListItem>
          ))}
          <div className="px-5 py-2">
            <Link href={`${routes.signin}`} passHref>
              <Btn className="px-6 py-3">Sign In</Btn>
              {/* <ListItemButton>
                <ListItemText primary="Sign In" />
              </ListItemButton> */}
            </Link>
          </div>
        </List>
      </Drawer>
    </>
  );
};

export default MobileNav;
