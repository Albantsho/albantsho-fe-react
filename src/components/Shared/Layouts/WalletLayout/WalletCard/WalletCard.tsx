import {
  Avatar,
  Button,
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
import { IoMdWallet } from "react-icons/io";
import { RiDownloadLine } from "react-icons/ri";
import { TbArrowsSort } from "react-icons/tb";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { useRouter } from "next/router";
import { useState } from "react";

const WalletCart = () => {
  const { push } = useRouter();
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

  return (
    <Card
      elevation={0}
      className="px-1 md:min-w-[248px] shadow-sm mx-auto h-fit md:flex-[0.6] max-w-[235px] md:max-w-fit w-full max-auto py-3 md:py-0"
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
          <Button
            onClick={handleOpenWalletMenu}
            variant="contained"
            className="bg-primary-50/50 md:hidden hover:bg-primary-50 active:bg-primary-300 active:text-white py-3 text-primary-700  px-6"
            startIcon={<SvgIcon component={IoMdWallet} inheritViewBox />}
          >
            Balance:$20,000
          </Button>
          <Menu
            className="md:hidden"
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
              },
            }}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          >
            <MenuItem onClick={() => push("/wallet")}>
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
          <Chip
            sx={{ "& .MuiChip-icon": { color: "#7953B5" } }}
            className="py-6 hidden md:flex text-primary-700 futura font-medium text-lg px-2 md:px-4 lg:px-8 rounded-md bg-primary-50/50"
            icon={
              <SvgIcon color="primary" component={IoMdWallet} inheritViewBox />
            }
            label="Balance:$20,000"
          />
        </div>
        <Divider className="mt-6 mb-4 hidden md:block" />
        <List className="md:mb-6 hidden md:flex flex-col">
          <ListItemButton onClick={() => push("/wallet")}>
            <ListItemIcon
              sx={{ "&.MuiListItemIcon-root": { minWidth: "40px" } }}
            >
              <SvgIcon
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
          <ListItemButton onClick={() => push("/wallet/transaction-history")}>
            <ListItemIcon
              sx={{ "&.MuiListItemIcon-root": { minWidth: "40px" } }}
            >
              <SvgIcon
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
          <ListItemButton onClick={() => push("/wallet/help")}>
            <ListItemIcon
              sx={{ "&.MuiListItemIcon-root": { minWidth: "40px" } }}
            >
              <SvgIcon
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
