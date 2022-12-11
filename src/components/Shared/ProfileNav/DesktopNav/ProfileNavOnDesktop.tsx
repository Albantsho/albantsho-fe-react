import { Button } from "@mui/material";
import NotificationComponent from "@shared/NotificationComponent/NotificationComponent";
import ProfileMenu from "@shared/ProfileMenu/ProfileMenu";
import Link from "next/link";
import routes from "routes/routes";
import ProfileLogo from "../assets/profile-logo.svg";

const ProfileNavOnDesktop = () => {
  return (
    <>
      <div className="md:flex px-1 flex-1 justify-between items-center hidden">
        <Link legacyBehavior href={routes.dashboard.url} passHref>
          <Button
            startIcon={<ProfileLogo className="w-5 h-5" />}
            className="hover:bg-transparent text-xl futura font-medium"
            disableRipple
          >
            Dashboard
          </Button>
        </Link>
        <div className="flex items-center   gap-12">
          <NotificationComponent />
          <ProfileMenu />
        </div>
      </div>
    </>
  );
};

export default ProfileNavOnDesktop;
