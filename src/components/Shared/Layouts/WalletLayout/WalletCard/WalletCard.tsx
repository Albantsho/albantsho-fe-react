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
  SvgIcon,
  Typography,
} from "@mui/material";
import { IoMdWallet } from "react-icons/io";
import { RiDownloadLine } from "react-icons/ri";
import { TbArrowsSort } from "react-icons/tb";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { useRouter } from "next/router";

const WalletCart = () => {
  const { push } = useRouter();
  return (
    <Card className="px-1 md:flex-[0.6] max-w-[235px] md:max-w-fit w-full max-auto py-3 md:py-0">
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
          <Chip
            sx={{ "& .MuiChip-icon": { color: "#7953B5" } }}
            className="py-6 text-primary-700 futura font-medium text-lg px-2 md:px-4 lg:px-8 rounded-md bg-primary-50/50"
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
