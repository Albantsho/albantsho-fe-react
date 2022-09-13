import { Typography } from "@mui/material";
import CustomInput from "@shared/CustomInput/CustomInput";

const CharacterBible = () => {
  return (
    <>
      <Typography
        variant="h5"
        color="primary.700"
        className="futura font-medium leading-normal"
      >
        Character Bible
      </Typography>

      <Typography
        variant="body1"
        className="text-neutral-700 mb-6 lg:mb-10 max-w-[290px] md:max-w-full"
      >
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
          size="small"
          sx={{
            "& .MuiOutlinedInput-input": { py: 2 },
            "& ::placeholder": { color: "#B7B7B7 !important" },
          }}
          multiline
          rows={3}
          placeholder="Tell us more about the characters in your script"
          fullWidth
          id="character-bible"
          variant="outlined"
        />
      </div>
    </>
  );
};

export default CharacterBible;
