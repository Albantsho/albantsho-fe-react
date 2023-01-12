import { AppBar, Toolbar, type AppBarProps } from "@mui/material";
import { useMemo } from "react";
import WalletNavOnDesktop from "./DesktopNav/WalletNavOnDesktop";
import WalletNavOnMobile from "./MobileNav/WalletNavOnMobile";

const WalletNav = ({ color = "transparent", ...props }: AppBarProps) => {
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
        className="py-3 lg:py-4 px-5 sm:px-10  mx-auto w-full justify-between"
        component="nav"
      >
        <WalletNavOnDesktop />
        <WalletNavOnMobile isTransparent={isTransparent} />
      </Toolbar>
    </AppBar>
  );
};

export default WalletNav;
