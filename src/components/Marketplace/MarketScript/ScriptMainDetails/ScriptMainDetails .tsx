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
  writer: {
    _id: string;
    firstName: string;
    lastName: string;
  } | null;
}

const ScriptMainDetails = ({ script, writer }: IProps) => {
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
              Written by{" "}
              {writer
                ? `${writer.firstName} ${writer.lastName}`
                : script.writtenBy}
            </Typography>
            {script.scriptSnippet &&
              script.scriptFileType === "text/plain" &&
              !script.scriptIsUploaded &&
              parse(script.scriptSnippet)}
            {(script.scriptFileType === "application/octet-stream" ||
              script.scriptFileType === "application/pdf") &&
              script.scriptSnippet && (
                <div
                  className="px-10 py-3"
                  dangerouslySetInnerHTML={{ __html: script.scriptSnippet }}
                />
              )}
            {script.scriptFileType === "text/plain" &&
              script.scriptIsUploaded &&
              script.scriptSnippet && (
                <div
                  className="px-10 py-3 leading-8"
                  dangerouslySetInnerHTML={{ __html: script.scriptSnippet }}
                />
              )}
          </article>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default ScriptMainDetails;
