import { Typography } from "@mui/material";
import CustomInput from "@shared/CustomInput/CustomInput";
import { IAbstractFormValues } from "interfaces/abstract";
import { IFullInformationScript } from "interfaces/script";
import Link from "next/link";
import type { FieldErrorsImpl, UseFormRegister } from "react-hook-form";
import { AiFillInfoCircle } from "react-icons/ai";

interface IProps {
  register: UseFormRegister<IAbstractFormValues>;
  errors: Partial<FieldErrorsImpl<IAbstractFormValues>>;
  step: number;
  script: IFullInformationScript;
}

const StoryLine = ({ register, errors, step, script }: IProps) => {
  return (
    <div className={`${step === 2 ? "block" : "hidden"}`}>
      <Typography
        variant="h5"
        color="primary.700"
        className="futura font-medium leading-normal"
      >
        Storyline
      </Typography>

      <Typography variant="body1" className="text-neutral-700 mb-6 lg:mb-10">
        What if the 'line' was a kaleidoscope'?
      </Typography>

      <div className="flex items-start flex-col justify-start gap-2 mb-3 md:mb-5">
        <label htmlFor="tagline">
          <Typography
            variant="body1"
            className="futura font-medium text-primary-700"
          >
            Tagline<span className="text-error-700">*</span>
          </Typography>
        </label>
        <CustomInput
          {...register("tagline")}
          error={Boolean(errors.tagline) || false}
          defaultValue={script.tagline ? script.tagline : ""}
          fullWidth
          id="tagline"
          variant="outlined"
          size="small"
          sx={{
            "& .MuiOutlinedInput-input": { py: 2 },
            "& .MuiFormHelperText-root": {
              mx: 0,
              color: "#5D5FEF",
            },
          }}
          helperText={
            <Link
              target="_blank"
              className="text-[#5D5FEF]"
              href="https://blog.albantsho.com/tagline-vs-logline/"
            >
              <span className="flex items-center gap-2">
                <AiFillInfoCircle className="text-xl" />
                What’s a tagline?
              </span>
            </Link>
          }
        />
        {errors.tagline?.message && (
          <span className="text-error-700 text-base">
            {errors.tagline.message}
          </span>
        )}
      </div>

      <div className="flex items-start flex-col justify-start gap-2 mb-3 md:mb-5">
        <label htmlFor="log-line">
          <Typography
            variant="body1"
            className="futura font-medium text-primary-700"
          >
            Logline<span className="text-error-700">*</span>
          </Typography>
        </label>
        <CustomInput
          {...register("logLine")}
          error={Boolean(errors.logLine) || false}
          defaultValue={script.logLine ? script.logLine : ""}
          fullWidth
          id="log-line"
          variant="outlined"
          size="small"
          sx={{
            "& .MuiOutlinedInput-input": { py: 2 },
            "& .MuiFormHelperText-root": {
              mx: 0,
              color: "#5D5FEF",
            },
          }}
          helperText={
            <Link
              target="_blank"
              className="text-[#5D5FEF]"
              href="https://blog.albantsho.com/tagline-vs-logline/"
            >
              <span className="flex items-center gap-2">
                <AiFillInfoCircle className="text-xl" />
                See sample logline that works
              </span>
            </Link>
          }
        />
        {errors.logLine?.message && (
          <span className="text-error-700 text-base">
            {errors.logLine.message}
          </span>
        )}
      </div>

      <div className="flex items-start flex-col justify-start gap-2 mb-3 md:mb-5">
        <label htmlFor="synopsis">
          <Typography
            variant="body1"
            className="futura font-medium text-primary-700"
          >
            Synopsis<span className="text-error-700">*</span>
          </Typography>
        </label>
        <CustomInput
          {...register("synopsis")}
          error={Boolean(errors.synopsis) || false}
          multiline
          defaultValue={script.synopsis ? script.synopsis : ""}
          rows={3}
          fullWidth
          id="synopsis"
          variant="outlined"
          sx={{
            "& .MuiOutlinedInput-input": { py: 2 },
            "& .MuiFormHelperText-root": {
              mx: 0,
              color: "#5D5FEF",
            },
          }}
          helperText={
            <Link
              target="_blank"
              className="text-[#5D5FEF]"
              href="https://blog.albantsho.com/sell-your-story-writing-a-strong-synopsis-for-your-screenplay/"
            >
              <span className="flex items-center gap-2">
                <AiFillInfoCircle className="text-xl" />
                Write a synopsis that slaps
              </span>
            </Link>
          }
        />
        {errors.synopsis?.message && (
          <span className="text-error-700 text-base">
            {errors.synopsis.message}
          </span>
        )}
      </div>
    </div>
  );
};

export default StoryLine;
