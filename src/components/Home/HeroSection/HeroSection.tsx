import { Box, useMediaQuery } from "@mui/material";
import Background from "assets/images/hero-section-bg.png";
import DesktopNav from "../LandingNav/DesktopNav/DesktopNav";
import MobileNav from "../LandingNav/MobileNav/MobileNav";

const HeroSection = () => {
  const mdScreen = useMediaQuery("(min-width: 1280px)");

  return (
    <Box
      className="min-h-[770px] bg-cover bg-right"
      component="section"
      id="hero-section"
      sx={{ backgroundImage: `url(${Background.src})` }}
    >
      {mdScreen ? <DesktopNav /> : <MobileNav />}
    </Box>
  );
};

export default HeroSection;
