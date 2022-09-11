import {
  Button,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  SvgIcon,
} from "@mui/material";
import { useRouter } from "next/router";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { IoIosMore, IoMdWallet } from "react-icons/io";
import { RiDownloadLine } from "react-icons/ri";
import { TbArrowsSort } from "react-icons/tb";

import { useState } from "react";

const WalletMenu = () => {
  const { push } = useRouter();
  const [openWalletMenu, setOpenWalletMenu] = useState<null | HTMLElement>(
    null
  );
  const handleOpenWalletMenu = (event: React.MouseEvent<HTMLElement>) => {
    setOpenWalletMenu(event.currentTarget);
  };

  const openWallet = Boolean(openWalletMenu);

  const handleCloseWalletMenu = () => {
    setOpenWalletMenu(null);
  };

  return (
    <>
      <Button
        sx={{ border: "1px solid #ccc" }}
        onClick={handleOpenWalletMenu}
        className="border border-gray-300 py-3 px-3 rounded-md flex justify-center gap-4 items-center cursor-pointer"
        startIcon={<IoMdWallet />}
        endIcon={<IoIosMore />}
      >
        Balance:$20,000
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
        <MenuItem
          className="px-6 py-3"
          onClick={() => push("/wallet/withdraw")}
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
        <MenuItem
          className="px-6 py-3"
          onClick={() => push("/wallet/transaction-history")}
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
            Transaction History
          </ListItemText>
        </MenuItem>
        <MenuItem className="px-6 py-3" onClick={() => push("/wallet/help")}>
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
