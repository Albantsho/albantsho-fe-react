import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import useDraftApi from "apis/Draft.api";
import parse from "html-react-parser";
import { IFullInformationScript } from "interfaces/script";
import { useRouter } from "next/router";
import { BiChevronDown } from "react-icons/bi";
import { useQuery } from "react-query";

interface IProps {
  script: IFullInformationScript;
  writer: {
    _id: string;
    firstName: string;
    lastName: string;
  } | null;
}

const ScriptMainDetails = ({ script, writer }: IProps) => {
  const { getOneDraft } = useDraftApi();
  const { query } = useRouter();
  const scriptID = typeof query?.id === "string" ? query.id : "";

  const { data: draftFile } = useQuery(
    ["draft", scriptID],
    () => getOneDraft(scriptID),
    {
      enabled: script.scriptFileType === "application/octet-stream",
      refetchOnWindowFocus: false,
    }
  );
  console.log(draftFile);
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
            {script.scriptSnippet && parse(script.scriptSnippet)}
            {script.scriptFileType === "application/octet-stream" &&
              draftFile && (
                <div className="px-10 py-3" dangerouslySetInnerHTML={{ __html: draftFile.slice(0,3500) }} />
              )}
          </article>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default ScriptMainDetails;
