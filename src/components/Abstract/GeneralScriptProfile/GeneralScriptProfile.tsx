import {
  ListItemText,
  MenuItem,
  Typography,
  Autocomplete,
} from "@mui/material";
import CustomInput from "@shared/CustomInput/CustomInput";
import React, { useState } from "react";
import { AiFillInfoCircle } from "react-icons/ai";

const genresFilms = [
  { label: "Fantasy" },
  { label: "Love" },
  { label: "Sci Fi" },
];

const GeneralScriptProfile = () => {
  const [statusScriptFormat, setStatusScriptFormat] = useState("Documentary");
  const [statusStoryFormat, setStatusStoryFormat] = useState("HighConcept");
  const handleChangeScriptFormat = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setStatusScriptFormat(event.target.value);
  };
  const handleChangeStoryFormat = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setStatusStoryFormat(event.target.value);
  };
  return (
    <>
      <Typography
        variant="h5"
        color="primary.700"
        className="futura font-medium leading-normal"
      >
        General Script Profile
      </Typography>
      <Typography
        variant="body1"
        className="text-neutral-700 mb-6 lg:mb-10"
      >
        If it can be written, it can be filmed.
      </Typography>

      <div className="flex gap-y-3 gap-x-5 md:gap-10 items-center flex-wrap mb-5">
        <div className="flex flex-1 items-start flex-col justify-start gap-2">
          <label htmlFor="script-format">
            <Typography
              variant="body1"
              className="futura font-medium text-primary-700"
            >
              Script Format<span className="text-error-700">*</span>
            </Typography>
          </label>
          <CustomInput
            select
            fullWidth
            size="small"
            sx={{
              "& .MuiOutlinedInput-input": { py: 1.5, minWidth: "135px" },
              "& .MuiSvgIcon-root": { color: "#7953B5" },
            }}
            variant="outlined"
            id="script-format"
            defaultValue="AllScripts"
            value={statusScriptFormat}
            onChange={handleChangeScriptFormat}
          >
            <MenuItem value="Documentary">
              <ListItemText className="text-primary-700">
                Documentary
              </ListItemText>
            </MenuItem>
          </CustomInput>
        </div>
        <div className="flex flex-1 items-start flex-col justify-start gap-2">
          <label htmlFor="story-script">
            <Typography
              variant="body1"
              className="futura font-medium text-primary-700"
            >
              Story Format<span className="text-error-700">*</span>
            </Typography>
          </label>
          <CustomInput
            select
            fullWidth
            size="small"
            sx={{
              "& .MuiOutlinedInput-input": { py: 1.5, minWidth: "135px" },
              "& .MuiSvgIcon-root": { color: "#7953B5" },
            }}
            variant="outlined"
            id="story-format"
            defaultValue="Documentary"
            value={statusStoryFormat}
            onChange={handleChangeStoryFormat}
          >
            <MenuItem value="HighConcept">
              <ListItemText className="text-primary-700">
                High Concept
              </ListItemText>
            </MenuItem>
          </CustomInput>
        </div>
      </div>

      <div className="flex justify-between gap-y-2 items-center flex-wrap mb-5">
        <label htmlFor="script-title">
          <Typography
            variant="body1"
            className="futura font-medium text-primary-700"
          >
            Script Title<span className="text-error-700">*</span>
          </Typography>
        </label>
        <CustomInput
          fullWidth
          id="script-title"
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
            <span className="flex items-center gap-2">
              <AiFillInfoCircle className="text-xl" />
              note: ways to create killer titles
            </span>
          }
        />
      </div>

      <div className="flex gap-y-3 gap-x-5 md:gap-10 items-center flex-wrap mb-5">
        <div className="flex flex-1 items-start flex-col justify-start gap-2">
          <label htmlFor="genre-script-primary">
            <Typography
              variant="body1"
              className="futura font-medium text-primary-700"
            >
              Genre (Primary)<span className="text-error-700">*</span>
            </Typography>
          </label>
          <CustomInput
            select
            fullWidth
            size="small"
            sx={{
              "& .MuiOutlinedInput-input": { py: 1.5, minWidth: "135px" },
              "& .MuiSvgIcon-root": { color: "#7953B5" },
            }}
            variant="outlined"
            id="genre-script-primary"
            defaultValue="AllScripts"
            value={statusScriptFormat}
            onChange={handleChangeScriptFormat}
          >
            <MenuItem value="Documentary">
              <ListItemText className="text-primary-700">Sci Fi</ListItemText>
            </MenuItem>
          </CustomInput>
        </div>
        <div className="flex flex-1 items-start flex-col justify-start gap-2">
          <label htmlFor="genre-script-secondary">
            <Typography
              variant="body1"
              className="futura font-medium text-primary-700"
            >
              Genre (Secondary)<span className="text-error-700">*</span>
            </Typography>
          </label>
          <CustomInput
            select
            fullWidth
            size="small"
            sx={{
              "& .MuiOutlinedInput-input": { py: 1.5, minWidth: "135px" },
              "& .MuiSvgIcon-root": { color: "#7953B5" },
            }}
            variant="outlined"
            id="genre-script-secondary"
            defaultValue="Documentary"
            value={statusStoryFormat}
            onChange={handleChangeStoryFormat}
          >
            <MenuItem value="HighConcept">
              <ListItemText className="text-primary-700">Romance</ListItemText>
            </MenuItem>
          </CustomInput>
        </div>
      </div>

      <div className="mb-5 flex flex-col gap-2">
        <label htmlFor="select-script">
          <Typography
            variant="body1"
            className="futura font-medium text-primary-700"
          >
           Themes<span className="text-error-500 my-auto">*</span>
          </Typography>
        </label>
        <Autocomplete
          multiple
          id="select-script"
          sx={{
            "& .MuiChip-label": { color: "#7953B5" },
            "& .MuiSvgIcon-root": { color: "#BCA9DA !important" },
            mb: 1,
          }}
          options={genresFilms}
          getOptionLabel={(option) => option.label}
          defaultValue={[genresFilms[1]]}
          renderInput={(params) => (
            <CustomInput
              {...params}
              variant="outlined"
              sx={{
                "& .MuiInputBase-root": { py: "10px !important" },
                "& .MuiFormHelperText-root": {
                  mx: 0,
                  color: "#5D5FEF",
                },
              }}
              helperText={
                <span className="flex items-center gap-2">
                  <AiFillInfoCircle className="text-xl" />
                  Understanding screenplay themes
                </span>
              }
            />
          )}
        />
      </div>

      <div className="flex gap-y-3 gap-x-5 md:gap-10 items-center flex-wrap mb-5">
        <div className="flex flex-1 items-start flex-col justify-start gap-2">
          <label htmlFor="cast-script-primary">
            <Typography
              variant="body1"
              className="futura font-medium text-primary-700"
            >
              Cast(Main)<span className="text-error-700">*</span>
            </Typography>
          </label>
          <CustomInput
            select
            fullWidth
            size="small"
            sx={{
              "& .MuiOutlinedInput-input": { py: 1.5, minWidth: "135px" },
              "& .MuiSvgIcon-root": { color: "#7953B5" },
            }}
            variant="outlined"
            id="cast-script-primary"
            defaultValue="AllScripts"
            value={statusScriptFormat}
            onChange={handleChangeScriptFormat}
          >
            <MenuItem value="Documentary">
              <ListItemText className="text-primary-700">200</ListItemText>
            </MenuItem>
          </CustomInput>
        </div>
        <div className="flex flex-1 items-start flex-col justify-start gap-2">
          <label htmlFor="cast-script-secondary">
            <Typography
              variant="body1"
              className="futura font-medium text-primary-700"
            >
              Cast(Secondary)<span className="text-error-700">*</span>
            </Typography>
          </label>
          <CustomInput
            select
            fullWidth
            size="small"
            sx={{
              "& .MuiOutlinedInput-input": { py: 1.5, minWidth: "135px" },
              "& .MuiSvgIcon-root": { color: "#7953B5" },
            }}
            variant="outlined"
            id="cast-script-secondary"
            defaultValue="Documentary"
            value={statusStoryFormat}
            onChange={handleChangeStoryFormat}
          >
            <MenuItem value="HighConcept">
              <ListItemText className="text-primary-700">50</ListItemText>
            </MenuItem>
          </CustomInput>
        </div>
      </div>

      <div className="flex  sm:pr-5 sm:w-1/2 items-start flex-col justify-start gap-2">
        <label htmlFor="budget-script">
          <Typography
            variant="body1"
            className="futura font-medium text-primary-700"
          >
            Estimated Budget<span className="text-error-700">*</span>
          </Typography>
        </label>
        <CustomInput
          select
          fullWidth
          size="small"
          variant="outlined"
          sx={{
            "& .MuiOutlinedInput-input": { py: 1.5, minWidth: "135px" },
            "& .MuiSvgIcon-root": { color: "#7953B5" },
          }}
          id="budget-script"
          defaultValue="AllScripts"
          value={statusScriptFormat}
          onChange={handleChangeScriptFormat}
        >
          <MenuItem value="Documentary">
            <ListItemText className="text-primary-700">N1M-N3M</ListItemText>
          </MenuItem>
        </CustomInput>
      </div>
    </>
  );
};

export default GeneralScriptProfile;
