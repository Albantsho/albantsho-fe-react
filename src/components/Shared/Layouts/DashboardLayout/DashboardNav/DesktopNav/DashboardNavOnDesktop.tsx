import { Badge, IconButton } from "@mui/material";
import ProfileMenu from "@shared/ProfileMenu/ProfileMenu";
import Image from "next/image";
import alert from "@assets/images/alert.png";
import WalletMenu from "./WalletMenu/WalletMenu";
import useDashboardNavOnDesktop from "./useDashboardNavOnDesktop";

const DashboardNavOnDesktop = () => {
  const { getNotifications, notificationList } = useDashboardNavOnDesktop();

  return (
    <div className="lg:flex px-1 flex-1 justify-between items-center hidden">
      <WalletMenu />
      <div className="flex items-center   gap-12">
        <IconButton
          onClick={getNotifications}
          className="ml-auto self-center max-h-[31px]  mt-1"
        >
          <Badge badgeContent={notificationList.length} color="error">
            <div>
              <Image src={alert} alt="alert" />
            </div>
          </Badge>
        </IconButton>
        <ProfileMenu />
      </div>
    </div>
  );
};

export default DashboardNavOnDesktop;
