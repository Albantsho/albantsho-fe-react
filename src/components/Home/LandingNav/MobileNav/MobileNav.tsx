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
import Link from "next/link";
import { AiOutlineSearch } from "react-icons/ai";

interface IProps {
  links: { title: string; href: string }[];
}

const MobileNav = ({ links }: IProps) => {
  const { handleToggleDrawer, open } = useMobileNav();

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
  );
};

export default MobileNav;
