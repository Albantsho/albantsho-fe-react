import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import ScriptCard from "@shared/ScriptCard/ScriptCard";
import DesktopNav from "../LandingNav/DesktopNav/DesktopNav";
import MobileNav from "../LandingNav/MobileNav/MobileNav";

const HeroSection = () => {
  const mdScreen = useMediaQuery("(min-width: 1280px)");

  return (
    <Box
      className="bg-cover bg-left full-width"
      component="section"
      id="hero-section"
      sx={{ backgroundImage: `url('/assets/images/hero-section-bg.png')` }}
    >
      <div className="flex flex-col min-h-[770px] max-w-screen-2xl mx-auto w-full px-5 sm:px-10">
        {mdScreen ? <DesktopNav /> : <MobileNav />}
        <div className="flex flex-1 items-center max-w-screen-xl w-full justify-between gap-20">
          <div className="text-white max-w-[450px]">
            <Typography
              variant="display"
              component="h1"
              fontFamily="Space Grotesk"
              className="leading-none"
              gutterBottom
            >
              Reach your great story
            </Typography>
            <Typography variant="h6" paragraph gutterBottom>
              Write better screenplays and be discovered by top producers to
              bring them to life.
            </Typography>
            <Button
              size="large"
              className="px-8 py-3"
              variant="contained"
              color="secondary"
              disableElevation
              sx={{
                fontSize: 16,
                bgcolor: "transparent",
                background: "linear-gradient(180deg, #FFAF19 0%, #FFD368 100%)",
                borderRadius: 2,
                "&:hover": {
                  color: "secondary.main",
                  background: "transparent",
                  border: "1px solid",
                  borderColor: "secondary.main",
                },
              }}
            >
              Join the tribe
            </Button>
          </div>
          <div className="max-w-[395px] w-full hidden lg:block">
            <ScriptCard
              sx={{
                boxShadow: "0px 35px 60px 0px #0000004D",
                border: "3px solid",
                borderColor: "primary.main",
              }}
              genres={["Feature film"]}
              title="Black Onion"
              desc="One platform sets out to enable better stories one script at a time."
              rate={4}
              image="/assets/images/julie.png"
            />
          </div>
        </div>
      </div>
    </Box>
  );
};

export default HeroSection;
