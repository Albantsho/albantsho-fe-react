import {
  AppBar,
  Toolbar,
  useMediaQuery,
  type AppBarProps,
} from "@mui/material";
import Logo from "@shared/Logo/Logo";
import { useMemo } from "react";
import routes from "routes/routes";
import DesktopNav from "./DesktopNav/DesktopNav";
import MobileNav from "./MobileNav/MobileNav";

const links = [
  { title: "About Us", href: routes.aboutUs },
  { title: "Marketplace", href: routes.marketplace },
  { title: "Education", href: "/education" },
  { title: "iDraft", href: routes.iDraft },
];

const Nav = ({ color = "transparent", ...props }: AppBarProps) => {
  const isLgScreen = useMediaQuery("(min-width: 1024px)");
  const isTransparent = useMemo(() => color === "transparent", [color]);

  return (
    <AppBar
      className={`${color !== "transparent" && "shadow-primary z-10"}`}
      position="absolute"
      elevation={0}
      color={color}
      {...props}
    >
      <Toolbar
        className="py-2 lg:py-5 px-5 sm:px-10 max-w-screen-2xl mx-auto w-full justify-between"
        component="nav"
      >
        <Logo className={isTransparent ? "text-white" : "text-primary-main"} />
        {isLgScreen ? (
          <DesktopNav links={links} isTransparent={isTransparent} />
        ) : (
          <MobileNav links={links} isTransparent={isTransparent} />
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Nav;
