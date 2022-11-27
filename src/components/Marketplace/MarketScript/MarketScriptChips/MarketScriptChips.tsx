import { Chip } from "@mui/material";
import { IFullInformationScript } from "interfaces/script";

interface IProps {
  script: IFullInformationScript;
}

const MarketScriptChips = ({ script }: IProps) => {
  return (
    <div className="md:w-5/12 space-y-6 lg:pr-4">
      <div className="flex gap-2 flex-wrap">
        {script.theme.map((oneTheme) => (
          <Chip
            key={oneTheme}
            size="medium"
            className="bg-tinted-50/60 px-1 py-5 sm:px-3 sm:py-5 text-sm"
            label={oneTheme}
          />
        ))}
      </div>
      <div className="flex w-full flex-wrap border rounded-md">
        <div className="min-w-[220px] border px-3 py-5 flex-1 text-sm   text-center">
          Production Cost - {script.estimated_budget}
        </div>

        <div className="min-w-[220px] border px-3 py-5 flex-1 text-sm  text-center">
          No of Cast - {script.primary_cast}
        </div>
      </div>
    </div>
  );
};

export default MarketScriptChips;
