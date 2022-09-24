import {
  AppBar,
  Toolbar,
  useMediaQuery,
  type AppBarProps,
} from "@mui/material";
import { useMemo } from "react";
import { RiDownloadLine } from "react-icons/ri";
import routes from "routes/routes";
import DashboardNavOnDesktop from "./DesktopNav/DashboardNavOnDesktop";
import DashboardNavOnMobile from "./MobileNav/DashboardNavOnMobile";
import deposit from "@assets/icons/deposit.svg";
import { TbArrowsSort } from "react-icons/tb";
import { AiOutlineQuestionCircle } from "react-icons/ai";

const profileLinks = [
  { title: "Go to dashboard", href: routes.projectsDashboard },
  { title: "Contact Us", href: "#" },
  { title: "Help", href: "#" },
  { title: "Sign Out", href: "#" },
];

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
          <DashboardNavOnDesktop />
        ) : (
          <DashboardNavOnMobile
            walletLinks={walletLinks}
            profileLinks={profileLinks}
            isTransparent={isTransparent}
          />
        )}
      </Toolbar>
    </AppBar>
  );
};

export default DashboardNav;
