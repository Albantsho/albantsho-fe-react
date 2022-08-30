import { Box } from "@mui/material";
import ScriptCard from "@shared/ScriptCard/ScriptCard";

const MarketPlaceProducts = () => {
  return (
    <Box
      className="grid gap-10 px-5 sm:px-10 py-7 md:py-11 max-w-screen-2xl mx-auto"
      gridTemplateColumns={{
        sm: "repeat(auto-fill, minmax(300px, auto))",
      }}
    >
      {Array.from(new Array(6)).map((_, i) => (
        <ScriptCard
          data-aos="fade-up"
          key={i}
          script={{
            desc: "Story about a man who lived on long beach",
            genres: ["Tv pilot"],
            image: "/assets/images/beauty.jpg",
            rate: 4,
            title: "The Long Man of Long Beach",
            price: 1000,
            reviewed: true,
          }}
        />
      ))}
    </Box>
  );
};

export default MarketPlaceProducts;
