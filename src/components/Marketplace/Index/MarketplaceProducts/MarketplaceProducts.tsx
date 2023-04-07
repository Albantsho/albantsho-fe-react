import { Box } from "@mui/material";
import ScriptCard from "@shared/ScriptCard/ScriptCard";
import { IScript } from "interfaces/script";

interface IProps {
  scripts: IScript[];
}

const MarketplaceProducts = ({ scripts }: IProps) => {
  return (
    <Box className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 px-5 sm:px-10 py-7 md:py-11 max-w-screen-xl mx-auto">
      {scripts.map((script) => (
        <ScriptCard
          className="min-w-full flex-1"
          data-aos="fade-up"
          key={script._id}
          script={script}
        />
      ))}
    </Box>
  );
};

export default MarketplaceProducts;
