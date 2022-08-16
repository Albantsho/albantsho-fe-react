import { Box, Typography } from "@mui/material";

const HeroSection = () => {
  return (
    <Box
      component="section"
      id="hero-section"
      sx={{
        backgroundImage: "url('/assets/images/julie.jpg')",
        minHeight: { xs: 375, md: 620 },
      }}
      className="bg-cover bg-left grid place-content-center"
    >
      <Typography variant="h1" color="#fff" className="futura font-medium">
        About Us
      </Typography>
    </Box>
  );
};

export default HeroSection;
