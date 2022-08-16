import { Box } from "@mui/material";

const HeroSection = () => {
  return (
    <Box
      component="section"
      id="hero-section"
      sx={{
        backgroundImage: "url('/assets/images/julie.jpg')",
        minHeight: { xs: 375, md: 620 },
      }}
      className="bg-cover"
    ></Box>
  );
};

export default HeroSection;
