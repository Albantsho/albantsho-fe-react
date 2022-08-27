import ScriptCard from "@shared/ScriptCard/ScriptCard";

const MarketPlaceProducts = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-5 sm:px-10 py-8 lg:px-32 lg:py-16">
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
    </div>
  );
};

export default MarketPlaceProducts;

