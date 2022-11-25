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
import { IAbstractFormValues } from "interfaces/abstract";
import type { FieldErrorsImpl, UseFormRegister } from "react-hook-form";
interface IProps {
  register: UseFormRegister<IAbstractFormValues>;
  errors: Partial<FieldErrorsImpl<IAbstractFormValues>>;
}

const WritersStatement = ({ errors, register }: IProps) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <Typography
        variant="h5"
        color="primary.700"
        className="futura font-medium leading-normal"
      >
        Writers Statement
      </Typography>

      <Typography variant="body1" className="text-neutral-700 mb-6 lg:mb-10">
        Beyond the passion of storytelling, there is purpose.
      </Typography>

      <Accordion
        expanded={expanded}
        onChange={() => setExpanded(!expanded)}
        sx={{
          "&:before": { display: "none" },
          "& .MuiButtonBase-root": { border: "1px solid #D9D9D9" },
        }}
        className="shadow-sm  rounded-md"
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
            <Typography variant="body1" className="text-tinted-500">
              Is this an adaptation?
            </Typography>
            <div className="flex gap-4">
              <Btn
                sx={{ "&.MuiButtonBase-root": { border: "none" } }}
                className="rounded-full text-white px-6 py-3 md:px-8 md:py-4"
              >
                Yes
              </Btn>
              <Btn
                sx={{ "&.MuiButtonBase-root": { border: "1px solid #7953B5" } }}
                className="rounded-full bg-white text-primary-700 px-6 py-3 md:px-8 md:py-4"
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

      <div className="flex mt-5 md:mt-6 items-start flex-col justify-start gap-2 mb-3 md:mb-5">
        <label htmlFor="character-bible">
          <Typography
            variant="body1"
            className="futura font-medium text-primary-700"
          >
            Inspiration for Story<span className="text-error-700">*</span>
          </Typography>
        </label>
        <CustomInput
          {...register("inspiration")}
          error={Boolean(errors.inspiration) || false}
          sx={{
            "& ::placeholder": { color: "#B7B7B7 !important" },
            "& .MuiOutlinedInput-input": { py: 2 },
            "& .MuiFormHelperText-root": {
              mt: "8px",
              mx: 0,
              color: "red",
              fontSize: "16px",
            },
          }}
          helperText={errors.inspiration?.message}
          multiline
          rows={3}
          placeholder="List a few things that inspired this story, could be other films,
          books, true life experience… "
          fullWidth
          id="character-bible"
          variant="outlined"
          size="small"
        />
      </div>

      <div className="flex items-start flex-col justify-start gap-2 mb-3 md:mb-5">
        <label htmlFor="motivation">
          <Typography
            variant="body1"
            className="futura font-medium text-primary-700"
          >
            Motivation<span className="text-error-700">*</span>
          </Typography>
        </label>
        <CustomInput
          {...register("motivation")}
          error={Boolean(errors.motivation) || false}
          sx={{
            "& ::placeholder": { color: "#B7B7B7 !important" },
            "& .MuiOutlinedInput-input": { py: 2 },
            "& .MuiFormHelperText-root": {
              mt: "8px",
              mx: 0,
              color: "red",
              fontSize: "16px",
            },
          }}
          helperText={errors.motivation?.message}
          multiline
          rows={3}
          placeholder="WHY TELL THIS STORY? What impact do you hope it would have on the audience?"
          fullWidth
          id="motivation"
          variant="outlined"
          size="small"
        />
      </div>
    </>
  );
};

export default WritersStatement;
