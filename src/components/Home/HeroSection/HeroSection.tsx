import { Box } from "@mui/material";
import Background from "assets/images/hero-section-bg.png";
import LandingNav from "../Nav/LandingNav";

const HeroSection = () => {
  return (
    <Box
      className="min-h-[770px] bg-cover bg-right"
      component="section"
      id="hero-section"
      sx={{ backgroundImage: `url(${Background.src})` }}
    >
      <LandingNav />
    </Box>
  );
};

export default HeroSection;
