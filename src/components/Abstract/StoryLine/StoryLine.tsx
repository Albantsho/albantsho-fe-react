import { Typography } from "@mui/material";
import CustomInput from "@shared/CustomInput/CustomInput";
import { AiFillInfoCircle } from "react-icons/ai";

const StoryLine = () => {
  return (
    <>
      <Typography
        variant="h5"
        color="primary.700"
        className="futura font-medium leading-normal"
      >
        Storyline
      </Typography>

      <Typography
        variant="body1"
        className="text-neutral-700 mb-6 lg:mb-10 max-w-[290px] md:max-w-full"
      >
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
            <div className="flex items-center gap-2">
              <AiFillInfoCircle className="text-xl" />
              What’s a tagline?
            </div>
          }
        />
      </div>

      <div className="flex items-start flex-col justify-start gap-2 mb-3 md:mb-5">
        <label htmlFor="Logline">
          <Typography
            variant="body1"
            className="futura font-medium text-primary-700"
          >
            Logline<span className="text-error-700">*</span>
          </Typography>
        </label>
        <CustomInput
          fullWidth
          id="Logline"
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
            <div className="flex items-center gap-2">
              <AiFillInfoCircle className="text-xl" />
              See sample logline that works
            </div>
          }
        />
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
          multiline
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
            <div className="flex items-center gap-2">
              <AiFillInfoCircle className="text-xl" />
              Write a synopsis that slaps
            </div>
          }
        />
      </div>
    </>
  );
};

export default StoryLine;
