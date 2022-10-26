import { Box } from "@mui/material";
import ScriptCard from "@shared/ScriptCard/ScriptCard";
import { IProduct } from "interfaces/product";

interface IProps {
  scripts: IProduct[];
}

const MarketplaceProducts = ({ scripts }: IProps) => {
  return (
    <Box
      className="grid gap-10 px-5 sm:px-10 py-7 md:py-11 max-w-screen-2xl mx-auto"
      gridTemplateColumns={{
        sm: "repeat(auto-fill, minmax(300px, auto))",
      }}
    >
      {scripts.map((script) => (
        <ScriptCard data-aos="fade-up" key={script.id} script={script} />
      ))}
    </Box>
  );
};

export default MarketplaceProducts;
