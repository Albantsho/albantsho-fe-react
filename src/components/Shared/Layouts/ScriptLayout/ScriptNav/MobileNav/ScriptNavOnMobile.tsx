import MenuIcon from "@assets/icons/menu.svg";
import alert from "@assets/images/alert.png";
import { Badge, Drawer, IconButton, SvgIcon } from "@mui/material";
import Logo from "@shared/Logo/Logo";
import Image from "next/image";
import { AiFillInstagram, AiOutlineClose } from "react-icons/ai";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import ProfileMenu from "../../../../ProfileMenu/ProfileMenu";
import useMobileNavDashboard from "./useMobileNavDashboard";

interface IProps {
  isTransparent: boolean;
}

const DashboardNavOnMobile = ({ isTransparent }: IProps) => {
  const { handleToggleDrawer, open } = useMobileNavDashboard();

  return (
    <div className="flex items-center lg:hidden w-full">
      <Logo className={isTransparent ? "text-white" : "text-primary-main"} />
      <IconButton className="ml-auto mr-7 mt-1 self-center max-h-[31px]">
        <Badge badgeContent={1} color="error">
          <div>
            <Image src={alert} alt="alert" />
          </div>
        </Badge>
      </IconButton>
      <IconButton
        onClick={handleToggleDrawer(true)}
        color="inherit"
        className={`${
          isTransparent ? "text-white" : "text-primary-main"
        } -mr-2`}
      >
        <SvgIcon component={MenuIcon} sx={{ fontSize: 40 }} />
      </IconButton>

      <Drawer
        className="relative  overflow-hidden h-fit"
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

export default DashboardNavOnMobile;
