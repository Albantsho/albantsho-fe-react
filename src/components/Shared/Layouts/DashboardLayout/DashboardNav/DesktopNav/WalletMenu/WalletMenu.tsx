import deposit from "@assets/icons/deposit.svg";
import wallet from "@assets/icons/wallet.svg";
import {
  Button,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  SvgIcon,
} from "@mui/material";
import useWalletApi from "apis/Wallet.api";
import { useRouter } from "next/router";
import { useState } from "react";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { GiReceiveMoney } from "react-icons/gi";
import { IoIosMore } from "react-icons/io";
import { RiDownloadLine } from "react-icons/ri";
import { TbArrowsSort } from "react-icons/tb";
import { useQuery } from "react-query";
import routes from "utils/routes";
import useUserStore from "store/user.store";
import errorHandler from "utils/error-handler";

const WalletMenu = () => {
  const { push } = useRouter();
  const user = useUserStore((state) => state.user);
  const [openWalletMenu, setOpenWalletMenu] = useState<null | HTMLElement>(
    null
  );
  const { getWalletBalance } = useWalletApi();

  const { data } = useQuery("balance", () => getWalletBalance(), {
    onError: (error) => errorHandler(error),
  });

  const handleOpenWalletMenu = (event: React.MouseEvent<HTMLElement>) =>
    setOpenWalletMenu(event.currentTarget);

  const openWallet = Boolean(openWalletMenu);

  const handleCloseWalletMenu = () => setOpenWalletMenu(null);

  return (
    <>
      <Button
        sx={{ border: "1px solid #ccc" }}
        onClick={handleOpenWalletMenu}
        className="border border-gray-300 py-3 px-5 rounded-md text-base font-medium gap-2"
        startIcon={
          <SvgIcon
            style={{
              transform: "scale(1.1)",
            }}
            inheritViewBox
            component={wallet}
          />
        }
        endIcon={
          <IoIosMore
            style={{
              transform: "scale(1.2)",
            }}
          />
        }
      >
        Balance:${data?.balance}
      </Button>
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
            mt: -1,
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        {user.userType === "writer" && (
          <MenuItem
            className="px-6 py-3"
            onClick={() => push(`${routes.withdrawWallet.url}`)}
          >
            <ListItemIcon>
              <SvgIcon
                fontSize="inherit"
                className="text-primary-700"
                inheritViewBox
                component={RiDownloadLine}
              />
            </ListItemIcon>
            <ListItemText
              primaryTypographyProps={{
                className: "text-primary-700 futura font-normal leading-normal",
              }}
            >
              Withdraw
            </ListItemText>
          </MenuItem>
        )}
        {user.userType === "producer" && (
          <MenuItem
            className="px-6 py-3"
            onClick={() => push(routes.depositWallet.url)}
          >
            <ListItemIcon>
              <SvgIcon
                fontSize="inherit"
                className="text-primary-700"
                inheritViewBox
                component={deposit}
              />
            </ListItemIcon>
            <ListItemText
              primaryTypographyProps={{
                className: "text-primary-700 futura font-normal leading-normal",
              }}
            >
              Deposit
            </ListItemText>
          </MenuItem>
        )}
        <MenuItem
          className="px-6 py-3"
          onClick={() => push(routes.paymentHistoryWallet.url)}
        >
          <ListItemIcon>
            <SvgIcon
              fontSize="inherit"
              className="text-primary-700"
              inheritViewBox
              component={TbArrowsSort}
            />
          </ListItemIcon>
          <ListItemText
            primaryTypographyProps={{
              className: "text-primary-700 futura font-normal leading-normal",
            }}
          >
            Payment History
          </ListItemText>
        </MenuItem>
        {user.userType === "writer" && (
          <MenuItem
            className="px-6 py-3"
            onClick={() => push(routes.withdrawHistoryWallet.url)}
          >
            <ListItemIcon>
              <SvgIcon
                fontSize="inherit"
                className="text-primary-700"
                inheritViewBox
                component={GiReceiveMoney}
              />
            </ListItemIcon>
            <ListItemText
              primaryTypographyProps={{
                className: "text-primary-700 futura font-normal leading-normal",
              }}
            >
              Withdraw History
            </ListItemText>
          </MenuItem>
        )}
        <MenuItem
          className="px-6 py-3"
          onClick={() => push(routes.helpWallet.url)}
        >
          <ListItemIcon>
            <SvgIcon
              fontSize="inherit"
              className="text-primary-700"
              inheritViewBox
              component={AiOutlineQuestionCircle}
            />
          </ListItemIcon>
          <ListItemText
            primaryTypographyProps={{
              className: "text-primary-700 futura font-normal leading-normal",
            }}
          >
            Help
          </ListItemText>
        </MenuItem>
      </Menu>
    </>
  );
};

export default WalletMenu;
