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
      {loading && products.length === 0 ? (
        <h1>loading</h1>
      ) : (
        products.map((product) => (
          <ScriptCard data-aos="fade-up" key={product.id} script={product} />
        ))
      )}
    </Box>
  );
};

export default MarketplaceProducts;
