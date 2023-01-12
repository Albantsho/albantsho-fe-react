import { LoadingButton } from "@mui/lab";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  SvgIcon,
  Typography,
} from "@mui/material";
import TextEditor from "@shared/TextEditor/TextEditor";
import { CustomElement } from "interfaces/slate";
import { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { deserializeBlogContent } from "utils/deserialize-blog-content";

interface IProps {
  title: string;
  description?: string;
  editorValue: (value: string) => void;
  initialValue: string;
  saveValue:
    | ((
        setLoading: React.Dispatch<React.SetStateAction<boolean>>
      ) => () => Promise<void>)
    | (() => () => Promise<void>);
}

const QuestionnaireAccordion = ({
  title,
  description,
  editorValue,
  saveValue,
  initialValue,
}: IProps) => {
  const [expanded, setExpanded] = useState(false);
  const [loading, setLoading] = useState(false);
  const htmlContent = new DOMParser().parseFromString(
    initialValue,
    "text/html"
  );

  const handleExpandedStatus = () => setExpanded((prev) => !prev);
  const closeAndCancel = () => {
    setExpanded(false);
  };

  const initialValueMain: CustomElement[] = initialValue
    ? deserializeBlogContent(htmlContent.body)
    : [
        {
          type: "paragraph",
          children: [{ text: "" }],
        },
      ];

  return (
    <Accordion
      sx={{
        "&.MuiPaper-root": { borderRadius: "8px" },
        "&:before": { display: "none" },
      }}
      className="px-6 md:px-8 max-w-5xl shadow-primary rounded-lg"
      expanded={expanded}
    >
      <AccordionSummary
        onClick={handleExpandedStatus}
        className="py-6 md:py-9 lg:py-12 px-0 rounded-lg flex-col sm:flex-row sm:items-start gap-y-3"
        sx={{ "& .MuiAccordionSummary-content": { m: 0 } }}
        expandIcon={
          <SvgIcon color="primary" fontSize="large" component={BiChevronDown} />
        }
      >
        <div className="text-center sm:text-start sm:pr-6">
          <Typography
            variant="h4"
            color="primary"
            className="leading-none futura font-medium"
          >
            {title}
          </Typography>
          <Typography
            variant="h6"
            color="primary"
            className="leading-none futura font-normal mt-2"
          >
            {description}
          </Typography>
        </div>
      </AccordionSummary>
      <AccordionDetails className="rounded-lg px-0 pb-6 md:pb-9 lg:pb-12">
        <TextEditor editorValue={editorValue} initialValue={initialValueMain} />
        <div className="flex py-6 gap-x-5 flex-nowrap justify-center sm:justify-start">
          <LoadingButton
            loading={loading}
            onClick={saveValue(setLoading)}
            disableElevation
            variant="contained"
            className="rounded-md py-3 px-6"
          >
            Save
          </LoadingButton>
          <Button
            onClick={closeAndCancel}
            variant="outlined"
            sx={{ border: "1px solid #7953B5" }}
            className="bg-white text-primary-700 rounded-md py-3 px-6"
          >
            Cancel
          </Button>
        </div>
      </AccordionDetails>
    </Accordion>
  );
};

export default QuestionnaireAccordion;
