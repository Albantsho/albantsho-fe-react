import {
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  SvgIcon,
} from "@mui/material";
import { useRouter } from "next/router";
import { Dispatch, SetStateAction } from "react";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { RiDownloadLine } from "react-icons/ri";
import { TbArrowsSort } from "react-icons/tb";

interface IProps {
  openWalletMenu: HTMLElement | null;
  setOpenWalletMenu: Dispatch<SetStateAction<HTMLElement | null>>;
}

const WalletMenu = ({ openWalletMenu, setOpenWalletMenu }: IProps) => {
  const { push } = useRouter();
  const openWallet = Boolean(openWalletMenu);

  const handleCloseWalletMenu = () => {
    setOpenWalletMenu(null);
  };

  return (
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
          py: 2,
          mt: -1,
        },
      }}
      transformOrigin={{ horizontal: "right", vertical: "top" }}
      anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
    >
      <MenuItem className="px-6 py-2" onClick={() => push("/wallet/withdraw")}>
        <ListItemIcon>
          <SvgIcon
            fontSize="small"
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
        className="px-6 py-2"
        onClick={() => push("/wallet/transaction-history")}
      >
        <ListItemIcon>
          <SvgIcon
            fontSize="small"
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
      <MenuItem className="px-6 py-2" onClick={() => push("/wallet/help")}>
        <ListItemIcon>
          <SvgIcon
            fontSize="small"
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
  );
};

export default WalletMenu;
