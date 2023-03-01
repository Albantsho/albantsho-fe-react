import {
  AppBar,
  type AppBarProps,
  Toolbar,
  useMediaQuery,
} from "@mui/material";
import Logo from "@shared/Logo/Logo";
import DesktopNav from "./DesktopNav/DesktopNav";
import MobileNav from "./MobileNav/MobileNav";

interface IProps extends AppBarProps {
  links: { title: string; href: string }[];
  secondaryUnderLineColor: boolean;
}

const Nav = ({ links, secondaryUnderLineColor, ...props }: IProps) => {
  const xlScreen = useMediaQuery("(min-width: 1024px)");

  return (
    <AppBar
      position="absolute"
      elevation={0}
      color="transparent"
      className="bg-white"
      {...props}
    >
      <Toolbar
        className="py-4 px-5 sm:px-10 max-w-screen-2xl w-full mx-auto justify-between"
        component="nav"
      >
        <Logo className="mr-12 text-primary-700" />
        {xlScreen ? (
          <DesktopNav
            secondaryUnderLineColor={secondaryUnderLineColor}
            links={links}
          />
        ) : (
          <MobileNav links={links} />
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Nav;
