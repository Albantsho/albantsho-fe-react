import { Box, Typography } from "@mui/material";
import { animated, useSpring } from "react-spring";
import BrandsImg from "./assets/brands.png";

const Brands = () => {
  const fadeUpAnim = useSpring({
    from: { y: 100, opacity: 0 },
    to: { y: 0, opacity: 1 },
  });
  const newsTickerAnim = useSpring({
    loop: true,
    from: { translateX: "0%" },
    translateX: "-100%",
    config: {
      duration: 20000,
    },
  });

  return (
    <animated.section
      style={fadeUpAnim}
      id="brands-section"
      className="bg-secondary-50 py-4"
    >
      <div className="max-w-screen-2xl px-5 sm:px-10 mx-auto">
        <Typography
          className="text-center grotesk"
          variant="h4"
          color="primary.500"
          gutterBottom
        >
          Brands
        </Typography>
        <Box
          sx={{ maxWidth: 990, img: { maxWidth: "none", height: "auto" } }}
          className="flex overflow-hidden mx-auto"
        >
          <animated.img
            style={newsTickerAnim}
            src={BrandsImg.src}
            alt="brands"
            className="pr-9"
          />
          <animated.img
            style={newsTickerAnim}
            src={BrandsImg.src}
            alt="brands"
            className="pr-9"
          />
        </Box>
      </div>
    </animated.section>
  );
};

export default Brands;
