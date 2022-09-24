import deposit from "@assets/icons/deposit.svg";
import {
  AppBar,
  Toolbar,
  useMediaQuery,
  type AppBarProps,
} from "@mui/material";
import { useMemo } from "react";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { RiDownloadLine } from "react-icons/ri";
import { TbArrowsSort } from "react-icons/tb";
import routes from "routes/routes";
import WalletNavOnDesktop from "./DesktopNav/WalletNavOnDesktop";
import WalletNavOnMobile from "./MobileNav/WalletNavOnMobile";

const walletLinks = [
  { title: "Withdraw", href: routes.withdrawWallet, icon: RiDownloadLine },
  { title: "Deposit", href: routes.depositWallet, icon: deposit },
  {
    title: "Transaction History",
    href: routes.transactionHistoryWallet,
    icon: TbArrowsSort,
  },
  { title: "Help", href: routes.helpWallet, icon: AiOutlineQuestionCircle },
];

const ProfileNav = ({ color = "transparent", ...props }: AppBarProps) => {
  const isLgScreen = useMediaQuery("(min-width: 1024px)");
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
        {isLgScreen ? (
          <WalletNavOnDesktop />
        ) : (
          <WalletNavOnMobile
            walletLinks={walletLinks}
            isTransparent={isTransparent}
          />
        )}
      </Toolbar>
    </AppBar>
  );
};

export default ProfileNav;
