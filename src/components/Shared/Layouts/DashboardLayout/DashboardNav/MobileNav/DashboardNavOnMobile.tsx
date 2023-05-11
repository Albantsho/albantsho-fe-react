import Deposit from "@assets/icons/deposit.svg";
import MenuIcon from "@assets/icons/menu.svg";
import wallet from "@assets/icons/wallet.svg";
import {
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  SvgIcon,
} from "@mui/material";
import Logo from "@shared/Logo/Logo";
import NotificationComponent from "@shared/NotificationComponent/NotificationComponent";
import useUserStore from "store/user.store";
import { useRouter } from "next/router";
import {
  AiFillInstagram,
  AiOutlineClose,
  AiOutlineQuestionCircle,
} from "react-icons/ai";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { RiDownloadLine } from "react-icons/ri";
import { TbArrowsSort } from "react-icons/tb";
import routes from "utils/routes";
import ProfileMenu from "../../../../ProfileMenu/ProfileMenu";
import useMobileNavDashboard from "./useMobileNavDashboard";
import { GiReceiveMoney } from "react-icons/gi";

interface IProps {
  isTransparent: boolean;
}

const walletLinksForWriter = [
  { title: "Withdraw", href: routes.withdrawWallet.url, icon: RiDownloadLine },
  {
    title: "Payment History",
    href: routes.paymentHistoryWallet.url,
    icon: TbArrowsSort,
  },
  {
    title: "Withdraw History",
    href: routes.withdrawHistoryWallet.url,
    icon: GiReceiveMoney,
  },
  { title: "Help", href: routes.helpWallet.url, icon: AiOutlineQuestionCircle },
];

const walletLinksForProducer = [
  { title: "Deposit", href: routes.depositWallet.url, icon: Deposit },
  {
    title: "Payment History",
    href: routes.paymentHistoryWallet.url,
    icon: TbArrowsSort,
  },
  { title: "Help", href: routes.helpWallet.url, icon: AiOutlineQuestionCircle },
];

const DashboardNavOnMobile = ({ isTransparent }: IProps) => {
  const { handleToggleDrawer, open, balance } = useMobileNavDashboard();
  const { push } = useRouter();
  const user = useUserStore((state) => state.user);

  return (
    <div className="flex items-center lg:hidden w-full">
      <Logo className={isTransparent ? "text-white" : "text-primary-main"} />
      <NotificationComponent />
      <IconButton
        onClick={handleToggleDrawer(true)}
        color="inherit"
        className={`${
          isTransparent ? "text-white" : "text-primary-main"
        } -mr-2 ml-2`}
      >
        <SvgIcon component={MenuIcon} sx={{ fontSize: 40 }} />
      </IconButton>

      <Drawer
        className="relative  overflow-hidden h-fit"
        sx={{
          "& .MuiPaper-root": {
            maxWidth: "290px",
            width: "100%",
            px: 5,
            py: 7,
            textAlign: "center",
          },
        }}
        anchor="right"
        open={open}
        onClose={handleToggleDrawer(false)}
      >
        <IconButton
          onClick={handleToggleDrawer(false)}
          className="absolute top-4 right-4"
          color="error"
        >
          <AiOutlineClose />
        </IconButton>
        <ProfileMenu isMobile />
        <Divider className="my-4f" />
        <List>
          <ListItem className="px-5 mb-4 border border-gray-300 rounded-md">
            <ListItemIcon className="min-w-0 mr-3">
              <SvgIcon
                color="primary"
                style={{
                  transform: "scale(1.1)",
                }}
                inheritViewBox
                component={wallet}
              />
            </ListItemIcon>
            <ListItemText
              primaryTypographyProps={{
                className: "text-primary-700 futura font-medium",
                variant: "h6",
              }}
              primary={`Balance:$${balance}`}
            />
          </ListItem>
          {user.userType === "writer" &&
            walletLinksForWriter.map((walletLink) => (
              <ListItem disablePadding className="py-1" key={walletLink.title}>
                <ListItemButton
                  TouchRippleProps={{ className: "text-primary-main" }}
                  className="px-2 rounded-md hover:bg-primary-50/25"
                  onClick={() => push(`${walletLink.href}`)}
                >
                  <ListItemIcon className="min-w-0 mr-3">
                    <SvgIcon
                      fontSize="small"
                      className="text-primary-700"
                      inheritViewBox
                      component={walletLink.icon}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primaryTypographyProps={{
                      className:
                        "text-primary-700 futura font-normal leading-normal",
                      variant: "h6",
                    }}
                  >
                    {walletLink.title}
                  </ListItemText>
                </ListItemButton>
              </ListItem>
            ))}

          {user.userType === "producer" &&
            walletLinksForProducer.map((walletLink) => (
              <ListItem disablePadding className="py-1" key={walletLink.title}>
                <ListItemButton
                  TouchRippleProps={{ className: "text-primary-main" }}
                  className="px-2 rounded-md hover:bg-primary-50/25"
                  onClick={() => push(walletLink.href)}
                >
                  <ListItemIcon className="min-w-0 mr-3">
                    <SvgIcon
                      fontSize="small"
                      className="text-primary-700"
                      inheritViewBox
                      component={walletLink.icon}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primaryTypographyProps={{
                      className:
                        "text-primary-700 futura font-normal leading-normal",
                      variant: "h6",
                    }}
                  >
                    {walletLink.title}
                  </ListItemText>
                </ListItemButton>
              </ListItem>
            ))}
        </List>

        <div className="fixed text-primary-700 flex gap-6 right-[75px] bottom-8">
          <IconButton
            href="https://www.twitter.com/albantsho"
            target="_blank"
            color="inherit"
            sx={{
              "&.MuiButtonBase-root": {
                border: "1px solid #7953B5",
                borderRadius: "100%",
                width: "32px",
                height: "32px",
              },
            }}
          >
            <FaTwitter />
          </IconButton>
          <IconButton
            href="https://www.facebook.com/albantsho"
            target="_blank"
            color="inherit"
            sx={{
              "&.MuiButtonBase-root": {
                border: "1px solid #7953B5",
                borderRadius: "100%",
                width: "32px",
                height: "32px",
              },
            }}
          >
            <FaFacebookF className="p-[2px]" />
          </IconButton>
          <IconButton
            href="https://www.instagram.com/albantsho/"
            target="_blank"
            color="inherit"
            sx={{
              "&.MuiButtonBase-root": {
                border: "1px solid #7953B5",
                borderRadius: "100%",
                width: "32px",
                height: "32px",
              },
            }}
          >
            <AiFillInstagram />
          </IconButton>
        </div>
      </Drawer>
    </div>
  );
};

export default DashboardNavOnMobile;
