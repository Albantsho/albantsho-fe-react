import { Box, Typography } from "@mui/material";
import ScriptCard from "@shared/ScriptCard/ScriptCard";

const TrendingStories = () => {
  return (
    <section
      id="trending-stories"
      className="px-5 sm:px-10 max-w-screen-2xl mx-auto mt-12 md:mt-28 mb-12 md:mb-32"
    >
      <Typography
        data-aos="fade-down"
        variant="h4"
        className="grotesk text-center mb-4 md:mb-8"
        color="primary.main"
      >
        Trending in Story Base
      </Typography>
      <Box
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
              image: "/assets/images/julie.png",
              rate: 4,
              title: "Lorem Ipsum",
              price: 100,
              reviewed: true,
            }}
          />
        ))}
      </Box>
    </section>
  );
};

export default TrendingStories;
