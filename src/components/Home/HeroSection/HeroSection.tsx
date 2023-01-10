import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import ScriptCard from "@shared/ScriptCard/ScriptCard";
import useUserStore from "app/user.store";
import Link from "next/link";
import { animated, useSpring } from "react-spring";
import routes from "routes/routes";
import Bg from "./assets/bg.webp";

const AnimatedScriptCard = animated(ScriptCard);

const HeroSection = () => {
  const lgScreen = useMediaQuery("(min-width: 1024px)");
  const user = useUserStore((state) => state.user);

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
      sx={{
        backgroundImage: `url('${Bg.src}')`,
        "& > .grid": {
          minHeight: { xs: 500, lg: 770 },
        },
      }}
    >
      <div className="grid max-w-screen-2xl mx-auto w-full px-5 sm:px-10">
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
            {!user.emailVerified && (
              <Link legacyBehavior passHref href={routes.register.url}>
                <Button
                  size="large"
                  className="px-8 py-3"
                  variant="contained"
                  color="secondary"
                  disableElevation
                  sx={{
                    fontSize: 16,
                    bgcolor: "transparent",
                    background:
                      "linear-gradient(180deg, #FFAF19 0%, #FFD368 100%)",
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
              </Link>
            )}
          </animated.div>
          {lgScreen && (
            <AnimatedScriptCard
              className="w-full"
              style={cardAnim}
              sx={{
                maxWidth: 395,
                boxShadow: "0px 35px 60px 0px #0000004D",
              }}
              script={{
                _id: "hbnj15",
                tagline:
                  "One platform sets out to enable better stories one script at a time",
                scriptFormat: "Feature film",
                rate: 4,
                title: "Black Onion",
                price: 400,
                reviewed: true,
                image: "",
              }}
              inHome
            />
          )}
        </div>
      </div>
    </Box>
  );
};

export default HeroSection;
