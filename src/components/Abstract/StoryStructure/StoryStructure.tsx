import { Typography } from "@mui/material";
import CustomInput from "@shared/CustomInput/CustomInput";

const StoryStructure = () => {
  return (
    <>
      <Typography
        variant="h5"
        color="primary.700"
        className="futura font-medium leading-normal"
      >
        Story Structure
      </Typography>
      <Typography
        variant="body1"
        className="text-neutral-700 mb-6 lg:mb-10"
      >
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
          placeholder="Where is this story domicile?"
          fullWidth
          id="story-world"
          variant="outlined"
          size="small"
          sx={{
            "& ::placeholder": { color: "#B7B7B7 !important" },
            "& .MuiOutlinedInput-input": { py: 2 },
          }}
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
          fullWidth
          id="act-structure"
          variant="outlined"
          size="small"
          sx={{ "& .MuiOutlinedInput-input": { py: 2 } }}
        />
      </div>
    </>
  );
};

export default StoryStructure;
