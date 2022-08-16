import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import ScriptCard from "@shared/ScriptCard/ScriptCard";
import { animated, useSpring } from "react-spring";
import Bg from "./assets/bg.png";

const AnimatedScriptCard = animated(ScriptCard);

const HeroSection = () => {
  const lgScreen = useMediaQuery("(min-width: 1024px)");

  const titleAnim = useSpring({
    from: { x: -100, opacity: 0 },
    to: { x: 0, opacity: 1 },
  });

  const cardAnim = useSpring({
    from: { x: 100, opacity: 0 },
    to: { x: 0, opacity: 1 },
  });

  return (
    <Box
      className="bg-cover bg-left"
      component="section"
      id="hero-section"
      sx={{ backgroundImage: `url('${Bg.src}')` }}
    >
      <div className="grid min-h-[770px] max-w-screen-2xl mx-auto w-full px-5 sm:px-10">
        <div className="flex items-center max-w-screen-xl w-full justify-between gap-20">
          <animated.div style={titleAnim} className="text-white max-w-[450px]">
            <Typography
              variant="display"
              component="h1"
              className="leading-none grotesk"
              gutterBottom
            >
              Reach your great story
            </Typography>
            <Typography variant="h6" paragraph gutterBottom fontWeight={400}>
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
          </animated.div>
          {lgScreen && (
            <AnimatedScriptCard
              className="max-w-[395px] w-full"
              style={cardAnim}
              sx={{
                boxShadow: "0px 35px 60px 0px #0000004D",
              }}
              script={{
                genres: ["Feature film"],
                title: "Black Onion",
                desc: "One platform sets out to enable better stories one script at a time.",
                rate: 4,
                image: "/assets/images/julie.jpg",
                reviewed: true,
              }}
            />
          )}
        </div>
      </div>
    </Box>
  );
};

export default HeroSection;
