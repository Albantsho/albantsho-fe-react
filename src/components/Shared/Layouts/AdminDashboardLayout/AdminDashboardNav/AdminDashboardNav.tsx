import { AppBar, Toolbar, type AppBarProps } from "@mui/material";
import { useMemo } from "react";
import AdminDashboardNavOnDesktop from "./AdminDashboardNavOnDesktop/AdminDashboardNavOnDesktop";
import AdminDashboardNavOnMobile from "./AdminDashboardNavOnMobile/AdminDashboardNavOnMobile";

const AdminDashboardNav = ({
  color = "transparent",
  ...props
}: AppBarProps) => {
  const isTransparent = useMemo(() => color === "transparent", [color]);

  return (
    <AppBar
      data-aos="fade-down"
      data-aos-duration="300"
      className="shadow-primary"
      position="absolute"
      elevation={0}
      color={color}
      {...props}
    >
      <Toolbar
        className="py-3 lg:py-4 px-5 sm:px-10  mx-auto w-full justify-between"
        component="nav"
      >
        <AdminDashboardNavOnDesktop />
        <AdminDashboardNavOnMobile isTransparent={isTransparent} />
      </Toolbar>
    </AppBar>
  );
};

export default AdminDashboardNav;
