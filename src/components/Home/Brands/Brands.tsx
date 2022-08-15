import { Typography } from "@mui/material";
import { useSpring, animated, useChain, useSpringRef } from "react-spring";

const Brands = () => {
  const fadeUpRef = useSpringRef();
  const fadeUpAnim = useSpring({
    from: { y: 100, opacity: 0 },
    to: { y: 0, opacity: 1 },
    ref: fadeUpRef,
  });
  const newsTickerRef = useSpringRef();
  const newsTickerAnim = useSpring({
    loop: true,
    from: { translateX: "0%" },
    translateX: "-100%",
    config: {
      duration: 20000,
    },
    ref: newsTickerRef,
  });

  useChain([fadeUpRef, newsTickerRef], [0, 0.5]);

  return (
    <section id="brands-section" className="bg-secondary-50 py-4 full-width">
      <animated.div style={fadeUpAnim} className="max-w-screen-2xl mx-auto">
        <Typography
          className="text-center"
          variant="h4"
          fontFamily="Space Grotesk"
          color="primary.main"
          gutterBottom
        >
          Brands
        </Typography>
        <div className="flex max-w-[990px] overflow-hidden mx-auto">
          <animated.img
            style={newsTickerAnim}
            src="/assets/images/brands.png"
            alt="brands"
            className="pr-14"
          />
          <animated.img
            style={newsTickerAnim}
            src="/assets/images/brands.png"
            alt="brands"
            className="pr-14"
          />
        </div>
      </animated.div>
    </section>
  );
};

export default Brands;
