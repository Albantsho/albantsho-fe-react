import {
  AppBar,
  Toolbar,
  useMediaQuery,
  type AppBarProps,
} from "@mui/material";
import { useMemo } from "react";
import DesktopNavDashboard from "./DesktopNav/DesktopNavDasshboard";
import MobileNavDashboard from "./MobileNav/MobileNavDashboard";

const links = [
  { title: "About Us", href: "/about-us" },
  { title: "Marketplace", href: "/marketplace" },
  { title: "Education", href: "/education" },
  { title: "iDraft", href: "/iDraft" },
];

const DashboardNav = ({ color = "transparent", ...props }: AppBarProps) => {
  const isLgScreen = useMediaQuery("(min-width: 1024px)");
  const isTransparent = useMemo(() => color === "transparent", [color]);

  return (
    <AppBar position="absolute" elevation={0} color={color} {...props}>
      <Toolbar
        className="py-3 lg:py-4 px-5 sm:px-10  mx-auto w-full justify-between"
        component="nav"
      >
        {isLgScreen ? (
          <DesktopNavDashboard />
        ) : (
          <MobileNavDashboard links={links} isTransparent={isTransparent} />
        )}
      </Toolbar>
    </AppBar>
  );
};

export default DashboardNav;
