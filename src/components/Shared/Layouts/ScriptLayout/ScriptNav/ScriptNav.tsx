import { AppBar, Toolbar, type AppBarProps } from "@mui/material";
import { useMemo } from "react";
import ScriptNavOnDesktop from "./DesktopNav/ScriptNavOnDesktop";
import ScriptNavOnMobile from "./MobileNav/ScriptNavOnMobile";

const ScriptNav = ({ color = "transparent", ...props }: AppBarProps) => {
  const isTransparent = useMemo(() => color === "transparent", [color]);

  return (
    <AppBar
      className="shadow-primary"
      position="absolute"
      elevation={0}
      color={color}
      {...props}
    >
      <Toolbar
        className="pt-2 pb-3 lg:pb-4 lg:pt-3 px-5 sm:px-10  mx-auto w-full justify-between"
        component="nav"
      >
        <ScriptNavOnDesktop />
        <ScriptNavOnMobile isTransparent={isTransparent} />
      </Toolbar>
    </AppBar>
  );
};

export default ScriptNav;
