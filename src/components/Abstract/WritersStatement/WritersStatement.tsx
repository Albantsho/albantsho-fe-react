import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  LinearProgress,
  SvgIcon,
  Typography,
} from "@mui/material";
import Btn from "@shared/Btn/Btn";
import CustomInput from "@shared/CustomInput/CustomInput";
import { useState } from "react";
import { RiUploadLine } from "react-icons/ri";

const WritersStatement = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <Typography
        width="100%"
        variant="h6"
        color="primary.700"
        className="futura font-medium"
      >
        Character Bible
      </Typography>

      <Typography
        variant="body2"
        className="text-neutral-700 mb-4 sm:mb-6 lg:mb-10 max-w-[290px] md:max-w-full"
      >
        The personalities that make up your story
      </Typography>

      <Accordion
        expanded={expanded}
        onChange={() => setExpanded(!expanded)}
        sx={{
          "&:before": { display: "none" },
          "& .MuiButtonBase-root": { border: "1px solid #D9D9D9" },
        }}
        className="shadow-sm mb-4 md:mb-5 rounded-md"
      >
        <AccordionSummary
          sx={{
            "&.MuiAccordionSummary-root": {
              backgroundColor: "#fff",
              marginBottom: "-8px",
            },
          }}
          className="rounded-lg px-3  lg:px-6  py-2 border"
        >
          <div className="flex gap-6 flex-wrap items-center md:gap-8  md:px-7 ">
            <Typography variant="body2" className="text-tinted-500">
              Is this an adaptation?
            </Typography>
            <div className="flex gap-4">
              <Btn
                sx={{ "&.MuiButtonBase-root": { border: "none" } }}
                className="rounded-full text-white"
              >
                Yes
              </Btn>
              <Btn
                sx={{ "&.MuiButtonBase-root": { border: "1px solid #7953B5" } }}
                className="rounded-full bg-white text-primary-700"
              >
                No
              </Btn>
            </div>
          </div>
        </AccordionSummary>
        <AccordionDetails className="rounded-md pt-3 md:pt-5 bg-primary-dark/95 py-6">
          <div className="flex flex-col md:flex-row md:px-7 items-center md:gap-6">
            <div className="flex gap-2 mb-8 mt-6 items-end flex-1">
              <SvgIcon className="text-white" component={RiUploadLine} />
              <Typography variant="body2" className="text-white">
                Upload permission to adapt
              </Typography>
            </div>
            <LinearProgress
              className="w-full md:flex-1"
              sx={{
                "&.MuiLinearProgress-root": {
                  borderRadius: "8px",
                },
                "&.MuiLinearProgress-colorPrimary": {
                  backgroundColor: "inherit",
                  border: "1px solid #fff",
                },
                "& .MuiLinearProgress-barColorPrimary": {
                  backgroundColor: "#fff",
                },
              }}
              value={60}
              variant="determinate"
            />
          </div>
        </AccordionDetails>
      </Accordion>

      <div className="flex items-start flex-col justify-start gap-2 mb-3 md:mb-5">
        <label htmlFor="character-bible" className="futura font-medium">
          Character Bible<span className="text-error-700">*</span>
        </label>
        <CustomInput
          sx={{
            "& ::placeholder": { color: "#B7B7B7 !important" },
          }}
          multiline
          rows={3}
          placeholder="List a few things that inspired this story, could be other films,
          books, true life experience… "
          fullWidth
          id="character-bible"
          variant="outlined"
          size="medium"
        />
      </div>

      <div className="flex items-start flex-col justify-start gap-2 mb-3 md:mb-5">
        <label htmlFor="motivation" className="futura font-medium">
          Motivation<span className="text-error-700">*</span>
        </label>
        <CustomInput
          sx={{
            "& ::placeholder": { color: "#B7B7B7 !important" },
          }}
          multiline
          rows={3}
          placeholder="WHY TELL THIS STORY? What impact do you hope it would have on the audience?"
          fullWidth
          id="motivation"
          variant="outlined"
          size="medium"
        />
      </div>
    </>
  );
};

export default WritersStatement;
