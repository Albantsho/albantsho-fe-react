import { Typography } from "@mui/material";
import Image from "next/image";
import PreviewImage from "./assets/preview.png";

const TrendingStories = () => {
  return (
    <section
      id="trending-stories"
      className="px-5 sm:px-10 max-w-screen-2xl mx-auto mt-12 md:mt-28 mb-12 md:mb-32"
      data-aos="fade-down"
    >
      <Typography
        variant="h4"
        className="grotesk text-center mb-4 md:mb-8 leading-normal"
        color="primary.main"
      >
        Albantsho Story Base
      </Typography>
      <div className="flex justify-center overflow-hidden relative">
        <div className="absolute inset-0 bg-primary-700/60 z-50 rounded-xl grid place-content-center">
          <Typography
            color="secondary.main"
            variant="display"
            component="p"
            className="text-center leading-normal"
          >
            Coming Soon
          </Typography>
        </div>
        <Image src={PreviewImage} alt="Stories section preview" />
      </div>
    </section>
  );
};

export default TrendingStories;
