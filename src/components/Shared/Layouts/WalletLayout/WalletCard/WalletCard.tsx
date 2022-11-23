import wallet from "@assets/icons/wallet.svg";
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
import useUserStore from "app/user.store";
import { useRouter } from "next/router";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { RiDownloadLine } from "react-icons/ri";
import { TbArrowsSort } from "react-icons/tb";
import routes from "routes/routes";
import deposit from "@assets/icons/deposit.svg";

const WalletCard = () => {
  const { push, route } = useRouter();
  const user = useUserStore((state) => state.user);

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
            {user.fullname}
          </Typography>
          <Chip
            title="$20,000"
            sx={{ "& .MuiChip-icon": { color: "#7953B5" } }}
            className="py-6 flex text-primary-700 futura font-medium text-lg px-2 md:px-4  rounded-md bg-primary-50/50"
            icon={<SvgIcon color="primary" component={wallet} inheritViewBox />}
            label="Balance:$20,000"
          />
        </div>
        <Divider className="mt-6 mb-4 hidden md:block" />
        <List className="md:mb-2 hidden md:flex flex-col gap-y-2">
          {user.user_type === "writer" && (
            <ListItemButton
              TouchRippleProps={{ className: "text-primary-main" }}
              className="hover:bg-primary-50/25"
              selected={route === `${routes.withdrawWallet.url}`}
              onClick={() => push(`${routes.withdrawWallet.url}`)}
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
          )}
          {user.user_type !== "writer" && (
            <ListItemButton
              TouchRippleProps={{ className: "text-primary-main" }}
              className="hover:bg-primary-50/25"
              selected={route === routes.depositWallet.url}
              onClick={() => push(routes.depositWallet.url)}
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
          )}
          <ListItemButton
            TouchRippleProps={{ className: "text-primary-main" }}
            className="hover:bg-primary-50/25"
            selected={route === routes.transactionHistoryWallet.url}
            onClick={() => push(routes.transactionHistoryWallet.url)}
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
            TouchRippleProps={{ className: "text-primary-main" }}
            className="hover:bg-primary-50/25"
            selected={route === routes.helpWallet.url}
            onClick={() => push(routes.helpWallet.url)}
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

export default WalletCard;
