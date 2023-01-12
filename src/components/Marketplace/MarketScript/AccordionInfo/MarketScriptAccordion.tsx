import { Chip } from "@mui/material";
import Typography from "@mui/material/Typography";

import { IFullInformationScript } from "interfaces/script";
import AccordionCustom from "./AccordionCustom/AccordionCustom";
import NotAccessInformation from "./NotAccessInformation/NotAccessInformation";

interface IProps {
  script: IFullInformationScript;
}

export default function MarketScriptAccordion({ script }: IProps) {
  return (
    <div className=" flex-1">
      <AccordionCustom title="LOGLINE">
        {script.logLine ? (
          <Typography variant="body2" className="text-[#484848]">
            {script.logLine}
          </Typography>
        ) : (
          <NotAccessInformation />
        )}
      </AccordionCustom>
      <AccordionCustom title="SYNOPSIS">
        {script.synopsis ? (
          <Typography variant="body2" className="text-[#484848]">
            {script.synopsis}
          </Typography>
        ) : (
          <NotAccessInformation />
        )}
      </AccordionCustom>
      <AccordionCustom title="STORY WORLD">
        {script.storyWorld ? (
          <Typography variant="body2" className="text-[#484848]">
            {script.storyWorld}
          </Typography>
        ) : (
          <NotAccessInformation />
        )}
      </AccordionCustom>
      <AccordionCustom title="MOTIVATION & PERSONAL NOTE">
        {script.motivation ? (
          <Typography variant="body2" className="text-[#484848]">
            {script.motivation}
          </Typography>
        ) : (
          <NotAccessInformation />
        )}
      </AccordionCustom>
      <AccordionCustom title="STORY TOPICS">
        {script.storyTopics.length ? (
          <div className="flex gap-3 flex-wrap">
            {script.storyTopics.map((oneTheme) => (
              <Chip
                key={oneTheme}
                className="text-primary-700 text-sm rounded-3xl bg-tinted-50/60 py-5 px-4"
                size="medium"
                label={oneTheme}
              />
            ))}
          </div>
        ) : (
          <NotAccessInformation />
        )}
      </AccordionCustom>
      <AccordionCustom title="ACT STRUCTURE">
        {script.actStructure ? (
          <Typography variant="body2" className="text-[#484848]">
            {script.actStructure}
          </Typography>
        ) : (
          <NotAccessInformation />
        )}
      </AccordionCustom>
      <AccordionCustom title="INSPIRATION">
        {script.inspiration ? (
          <Typography variant="body2" className="text-[#484848]">
            {script.inspiration}
          </Typography>
        ) : (
          <NotAccessInformation />
        )}
      </AccordionCustom>
    </div>
  );
}
