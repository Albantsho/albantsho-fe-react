import { Badge, Button, IconButton } from "@mui/material";
import ProfileMenu from "@shared/ProfileMenu/ProfileMenu";
import Image from "next/image";
import alert from "@assets/images/alert.png";
import ProfileLogo from "../assets/profile-logo.svg";
import Link from "next/link";

const ProfileNavOnDesktop = () => {
  return (
    <>
      <div className="flex px-1 flex-1 justify-between items-center">
        <Link href="/dashboard/projects" passHref>
          <Button
            startIcon={<ProfileLogo className="w-5 h-5" />}
            className="hover:bg-transparent text-xl futura font-medium"
            disableRipple
          >
            Dashboard
          </Button>
        </Link>
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
    </>
  );
};

export default ProfileNavOnDesktop;
