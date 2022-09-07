import { Typography } from "@mui/material";
import CustomInput from "@shared/CustomInput/CustomInput";
import { AiFillInfoCircle } from "react-icons/ai";

const StoryLine = () => {
  return (
    <>
      <Typography
        width="100%"
        variant="h6"
        color="primary.700"
        className="futura font-medium"
      >
        Storyline
      </Typography>

      <Typography
        variant="body2"
        className="text-neutral-700 mb-4 sm:mb-6 lg:mb-10  max-w-[290px] md:max-w-full"
      >
        What if the 'line' was a kaleidoscope'?
      </Typography>

      <div className="flex items-start flex-col justify-start gap-2 mb-3 md:mb-5">
        <label htmlFor="tagline" className="futura font-medium text-neutral-800">
          Tagline<span className="text-error-700">*</span>
        </label>
        <CustomInput fullWidth id="tagline" variant="outlined" size="medium" />
        <span className="text-blue-600 flex items-center gap-2">
          <AiFillInfoCircle className="text-xl" />
          What’s a tagline?
        </span>
      </div>

      <div className="flex items-start flex-col justify-start gap-2 mb-3 md:mb-5">
        <label htmlFor="Logline" className="futura font-medium text-neutral-800">
          Logline<span className="text-error-700">*</span>
        </label>
        <CustomInput fullWidth id="Logline" variant="outlined" size="medium" />
        <span className="text-blue-600 flex items-center gap-2">
          <AiFillInfoCircle className="text-xl" />
          See sample logline that works
        </span>
      </div>

      <div className="flex items-start flex-col justify-start gap-2 mb-3 md:mb-5">
        <label htmlFor="synopsis" className="futura font-medium text-neutral-800">
          Synopsis<span className="text-error-700">*</span>
        </label>
        <CustomInput
          multiline
          rows={3}
          fullWidth
          id="synopsis"
          variant="outlined"
          size="medium"
        />
        <span className="text-blue-600 flex items-center gap-2">
          <AiFillInfoCircle className="text-xl" />
          Write a synopsis that slaps
        </span>
      </div>
    
    </>
  );
};

export default StoryLine;
