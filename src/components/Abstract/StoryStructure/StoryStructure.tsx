import { Typography } from "@mui/material";
import CustomInput from "@shared/CustomInput/CustomInput";

const StoryStructure = () => {
  return (
    <>
      <Typography
        width="100%"
        variant="h6"
        color="primary.700"
        className="futura font-medium"
      >
        Story Structure
      </Typography>

      <Typography
        variant="body2"
        className="text-neutral-700 mb-4 sm:mb-6 lg:mb-10 max-w-[290px] md:max-w-full"
      >
        There is only one rule: be surprising
      </Typography>

      <div className="flex items-start flex-col justify-start gap-2 mb-3 md:mb-5">
        <label
          htmlFor="story-world"
          className="futura font-medium text-neutral-800"
        >
          Story World<span className="text-error-700">*</span>
        </label>
        <CustomInput
          sx={{
            "& ::placeholder": { color: "#B7B7B7 !important" },
          }}
          className="placeholder:text-red-500"
          placeholder="Where is this story domicile?"
          fullWidth
          id="story-world"
          variant="outlined"
          size="medium"
        />
      </div>

      <div className="flex items-start flex-col justify-start gap-2 mb-3 md:mb-5">
        <label
          htmlFor="act-structure"
          className="futura font-medium text-neutral-800"
        >
          Act Structure (Recommended)
        </label>
        <CustomInput
          fullWidth
          id="act-structure"
          variant="outlined"
          size="medium"
        />
      </div>
    </>
  );
};

export default StoryStructure;
