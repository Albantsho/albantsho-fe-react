import { AppBar, Toolbar, type AppBarProps } from "@mui/material";
import { useMemo } from "react";
import DashboardNavOnDesktop from "./DesktopNav/DashboardNavOnDesktop";
import DashboardNavOnMobile from "./MobileNav/DashboardNavOnMobile";

const DashboardNav = ({ color = "transparent", ...props }: AppBarProps) => {
  const isTransparent = useMemo(() => color === "transparent", [color]);

  return (
    <AppBar
      data-aos="fade-down"
      data-aos-duration="300"
      className="shadow-primary"
      position="absolute"
      elevation={0}
      color={color}
      {...props}
    >
      <Toolbar
        className="py-3 lg:py-4 px-5 sm:px-10  mx-auto w-full justify-between"
        component="nav"
      >
        <DashboardNavOnDesktop />
        <DashboardNavOnMobile isTransparent={isTransparent} />
      </Toolbar>
    </AppBar>
  );
};

export default DashboardNav;
