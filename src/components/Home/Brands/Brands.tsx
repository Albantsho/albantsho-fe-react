import { Typography } from "@mui/material";
import { useSpring, animated } from "react-spring";

const Brands = () => {
  const styles = useSpring({
    loop: true,
    from: { translateX: "0%" },
    translateX: "-100%",
    config: {
      duration: 20000,
    },
  });

  return (
    <section id="brands-section" className="bg-secondary-50 py-4 full-width">
      <div className="max-w-screen-2xl mx-auto">
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
            style={styles}
            src="/assets/images/brands.png"
            alt="brands"
            className="pr-14"
          />
          <animated.img
            style={styles}
            src="/assets/images/brands.png"
            alt="brands"
            className="pr-14"
          />
        </div>
      </div>
    </section>
  );
};

export default Brands;
