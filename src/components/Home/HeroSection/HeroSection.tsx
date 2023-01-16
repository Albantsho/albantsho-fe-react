import {
  Box,
  Button,
  Card,
  Skeleton,
  Typography,
  useMediaQuery,
} from "@mui/material";
import ScriptCard from "@shared/ScriptCard/ScriptCard";
import useScriptsApi from "apis/Scripts.api";
import useUserStore from "app/user.store";
import { IScript } from "interfaces/script";
import Link from "next/link";
import { useState, useEffect } from "react";
import { animated, useSpring } from "react-spring";
import routes from "routes/routes";
import Bg from "./assets/bg.webp";

const AnimatedScriptCard = animated(ScriptCard);

const HeroSection = () => {
  const lgScreen = useMediaQuery("(min-width: 1024px)");
  const user = useUserStore((state) => state.user);
  const { getAllScripts } = useScriptsApi();
  const [bestScript, setBestScript] = useState<IScript>({} as IScript);
  const [loading, setLoading] = useState(false);

  const titleAnim = useSpring({
    from: { x: -100, opacity: 0 },
    to: { x: 0, opacity: 1 },
  });

  const cardAnim = useSpring({
    from: { x: 100, opacity: 0 },
    to: { x: 0, opacity: 1 },
  });

  useEffect(() => {
    async function getBestScriptFunc() {
      try {
        setLoading(true);
        const res = await getAllScripts("rate=true");
        setBestScript(res.data.scripts[0]);
        setLoading(false);
      } catch (error) {
        ("");
      }
    }
    getBestScriptFunc();
  }, []);

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
  />;

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
          {lgScreen &&
            (loading ? (
              <Card
                className="rounded-lg w-96"
                sx={{ boxShadow: " 0px 2px 7px rgba(117, 88, 162, 0.15)" }}
              >
                <Skeleton
                  sx={{ height: 240 }}
                  animation="wave"
                  variant="rectangular"
                />
                <div className="flex justify-between items-center">
                  <Skeleton
                    className="mx-5"
                    animation="wave"
                    height={40}
                    width="20%"
                    style={{ marginBottom: 3, marginTop: 3 }}
                  />
                  <Skeleton
                    className="mx-5"
                    variant="circular"
                    width={20}
                    height={20}
                    style={{ marginBottom: 3, marginTop: 3 }}
                  />
                </div>
                <Skeleton
                  className="mx-5"
                  animation="wave"
                  height={10}
                  width="50%"
                  style={{ marginBottom: 3, marginTop: 3 }}
                />
                <Skeleton className="mx-5" animation="wave" height={5} />
                <Skeleton className="mx-5" animation="wave" height={5} />
                <Skeleton className="mx-5" animation="wave" height={5} />
                <Skeleton className="mx-5 mb-3" animation="wave" height={5} />
                <Skeleton
                  className="mx-5"
                  animation="wave"
                  height={30}
                  width="30%"
                  style={{ marginBottom: 3, marginTop: 3 }}
                />
                <div className="flex justify-between">
                  <Skeleton
                    className="mx-5"
                    animation="wave"
                    height={30}
                    width="20%"
                    style={{ marginBottom: 3, marginTop: 3 }}
                  />
                  <Skeleton
                    className="mx-5"
                    animation="wave"
                    height={30}
                    width="20%"
                    style={{ marginBottom: 3, marginTop: 3 }}
                  />
                </div>
              </Card>
            ) : (
              <AnimatedScriptCard
                key={bestScript._id}
                className="w-full"
                style={cardAnim}
                sx={{
                  maxWidth: 395,
                  boxShadow: "0px 35px 60px 0px #0000004D",
                }}
                script={bestScript}
                inHome
              />
            ))}
        </div>
      </div>
    </Box>
  );
};

export default HeroSection;
