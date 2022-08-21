import { Box, Typography } from "@mui/material";

interface IProps {
  title: string;
}

const HeroSection = ({ title }: IProps) => {
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
        {title}
      </Typography>
    </Box>
  );
};

export default HeroSection;
