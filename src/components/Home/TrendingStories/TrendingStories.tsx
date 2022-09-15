import { Typography } from "@mui/material";
import Image from "next/image";
import TrendingStoriesPreview from "./assets/preview.png";

const TrendingStories = () => {
  return (
    <section
      id="trending-stories"
      className="px-5 sm:px-10 max-w-screen-2xl mx-auto mt-12 md:mt-28 mb-12 md:mb-32"
      data-aos="fade-up"
    >
      <Typography
        variant="h4"
        className="grotesk text-center mb-4 md:mb-8 leading-normal"
        color="primary.main"
      >
        Albantsho Story Base
      </Typography>
      <div className="flex justify-center relative rounded-3xl overflow-hidden">
        <Image src={TrendingStoriesPreview} alt="Story base preview" />
        <div className="absolute inset-0 bg-black/80 grid place-content-center text-center">
          <Typography
            variant="display"
            color="secondary"
            className="leading-none"
          >
            Coming Soon
          </Typography>
        </div>
      </div>
      {/* <Box
        className="grid gap-3 md:gap-12"
        gridTemplateColumns={{
          sm: "repeat(auto-fill, minmax(300px, auto))",
        }}
      >
        {Array.from(new Array(6)).map((_, i) => (
          <ScriptCard
            data-aos="fade-up"
            key={i}
            script={{
              desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.  saeperecusandae perspiciatis doloribus, nisi quibusdam!",
              genres: ["Lorem"],
              image: "/assets/images/julie.jpg",
              rate: 4,
              title: "Lorem Ipsum",
              price: 100,
              reviewed: true,
            }}
          />
        ))}
      </Box> */}
    </section>
  );
};

export default TrendingStories;
