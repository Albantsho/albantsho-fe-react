import { AppBar, Toolbar, useMediaQuery } from "@mui/material";
import Logo from "@shared/Logo/Logo";
import routes from "routes/routes";
import DesktopNav from "./DesktopNav/DesktopNav";
import MobileNav from "./MobileNav/MobileNav";

const links = [
  { title: "Home", href: routes.home.url },
  { title: "About Us", href: routes.aboutUs.url },
  { title: "Blog", href: routes.blog.url },
  { title: "FAQ", href: routes.FAQs.url },
];

const LandingNav = () => {
  const xlScreen = useMediaQuery("(min-width: 1024px)");

  return (
    <AppBar
      position="absolute"
      elevation={0}
      className="bg-white"
      color="transparent"
    >
      <Toolbar
        className="py-4 px-5 sm:px-10 max-w-screen-2xl w-full mx-auto justify-between"
        component="nav"
      >
        <Logo className="mr-12 text-primary-700" />
        {xlScreen ? <DesktopNav links={links} /> : <MobileNav links={links} />}
      </Toolbar>
    </AppBar>
  );
};

export default LandingNav;
