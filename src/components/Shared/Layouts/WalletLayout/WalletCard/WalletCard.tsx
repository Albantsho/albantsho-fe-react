import {
  Avatar,
  Card,
  CardContent,
  Chip,
  Divider,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  SvgIcon,
  Typography,
} from "@mui/material";
import wallet from "@assets/icons/wallet.svg";
import { RiDownloadLine } from "react-icons/ri";
import { TbArrowsSort } from "react-icons/tb";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import deposit from "@assets/icons/deposit.svg";
import { useRouter } from "next/router";
import { useState } from "react";
import Btn from "@shared/Btn/Btn";
import routes from "routes/routes";

const WalletCart = () => {
  const { push, route } = useRouter();
  const [openWalletMenu, setOpenWalletMenu] = useState<null | HTMLElement>(
    null
  );
  const openWallet = Boolean(openWalletMenu);

  const handleOpenWalletMenu = (event: React.MouseEvent<HTMLElement>) => {
    setOpenWalletMenu(event.currentTarget);
  };
  const handleCloseWalletMenu = () => {
    setOpenWalletMenu(null);
  };

  console.log(route);

  return (
    <Card
      elevation={0}
      className="px-1 rounded-lg md:min-w-[248px] shadow-primary mx-auto h-fit md:flex-[0.6] !max-w-[295px] md:max-w-fit  max-auto py-3 md:py-0 md:pt-6"
    >
      <CardContent>
        <div className="flex lg:px-5 flex-col items-center gap-2">
          <Avatar
            src="/assets/images/profile.jpg"
            sx={{ width: { xs: 67 }, height: { xs: 67 } }}
          />
          <Typography
            variant="body1"
            className="text-primary-700 futura font-medium"
          >
            Jane Mawe
          </Typography>
          <Btn
            disableElevation
            onClick={handleOpenWalletMenu}
            variant="contained"
            className="md:hidden px-6 py-3 font-medium"
            startIcon={<SvgIcon component={wallet} inheritViewBox />}
          >
            Balance: $20,000
          </Btn>
          <Menu
            className="md:hidden"
            anchorEl={openWalletMenu}
            open={openWallet}
            onClose={handleCloseWalletMenu}
            onClick={handleCloseWalletMenu}
            PaperProps={{
              elevation: 0,
              sx: {
                filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.22))",
                borderRadius: "8px",
              },
            }}
            transformOrigin={{ horizontal: "center", vertical: "top" }}
            anchorOrigin={{ horizontal: "center", vertical: "bottom" }}
          >
            <MenuItem
              className="px-6 py-3"
              onClick={() => push(`${routes.withdrawWallet}`)}
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
                  className:
                    "text-primary-700 futura font-normal leading-normal",
                }}
              >
                Withdraw
              </ListItemText>
            </MenuItem>
            <MenuItem
              className="px-6 py-3"
              onClick={() => push(`${routes.depositWallet}`)}
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
                  className:
                    "text-primary-700 futura font-normal leading-normal",
                }}
              >
                Deposit
              </ListItemText>
            </MenuItem>
            <MenuItem
              className="px-6 py-3"
              onClick={() => push(`${routes.transactionHistoryWallet}`)}
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
                  className:
                    "text-primary-700 futura font-normal leading-normal",
                }}
              >
                Transaction History
              </ListItemText>
            </MenuItem>
            <MenuItem
              className="px-6 py-3"
              onClick={() => push(`${routes.helpWallet}`)}
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
                  className:
                    "text-primary-700 futura font-normal leading-normal",
                }}
              >
                Help
              </ListItemText>
            </MenuItem>
          </Menu>
          <Chip
            title="$20,000"
            sx={{ "& .MuiChip-icon": { color: "#7953B5" } }}
            className="py-6 hidden md:flex text-primary-700 futura font-medium text-lg px-2 md:px-4  rounded-md bg-primary-50/50"
            icon={<SvgIcon color="primary" component={wallet} inheritViewBox />}
            label="Balance:$20,000"
          />
        </div>
        <Divider className="mt-6 mb-4 hidden md:block" />
        <List className="md:mb-2 hidden md:flex flex-col">
          <ListItemButton
            selected={route === `${routes.withdrawWallet}`}
            onClick={() => push(`${routes.withdrawWallet}`)}
          >
            <ListItemIcon
              sx={{ "&.MuiListItemIcon-root": { minWidth: "40px" } }}
            >
              <SvgIcon
                fontSize="small"
                className="text-primary-700"
                component={RiDownloadLine}
                inheritViewBox
              />
            </ListItemIcon>
            <ListItemText
              sx={{ "& .MuiTypography-root": { fontFamily: "futura" } }}
              className="text-primary-700"
            >
              Withdraw
            </ListItemText>
          </ListItemButton>
          <ListItemButton
            selected={route === `${routes.depositWallet}`}
            onClick={() => push(`${routes.depositWallet}`)}
          >
            <ListItemIcon
              sx={{ "&.MuiListItemIcon-root": { minWidth: "40px" } }}
            >
              <SvgIcon
                fontSize="small"
                className="text-primary-700"
                component={deposit}
                inheritViewBox
              />
            </ListItemIcon>
            <ListItemText
              sx={{ "& .MuiTypography-root": { fontFamily: "futura" } }}
              className="text-primary-700"
            >
              Deposit
            </ListItemText>
          </ListItemButton>
          <ListItemButton
            selected={route === `${routes.transactionHistoryWallet}`}
            onClick={() => push(`${routes.transactionHistoryWallet}`)}
          >
            <ListItemIcon
              sx={{ "&.MuiListItemIcon-root": { minWidth: "40px" } }}
            >
              <SvgIcon
                fontSize="small"
                className="text-primary-700"
                component={TbArrowsSort}
                inheritViewBox
              />
            </ListItemIcon>
            <ListItemText
              sx={{ "& .MuiTypography-root": { fontFamily: "futura" } }}
              className="text-primary-700"
            >
              Transaction History
            </ListItemText>
          </ListItemButton>
          <ListItemButton
            selected={route === `${routes.helpWallet}`}
            onClick={() => push(`${routes.helpWallet}`)}
          >
            <ListItemIcon
              sx={{ "&.MuiListItemIcon-root": { minWidth: "40px" } }}
            >
              <SvgIcon
                fontSize="small"
                className="text-primary-700"
                component={AiOutlineQuestionCircle}
                inheritViewBox
              />
            </ListItemIcon>
            <ListItemText
              sx={{ "& .MuiTypography-root": { fontFamily: "futura" } }}
              className="text-primary-700"
            >
              Help
            </ListItemText>
          </ListItemButton>
        </List>
      </CardContent>
    </Card>
  );
};

export default WalletCart;
