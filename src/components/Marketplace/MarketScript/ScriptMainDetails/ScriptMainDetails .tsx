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
        <AccordionDetails className="px-5 sm:px-10 py-5 bg-tinted-50/60">
          <article className="prose lg:prose-lg prose-h1:text-primary-700">
            ""
          </article>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default ScriptMainDetails;
