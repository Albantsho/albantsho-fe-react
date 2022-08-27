import { Chip } from "@mui/material";

const MarketScriptChips = () => {
  return (
    <div className="md:w-5/12 space-y-6">
      <div className="flex gap-2 flex-wrap">
        <Chip size="medium" label="High Concept" />
        <Chip size="medium" label="High Concept" />
        <Chip size="medium" label="High Concept" />
      </div>
      <div className="flex w-full">
        <div className="border px-3 py-5 w-1/2 text-sm  rounded-md text-center" >Production Cost - High</div>
        <div className="border px-3 py-5 w-1/2 text-sm  rounded-md text-center" >No of Cast - 20</div>
      </div>
    </div>
  );
};

export default MarketScriptChips;
