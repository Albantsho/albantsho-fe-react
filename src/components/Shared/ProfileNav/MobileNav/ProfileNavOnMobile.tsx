import deposit from "@assets/icons/deposit.svg";
import MenuIcon from "@assets/icons/menu.svg";
import wallet from "@assets/icons/wallet.svg";
import {
  Button,
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
import NotificationComponent from "@shared/NotificationComponent/NotificationComponent";
import useUserStore from "app/user.store";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  AiFillInstagram,
  AiOutlineClose,
  AiOutlineQuestionCircle,
} from "react-icons/ai";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { RiDownloadLine } from "react-icons/ri";
import { TbArrowsSort } from "react-icons/tb";
import routes from "routes/routes";
import ProfileMenu from "../../ProfileMenu/ProfileMenu";
import ProfileLogo from "../assets/profile-logo.svg";
import useMobileNavMobile from "./useMobileNavMobile";

interface IProps {
  isTransparent: boolean;
}

const walletLinksForWriter = [
  { title: "Withdraw", href: routes.withdrawWallet.url, icon: RiDownloadLine },
  {
    title: "Transaction History",
    href: routes.transactionHistoryWallet.url,
    icon: TbArrowsSort,
  },
  { title: "Help", href: routes.helpWallet.url, icon: AiOutlineQuestionCircle },
];
const walletLinksForProducer = [
  { title: "Deposit", href: routes.depositWallet.url, icon: deposit },
  {
    title: "Transaction History",
    href: routes.transactionHistoryWallet.url,
    icon: TbArrowsSort,
  },
  { title: "Help", href: routes.helpWallet.url, icon: AiOutlineQuestionCircle },
];

const ProfileNavOnMobile = ({ isTransparent }: IProps) => {
  const { handleToggleDrawer, open } = useMobileNavMobile();
  const { push, route } = useRouter();
  const user = useUserStore((state) => state.user);

  return (
    <div className="flex md:hidden w-full">
      <Link legacyBehavior href={routes.dashboard.url} passHref>
        <Button
          startIcon={<ProfileLogo className="w-5 h-5" />}
          className="hover:bg-transparent text-xl futura font-medium"
          disableRipple
        >
          Dashboard
        </Button>
      </Link>
      <NotificationComponent />
      <IconButton
        onClick={handleToggleDrawer(true)}
        color="inherit"
        className={`${
          isTransparent ? "text-white" : "text-primary-main"
        } -mr-2`}
      >
        <SvgIcon component={MenuIcon} sx={{ fontSize: 40 }} />
      </IconButton>

      <Drawer
        className="relative"
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
        <Divider className="my-4" />
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
              primary="Balance:$20,000"
            />
          </ListItem>
          {user.userType === "writer" &&
            walletLinksForWriter.map((walletLink) => (
              <ListItem disablePadding className="py-1" key={walletLink.title}>
                <ListItemButton
                  selected={route === walletLink.href}
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
          {user.userType === "producer" &&
            walletLinksForProducer.map((walletLink) => (
              <ListItem disablePadding className="py-1" key={walletLink.title}>
                <ListItemButton
                  selected={route === walletLink.href}
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

export default ProfileNavOnMobile;
