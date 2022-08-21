import {
  AppBar,
  Toolbar,
  useMediaQuery,
  type AppBarProps,
} from "@mui/material";
import Logo from "@shared/Logo/Logo";
import DesktopNav from "./DesktopNav/DesktopNav";
import MobileNav from "./MobileNav/MobileNav";

const links = [
  { title: "About Us", href: "/about-us" },
  { title: "Marketplace", href: "/marketplace" },
  { title: "Education", href: "/education" },
  { title: "iDraft", href: "/iDraft" },
];

const Nav = ({ position, elevation, color, ...otherProps }: AppBarProps) => {
  const isLgScreen = useMediaQuery("(min-width: 1024px)");

  return (
    <AppBar
      position={position ?? "absolute"}
      elevation={elevation ?? 0}
      color={color ?? "transparent"}
      {...otherProps}
    >
      <Toolbar
        className="py-2 sm:py-7 px-5 sm:px-10 max-w-screen-2xl mx-auto w-full justify-between"
        component="nav"
      >
        <Logo />
        {isLgScreen ? (
          <DesktopNav links={links} />
        ) : (
          <MobileNav links={links} />
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Nav;
