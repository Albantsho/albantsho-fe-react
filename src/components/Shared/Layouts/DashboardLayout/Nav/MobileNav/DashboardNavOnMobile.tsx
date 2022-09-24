import MenuIcon from "@assets/icons/menu.svg";
import {
  Avatar,
  Badge,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  SvgIcon,
  type SvgIconProps,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import useMobileNavDashboard from "./useMobileNavDashboard";
import alert from "./assets/alert.png";
import Logo from "@shared/Logo/Logo";
import wallet from "@assets/icons/wallet.svg";
import routes from "routes/routes";
import ProfileMenu from "../DesktopNav/ProfileMenu/ProfileMenu";
import { AiFillCaretDown, AiFillInstagram } from "react-icons/ai";
import { useRouter } from "next/router";
import { FaFacebookF, FaTwitter } from "react-icons/fa";

interface IProps {
  profileLinks: { title: string; href: string }[];
  walletLinks: {
    title: string;
    href: string;
    icon: React.ReactNode;
  }[];
  isTransparent: boolean;
}

const DashboardNavOnMobile = ({
  profileLinks,
  walletLinks,
  isTransparent,
}: IProps) => {
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
        sx={{
          "& .MuiPaper-root": { maxWidth: "240px", width: "100%" },
        }}
        anchor="right"
        open={open}
        onClose={handleToggleDrawer(false)}
      >
        <List className="mt-12">
          <ListItem className="px-5">
            <ListItemAvatar>
              <Avatar src="/assets/images/profile.jpg" />
            </ListItemAvatar>
            <ListItemText>
              <Typography
                variant="h6"
                className="text-primary-700 futura font-medium leading-normal -mb-2"
              >
                Jane Mawe
              </Typography>
              <Typography variant="caption" className="text-neutral-800 ">
                John Doe@gmail.com
              </Typography>
            </ListItemText>
          </ListItem>
          <Divider className="mt-1" />
          {profileLinks.map(({ title, href }, i) => (
            <ListItem disablePadding key={i}>
              <Link href={href} passHref>
                <ListItemButton className="px-6">
                  <ListItemText
                    primary={title}
                    primaryTypographyProps={{
                      className: `${
                        title === "Sign Out"
                          ? "text-error-500"
                          : "text-primary-700 "
                      }`,
                    }}
                  />
                </ListItemButton>
              </Link>
            </ListItem>
          ))}
        </List>
        <Divider className="my-4" />
        <List disablePadding>
          <ListItem className="px-5 mb-4">
            <ListItemIcon>
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
                className: "text-primary-700 ",
              }}
              primary=" Balance:$20,000"
            />
          </ListItem>
          {walletLinks.map((walletLink) => (
            <ListItemButton
              key={walletLink.title}
              className="px-6"
              onClick={() => push(`${walletLink.href}`)}
            >
              <ListItemIcon>
                <SvgIcon
                  fontSize="inherit"
                  className="text-primary-700"
                  inheritViewBox
                  component={walletLink.icon}
                />
              </ListItemIcon>
              <ListItemText
                primaryTypographyProps={{
                  className:
                    "text-primary-700 futura font-normal leading-normal",
                }}
              >
                {walletLink.title}
              </ListItemText>
            </ListItemButton>
          ))}
        </List>

        <div className="fixed text-primary-700 flex gap-6  justify-start bottom-8 right-[40px]">
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

export default DashboardNavOnMobile;
