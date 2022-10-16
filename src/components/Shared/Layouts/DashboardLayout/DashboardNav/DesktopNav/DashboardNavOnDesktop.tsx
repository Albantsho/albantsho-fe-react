import { Badge, IconButton } from "@mui/material";
import ProfileMenu from "@shared/ProfileMenu/ProfileMenu";
import Image from "next/image";
import alert from "@assets/images/alert.png";
import WalletMenu from "./WalletMenu/WalletMenu";

const DashboardNavOnDesktop = () => {
  return (
    <div className="flex px-1 flex-1 justify-between items-center">
      <WalletMenu />
      <div className="flex items-center   gap-12">
        <IconButton className="ml-auto self-center max-h-[31px]  mt-1">
          <Badge badgeContent={1} color="error">
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
