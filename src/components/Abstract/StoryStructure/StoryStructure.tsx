import { Typography } from "@mui/material";
import CustomInput from "@shared/CustomInput/CustomInput";
import { IAbstractFormValues } from "interfaces/abstract";
import type { FieldErrorsImpl, UseFormRegister } from "react-hook-form";
interface IProps {
  register: UseFormRegister<IAbstractFormValues>;
  errors: Partial<FieldErrorsImpl<IAbstractFormValues>>;
  step: number;
}

const StoryStructure = ({ errors, register, step }: IProps) => {
  return (
    <div className={`${step === 3 ? "block" : "hidden"}`}>
      <Typography
        variant="h5"
        color="primary.700"
        className="futura font-medium leading-normal"
      >
        Story Structure
      </Typography>
      <Typography variant="body1" className="text-neutral-700 mb-6 lg:mb-10">
        There is only one rule: be surprising
      </Typography>

      <div className="flex items-start flex-col justify-start gap-2 mb-3 md:mb-5">
        <label htmlFor="story-world">
          <Typography
            variant="body1"
            className="futura font-medium text-primary-700"
          >
            Story World<span className="text-error-700">*</span>
          </Typography>
        </label>
        <CustomInput
          {...register("story_world")}
          error={Boolean(errors.story_world) || false}
          placeholder="Where is this story domicile?"
          fullWidth
          id="story-world"
          variant="outlined"
          size="small"
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
          helperText={errors.story_world?.message}
        />
      </div>

      <div className="flex items-start flex-col justify-start gap-2 mb-3 md:mb-5">
        <label htmlFor="act-structure">
          <Typography
            variant="body1"
            className="futura font-medium text-primary-700"
          >
            Act Structure (Recommended)
          </Typography>
        </label>
        <CustomInput
          {...register("act_structure")}
          error={Boolean(errors.act_structure) || false}
          fullWidth
          id="act-structure"
          variant="outlined"
          size="small"
          sx={{
            "& .MuiOutlinedInput-input": { py: 2 },
            "& .MuiFormHelperText-root": {
              mt: "8px",
              mx: 0,
              color: "red",
              fontSize: "16px",
            },
          }}
          helperText={errors.act_structure?.message}
        />
      </div>
    </div>
  );
};

export default StoryStructure;
