import { Box } from "@mui/material";
import ScriptCard from "@shared/ScriptCard/ScriptCard";
import useMarketplaceProducts from "./useMarketplaceProducts";

const MarketplaceProducts = () => {
  const { loading, products } = useMarketplaceProducts();

  return (
    <Box
      className="grid gap-10 px-5 sm:px-10 py-7 md:py-11 max-w-screen-2xl mx-auto"
      gridTemplateColumns={{
        sm: "repeat(auto-fill, minmax(300px, auto))",
      }}
    >
      {!loading ? (
        products.map((product) => (
          <ScriptCard
            data-aos="fade-up"
            key={product.id}
            script={{
              productId: product.script_id,
              genres: [product.script_format],
              image: product.script_image,
              rate: 4,
              title: product.title,
              price: product.script_price,
              reviewed: product.user !== null ? true : false,
              desc: product.story_world,
            }}
          />
        ))
      ) : (
        <h2>loading</h2>
      )}
    </Box>
  );
};

export default MarketplaceProducts;
