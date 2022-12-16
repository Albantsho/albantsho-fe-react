import { AppBar, Toolbar, type AppBarProps } from "@mui/material";
import DashboardNavOnDesktop from "./DesktopNav/TitlePageNavOnDesktop";
import DashboardNavOnMobile from "./MobileNav/TitlePageNavOnMobile";

interface IProps {
  loading: boolean;
}

const TitlePageNav = ({ loading }: IProps) => {
  return (
    <AppBar
      data-aos="fade-down"
      data-aos-duration="300"
      position="fixed"
      elevation={0}
      color="inherit"
    >
      <Toolbar
        className="py-3 lg:py-4 px-5 sm:px-10  mx-auto w-full justify-between"
        component="nav"
      >
        <DashboardNavOnDesktop loading={loading} />
        <DashboardNavOnMobile loading={loading} />
      </Toolbar>
    </AppBar>
  );
};

export default TitlePageNav;
