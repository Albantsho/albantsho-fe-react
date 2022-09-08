import {
  Avatar,
  Badge,
  Divider,
  IconButton,
  ListItemAvatar,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  SvgIcon,
  Typography,
} from "@mui/material";
import Image from "next/image";
import wallet from "./assets/wallet.png";
import { IoIosMore } from "react-icons/io";
import alert from "./assets/alert.png";
import { AiFillCaretDown } from "react-icons/ai";
import { useState } from "react";
import { useRouter } from "next/router";
import { RiDownloadLine } from "react-icons/ri";
import { TbArrowsSort } from "react-icons/tb";
import { AiOutlineQuestionCircle } from "react-icons/ai";

const DashboardNavOnDesktop = () => {
  const [openMenu, setOpenMenu] = useState<null | HTMLElement>(null);
  const open = Boolean(openMenu);
  const [openWalletMenu, setOpenWalletMenu] = useState<null | HTMLElement>(
    null
  );
  const openWallet = Boolean(openWalletMenu);
  const { push } = useRouter();
  const handleOpenMenu = (event: React.MouseEvent<HTMLElement>) => {
    setOpenMenu(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setOpenMenu(null);
  };

  const handleOpenWalletMenu = (event: React.MouseEvent<HTMLElement>) => {
    setOpenWalletMenu(event.currentTarget);
  };
  const handleCloseWalletMenu = () => {
    setOpenWalletMenu(null);
  };

  return (
    <>
      <div className="flex px-1 flex-1 justify-between items-center">
        <div
          onClick={handleOpenWalletMenu}
          className="border border-gray-300 py-2 px-3 rounded-md flex justify-center gap-4 items-center cursor-pointer"
        >
          <div className="mt-1">
            <Image src={wallet} alt="wallet" />
          </div>
          <Typography
            variant="body1"
            className="text-primary-700 futura font-medium"
          >
            Balance:$20,000
          </Typography>
          <div className="my-auto mt-2">
            <IoIosMore className="text-2xl text-primary-700" />
          </div>
        </div>
        <Menu
          anchorEl={openWalletMenu}
          open={openWallet}
          onClose={handleCloseWalletMenu}
          onClick={handleCloseWalletMenu}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.22))",
              borderRadius: "8px",
              maxWidth: "300px",
              width: "100%",
            },
          }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          <MenuItem onClick={() => push("/wallet/withdraw")}>
            <ListItemIcon>
              <SvgIcon
                className="text-primary-700"
                inheritViewBox
                component={RiDownloadLine}
              />
            </ListItemIcon>
            <ListItemText>
              <Typography
                variant="h6"
                className="text-primary-700 futura font-normal leading-normal"
              >
                Withdraw
              </Typography>
            </ListItemText>
          </MenuItem>
          <MenuItem onClick={() => push("/wallet/transaction-history")}>
            <ListItemIcon>
              <SvgIcon
                className="text-primary-700"
                inheritViewBox
                component={TbArrowsSort}
              />
            </ListItemIcon>
            <ListItemText>
              <Typography
                variant="h6"
                className="text-primary-700 futura font-normal"
              >
                Transaction History
              </Typography>
            </ListItemText>
          </MenuItem>
          <MenuItem onClick={() => push("/wallet/help")}>
            <ListItemIcon>
              <SvgIcon
                className="text-primary-700"
                inheritViewBox
                component={AiOutlineQuestionCircle}
              />
            </ListItemIcon>
            <ListItemText>
              <Typography
                variant="h6"
                className="text-primary-700 futura font-normal"
              >
                Help
              </Typography>
            </ListItemText>
          </MenuItem>
        </Menu>
        <div className="flex items-center">
          <IconButton className="ml-auto mr-12 mt-1">
            <Badge badgeContent={1} color="error">
              <div>
                <Image src={alert} alt="alert" />
              </div>
            </Badge>
          </IconButton>

          <div
            onClick={handleOpenMenu}
            className="flex gap-2 items-center cursor-pointer"
          >
            <Typography
              variant="body1"
              className="text-primary-700 futura font-medium mr-3"
            >
              Jane Mawe
            </Typography>
            <Avatar src="/assets/images/profile.jpg" />
            <AiFillCaretDown className="text-primary-700" />
          </div>
          <Menu
            anchorEl={openMenu}
            open={open}
            onClose={handleCloseMenu}
            onClick={handleCloseMenu}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: "visible",
                filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.22))",
                borderRadius: "8px",
                maxWidth: "300px",
                width: "100%",
              },
            }}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          >
            <MenuItem onClick={() => push("/profile")}>
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
                  John Doe@gmail.com{" "}
                </Typography>
              </ListItemText>
            </MenuItem>
            <Divider />
            <MenuItem onClick={() => push("/projects")}>
              <ListItemText>
                <Typography variant="body1" className="text-primary-700">
                  Go to dashboard
                </Typography>
              </ListItemText>
            </MenuItem>
            <Divider />
            <MenuItem>
              <ListItemText>
                <Typography variant="body1" className="text-primary-700">
                  Contact Us
                </Typography>
              </ListItemText>
            </MenuItem>
            <MenuItem>
              <ListItemText>
                <Typography variant="body1" className="text-primary-700">
                  Help
                </Typography>
              </ListItemText>
            </MenuItem>
            <Divider />
            <MenuItem>
              <ListItemText>
                <Typography variant="body1" className="text-error-700">
                  Sign Out
                </Typography>
              </ListItemText>
            </MenuItem>
          </Menu>
        </div>
      </div>
    </>
  );
};

export default DashboardNavOnDesktop;
