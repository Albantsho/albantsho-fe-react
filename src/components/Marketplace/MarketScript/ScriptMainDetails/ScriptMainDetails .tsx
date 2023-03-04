import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import parse from "html-react-parser";
import { IFullInformationScript } from "interfaces/script";
import { BiChevronDown } from "react-icons/bi";

interface IProps {
  script: IFullInformationScript;
}

const ScriptMainDetails = ({ script }: IProps) => {
  return (
    <div className="px-5 sm:px-10 py-10  md:max-w-3xl mx-auto max-w-screen-md">
      <Accordion
        sx={{ "&.MuiAccordion-root": { border: "none" } }}
        className="border-none mb-20  overflow-hidden shadow-none"
      >
        <AccordionSummary
          className="bg-primary-700"
          expandIcon={<BiChevronDown className="w-8 h-8 text-[#F7F5F8]" />}
          sx={{ "&.MuiAccordionSummary-root": { borderRadius: "4px" } }}
        >
          <Typography
            sx={{
              "&.MuiTypography-root": {
                textAlign: { xs: "center", md: "start" },
                width: { xs: "100%" },
              },
            }}
            variant="button"
            color="white"
            className="font-bold"
          >
            SCRIPT
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="py-16 bg-tinted-50/60">
          <article className="prose lg:prose-lg prose-p:text-primary-700">
            <Typography
              variant="h5"
              className="px-10 font-normal text-primary-700 leading-normal"
            >
              {script.title}
            </Typography>
            <Typography
              variant="h6"
              className="px-10 font-normal text-primary-700 leading-normal"
            >
              Written by {script.writtenBy}
            </Typography>
            {parse(script.scriptPart as string)}
          </article>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default ScriptMainDetails;
