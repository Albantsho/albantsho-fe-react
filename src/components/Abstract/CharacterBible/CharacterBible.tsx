import { Typography } from "@mui/material";
import CustomInput from "@shared/CustomInput/CustomInput";

const CharacterBible = () => {
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

      <div className="flex items-start flex-col justify-start gap-2 mb-3 md:mb-5">
        <label
          htmlFor="character-bible"
          className="futura font-medium text-neutral-800"
        >
          Character Bible
        </label>
        <CustomInput
          sx={{
            "& ::placeholder": { color: "#B7B7B7 !important" },
          }}
          multiline
          rows={3}
          placeholder="Tell us more about the characters in your script"
          fullWidth
          id="character-bible"
          variant="outlined"
          size="medium"
        />
      </div>
    </>
  );
};

export default CharacterBible;
