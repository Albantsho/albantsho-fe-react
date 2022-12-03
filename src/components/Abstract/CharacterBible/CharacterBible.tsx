import { Typography } from "@mui/material";
import CustomInput from "@shared/CustomInput/CustomInput";
import { IAbstractFormValues } from "interfaces/abstract";
import type { FieldErrorsImpl, UseFormRegister } from "react-hook-form";

interface IProps {
  register: UseFormRegister<IAbstractFormValues>;
  errors: Partial<FieldErrorsImpl<IAbstractFormValues>>;
  step: number;
}

const CharacterBible = ({ errors, register, step }: IProps) => {
  return (
    <div className={`${step === 4 ? "block" : "hidden"}`}>
      <Typography
        variant="h5"
        color="primary.700"
        className="futura font-medium leading-normal"
      >
        Character Bible
      </Typography>

      <Typography variant="body1" className="text-neutral-700 mb-6 lg:mb-10">
        The personalities that make up your story
      </Typography>

      <div className="flex items-start flex-col justify-start gap-2 mb-3 md:mb-5">
        <label htmlFor="character-bible">
          <Typography
            variant="body1"
            className="futura font-medium text-primary-700"
          >
            Character Bible
          </Typography>
        </label>
        <CustomInput
          {...register("character_bible")}
          error={Boolean(errors.character_bible) || false}
          size="small"
          sx={{
            "& .MuiOutlinedInput-input": { py: 2 },
            "& ::placeholder": { color: "#B7B7B7 !important" },
            "& .MuiFormHelperText-root": {
              mt: "8px",
              mx: 0,
              color: "red",
              fontSize: "16px",
            },
          }}
          helperText={errors.character_bible?.message}
          multiline
          rows={3}
          placeholder="Tell us more about the characters in your script"
          fullWidth
          id="character-bible"
          variant="outlined"
        />
      </div>
    </div>
  );
};

export default CharacterBible;
