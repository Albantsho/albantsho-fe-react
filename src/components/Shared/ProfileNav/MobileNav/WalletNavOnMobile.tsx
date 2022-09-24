import MenuIcon from "@assets/icons/menu.svg";
import wallet from "@assets/icons/wallet.svg";
import {
  Badge,
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
import Image from "next/image";
import { useRouter } from "next/router";
import { AiFillInstagram, AiOutlineClose } from "react-icons/ai";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import ProfileMenu from "../../ProfileMenu/ProfileMenu";
import alert from "@assets/images/alert.png";
import useMobileNavDashboard from "./useMobileNavMobile";

interface IProps {
  walletLinks: {
    title: string;
    href: string;
    icon: any;
  }[];
  isTransparent: boolean;
}

const WalletNavOnMobile = ({ walletLinks, isTransparent }: IProps) => {
  const { handleToggleDrawer, open } = useMobileNavDashboard();
  const { push } = useRouter();

  return (
    <>
      <Logo className={isTransparent ? "text-white" : "text-primary-main"} />
      <IconButton className="ml-auto mr-7 mt-1 self-center max-h-[31px]">
        <Badge badgeContent={1} color="error">
          <div>
            <Image src={alert} alt="alert" />
          </div>
        </Badge>
      </IconButton>
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
          {walletLinks.map((walletLink) => (
            <ListItem disablePadding className="py-1" key={walletLink.title}>
              <ListItemButton
                TouchRippleProps={{className:"text-primary-main"}}
                className="px-2 rounded-md"
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
    </>
  );
};

export default WalletNavOnMobile;
