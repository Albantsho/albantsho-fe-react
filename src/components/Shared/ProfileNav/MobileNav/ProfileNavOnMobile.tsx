import MenuIcon from "@assets/icons/menu.svg";
import { Button, Drawer, IconButton, SvgIcon } from "@mui/material";
import NotificationComponent from "@shared/NotificationComponent/NotificationComponent";
import Link from "next/link";
import { useState } from "react";
import { AiFillInstagram, AiOutlineClose } from "react-icons/ai";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import routes from "routes/routes";
import ProfileMenu from "../../ProfileMenu/ProfileMenu";
import ProfileLogo from "../assets/profile-logo.svg";

interface IProps {
  isTransparent: boolean;
}

const ProfileNavOnMobile = ({ isTransparent }: IProps) => {
  const [open, setOpen] = useState(false);

  const handleToggleDrawer = (open: boolean) => () => setOpen(open);

  return (
    <div className="flex md:hidden w-full">
      <Link legacyBehavior href={routes.dashboard.url} passHref>
        <Button
          startIcon={<ProfileLogo className="w-5 h-5" />}
          className="hover:bg-transparent text-xl futura font-medium"
          disableRipple
        >
          Dashboard
        </Button>
      </Link>
      <NotificationComponent />
      <IconButton
        onClick={handleToggleDrawer(true)}
        color="inherit"
        className={`${
          isTransparent ? "text-white" : "text-primary-main"
        } -mr-2 ml-2`}
      >
        <SvgIcon component={MenuIcon} sx={{ fontSize: 40 }} />
      </IconButton>
      <Drawer
        className="relative"
        sx={{
          "& .MuiPaper-root": {
            maxWidth: "290px",
            width: "100%",
            px: 5,
            py: 7,
            textAlign: "center",
          },
        }}
        anchor="right"
        open={open}
        onClose={handleToggleDrawer(false)}
      >
        <IconButton
          onClick={handleToggleDrawer(false)}
          className="absolute top-4 right-4"
          color="error"
        >
          <AiOutlineClose />
        </IconButton>
        <ProfileMenu isMobile />

        <div className="fixed text-primary-700 flex gap-6 right-[75px] bottom-8">
          <IconButton
            href="https://www.twitter.com/albantsho"
            target="_blank"
            color="inherit"
            sx={{
              "&.MuiButtonBase-root": {
                border: "1px solid #7953B5",
                borderRadius: "100%",
                width: "32px",
                height: "32px",
              },
            }}
          >
            <FaTwitter />
          </IconButton>
          <IconButton
            href="https://www.facebook.com/albantsho"
            target="_blank"
            color="inherit"
            sx={{
              "&.MuiButtonBase-root": {
                border: "1px solid #7953B5",
                borderRadius: "100%",
                width: "32px",
                height: "32px",
              },
            }}
          >
            <FaFacebookF className="p-[2px]" />
          </IconButton>
          <IconButton
            href="https://www.instagram.com/albantsho/"
            target="_blank"
            color="inherit"
            sx={{
              "&.MuiButtonBase-root": {
                border: "1px solid #7953B5",
                borderRadius: "100%",
                width: "32px",
                height: "32px",
              },
            }}
          >
            <AiFillInstagram />
          </IconButton>
        </div>
      </Drawer>
    </div>
  );
};

export default ProfileNavOnMobile;
