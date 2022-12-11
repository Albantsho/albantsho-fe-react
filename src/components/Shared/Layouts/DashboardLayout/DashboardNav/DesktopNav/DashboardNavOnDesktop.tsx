import NotificationComponent from "@shared/NotificationComponent/NotificationComponent";
import ProfileMenu from "@shared/ProfileMenu/ProfileMenu";
import WalletMenu from "./WalletMenu/WalletMenu";

const DashboardNavOnDesktop = () => {
  return (
    <div className="lg:flex px-1 flex-1 justify-between items-center hidden">
      <WalletMenu />
      <div className="flex items-center   gap-12">
        <NotificationComponent />
        <ProfileMenu />
      </div>
    </div>
  );
};

export default DashboardNavOnDesktop;
