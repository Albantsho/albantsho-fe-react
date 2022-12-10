import { AppBar, Toolbar, useMediaQuery } from "@mui/material";
import Logo from "@shared/Logo/Logo";
import routes from "routes/routes";
import DesktopNav from "./DesktopNav/DesktopNav";
import MobileNav from "./MobileNav/MobileNav";

const links = [
  { title: "Story Base", href: "#" },
  { title: "Write", href: "#" },
  { title: "List", href: routes.marketplace.url },
  { title: "Blog", href: routes.blog.url },
];

const LandingNav = () => {
  const xlScreen = useMediaQuery("(min-width: 1280px)");

  return (
    <AppBar position="absolute" elevation={0} color="transparent">
      <Toolbar
        className="py-10 px-5 sm:px-10 max-w-screen-2xl w-full mx-auto justify-between"
        component="nav"
      >
        <Logo className="mr-12 text-white" />
        {xlScreen ? <DesktopNav links={links} /> : <MobileNav links={links} />}
      </Toolbar>
    </AppBar>
  );
};

export default LandingNav;
