import { AppBar, Toolbar } from "@mui/material";
import Logo from "@shared/Logo/Logo";

const LandingNav = () => {
  return (
    <AppBar position="absolute" elevation={0} color="transparent">
      <Toolbar
        className="py-10 px-5 sm:px-10 max-w-screen-2xl w-full mx-auto justify-between"
        component="nav"
      >
        <Logo />
      </Toolbar>
    </AppBar>
  );
};

export default LandingNav;
