import MenuIcon from "@assets/icons/menu.svg";
import { Drawer, IconButton, SvgIcon } from "@mui/material";
import Logo from "@shared/Logo/Logo";
import { AiOutlineClose } from "react-icons/ai";
import ProfileMenu from "../../../../ProfileMenu/ProfileMenu";
import useMobileNavDashboard from "./useMobileNavAdminDashboard";

interface IProps {
  isTransparent: boolean;
}

const AdminDashboardNavOnMobile = ({ isTransparent }: IProps) => {
  const { handleToggleDrawer, open } = useMobileNavDashboard();

  return (
    <div className="flex items-center justify-between lg:hidden w-full">
      <Logo className={isTransparent ? "text-white" : "text-primary-main"} />
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
      </Drawer>
    </div>
  );
};

export default AdminDashboardNavOnMobile;
