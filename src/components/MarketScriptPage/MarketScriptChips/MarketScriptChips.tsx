import { Chip } from "@mui/material";

const MarketScriptChips = () => {
  return (
    <div className="md:w-5/12 space-y-6">
      <div className="flex gap-2 flex-wrap">
        <Chip size="medium" className="bg-tinted-50/30 px-1 py-5 sm:px-3 sm:py-5 text-sm" label="High Concept" />
        <Chip size="medium" className="bg-tinted-50/30 px-1 py-5 sm:px-3 sm:py-5 text-sm" label="Romance" />
        <Chip size="medium" className="bg-tinted-50/30 px-1 py-5 sm:px-3 sm:py-5 text-sm" label="Comedy" />
      </div>
      <div className="flex w-full flex-wrap border rounded-md">
        <div className="min-w-[220px] border px-3 py-5 flex-1 text-sm   text-center">
          Production Cost - High
        </div>
       
        <div className="min-w-[220px] border px-3 py-5 flex-1 text-sm  text-center">
          No of Cast - 20
        </div>
      </div>
    </div>
  );
};

export default MarketScriptChips;
