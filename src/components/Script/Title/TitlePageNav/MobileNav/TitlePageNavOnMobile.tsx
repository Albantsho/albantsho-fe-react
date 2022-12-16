import MenuIcon from "@assets/icons/menu.svg";
import { LoadingButton } from "@mui/lab";
import { Drawer, IconButton, SvgIcon } from "@mui/material";
import Logo from "@shared/Logo/Logo";
import NotificationComponent from "@shared/NotificationComponent/NotificationComponent";
import ProfileMenu from "@shared/ProfileMenu/ProfileMenu";
import { AiFillInstagram, AiOutlineClose } from "react-icons/ai";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import useMobileNavDashboard from "./useTitlePageNavOnMobile";

interface IProps {
  loading: boolean;
}

const TitlePageNavOnMobile = ({ loading }: IProps) => {
  const { handleToggleDrawer, open } = useMobileNavDashboard();

  return (
    <div className="flex items-center justify-end lg:hidden w-full">
      <div className="flex gap-6 items-center">
        <LoadingButton
          loading={loading}
          type="submit"
          className="bg-[#5D5FEF] hover:bg-[#5D5FEF]/90 px-7 py-2 rounded-lg ml-auto font-bold"
          variant="contained"
          disableElevation
        >
          Save
        </LoadingButton>
        <NotificationComponent />
        <IconButton
          onClick={handleToggleDrawer(true)}
          color="inherit"
          className="text-primary-main p-0"
        >
          <SvgIcon component={MenuIcon} sx={{ fontSize: 40 }} />
        </IconButton>
      </div>

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

export default TitlePageNavOnMobile;
