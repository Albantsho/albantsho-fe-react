import {
  ListItemText,
  MenuItem,
  Select,
  type SelectChangeEvent,
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
  const handleChangeScriptFormat = (event: SelectChangeEvent<string>): void => {
    setStatusScriptFormat(event.target.value);
  };
  const handleChangeStoryFormat = (event: SelectChangeEvent<string>): void => {
    setStatusStoryFormat(event.target.value);
  };
  return (
    <>
      <Typography
        variant="h6"
        color="primary.700"
        className="futura font-medium"
      >
        General Script Profile
      </Typography>
      <Typography
        variant="body2"
        className="text-neutral-700 mb-4 sm:mb-6 lg:mb-10 max-w-[290px] md:max-w-full"
      >
        If it can be written, it can be filmed.
      </Typography>

      <div className="flex justify-between gap-x-3 items-center flex-wrap ">
        <div className="flex items-start flex-col justify-start gap-2 mb-3 md:mb-5">
          <label
            htmlFor="script-format"
            className="futura font-medium text-neutral-800"
          >
            Script Format<span className="text-error-700">*</span>
          </label>

          <Select
            id="script-format"
            defaultValue="AllScripts"
            value={statusScriptFormat}
            onChange={handleChangeScriptFormat}
            sx={{
              "&.MuiInputBase-root": {
                maxWidth: { xs: "172px", md: "100%" },
                width: { xs: "100%", md: "270px" },
              },
              "& .MuiSelect-select": {
                backgroundColor: "white",
                p: "8px 16px",
              },
              "& .MuiSvgIcon-root": {
                color: "#7953B5",
              },
            }}
          >
            <MenuItem value="Documentary">
              <ListItemText className="text-primary-700">
                Documentary
              </ListItemText>
            </MenuItem>
          </Select>
        </div>
        <div className="flex items-start flex-col justify-start gap-2 mb-3 md:mb-5">
          <label
            htmlFor="story-script"
            className="futura font-medium text-neutral-800"
          >
            Story Format<span className="text-error-700">*</span>
          </label>
          <Select
            id="story-format"
            defaultValue="Documentary"
            value={statusStoryFormat}
            onChange={handleChangeStoryFormat}
            sx={{
              "&.MuiInputBase-root": {
                maxWidth: { xs: "172px", md: "100%" },
                width: { xs: "100%", md: "270px" },
              },
              "& .MuiSelect-select": {
                backgroundColor: "white",
                p: "8px 16px",
              },
              "& .MuiSvgIcon-root": {
                color: "#7953B5",
              },
            }}
          >
            <MenuItem value="HighConcept">
              <ListItemText className="text-primary-700">
                High Concept
              </ListItemText>
            </MenuItem>
          </Select>
        </div>
      </div>

      <div className="flex justify-between gap-y-2 items-center flex-wrap mb-5">
        <label
          htmlFor="script-title"
          className="futura font-medium text-neutral-800"
        >
          Script Title<span className="text-error-700">*</span>
        </label>
        <CustomInput
          fullWidth
          id="script-title"
          variant="outlined"
          size="medium"
        />
        <span className="text-blue-600 flex items-center gap-2">
          <AiFillInfoCircle className="text-xl" />
          note: ways to create killer titles
        </span>
      </div>

      <div className="flex justify-between gap-5 items-center flex-wrap mb-5">
        <div className="flex items-start flex-col justify-start gap-2 mb-3 md:mb-5">
          <label
            htmlFor="genre-script-primary"
            className="futura font-medium text-neutral-800"
          >
            Genre (Primary)<span className="text-error-700">*</span>
          </label>
          <Select
            id="genre-script-primary"
            defaultValue="AllScripts"
            value={statusScriptFormat}
            onChange={handleChangeScriptFormat}
            sx={{
              "&.MuiInputBase-root": {
                maxWidth: { xs: "172px", md: "100%" },
                width: { xs: "159px", md: "270px" },
              },
              "& .MuiSelect-select": {
                backgroundColor: "white",
                p: "8px 16px",
              },
              "& .MuiSvgIcon-root": {
                color: "#7953B5",
              },
            }}
          >
            <MenuItem value="Documentary">
              <ListItemText className="text-primary-700">Sci Fi</ListItemText>
            </MenuItem>
          </Select>
        </div>
        <div className="flex items-start flex-col justify-start gap-2 mb-3 md:mb-5">
          <label
            htmlFor="genre-script-secondary"
            className="futura font-medium"
          >
            Genre (Secondary)<span className="text-error-700">*</span>
          </label>
          <Select
            id="genre-script-secondary"
            defaultValue="Documentary"
            value={statusStoryFormat}
            onChange={handleChangeStoryFormat}
            sx={{
              "&.MuiInputBase-root": {
                maxWidth: { xs: "172px", md: "100%" },
                width: { xs: "159px", md: "270px" },
              },
              "& .MuiSelect-select": {
                backgroundColor: "white",
                p: "8px 16px",
              },
              "& .MuiSvgIcon-root": {
                color: "#7953B5",
              },
            }}
          >
            <MenuItem value="HighConcept">
              <ListItemText className="text-primary-700">Romance</ListItemText>
            </MenuItem>
          </Select>
        </div>
      </div>

      <div className="mb-5">
        <label className="futura  font-medium mb-2 block text-neutral-800">
          Select Script<span className="text-error-500 my-auto">*</span>
        </label>
        <Autocomplete
          multiple
          id="tags-standard"
          sx={{
            "& .MuiChip-label": { color: "#7953B5" },
            "& .MuiSvgIcon-root": { color: "#BCA9DA !important" },
            mb: 1,
          }}
          options={genresFilms}
          getOptionLabel={(option) => option.label}
          defaultValue={[genresFilms[1]]}
          renderInput={(params) => (
            <CustomInput {...params} variant="outlined" />
          )}
        />
        <span className="text-blue-600 flex items-center gap-2">
          <AiFillInfoCircle className="text-xl" />
          Understanding screenplay themes
        </span>
      </div>

      <div className="flex justify-between gap-5 items-center flex-wrap">
        <div className="flex items-start flex-col justify-start gap-2 mb-3 md:mb-5">
          <label
            htmlFor="cast-script-primary"
            className="futura font-medium text-neutral-800"
          >
            Cast(Main)<span className="text-error-700">*</span>
          </label>
          <Select
            id="cast-script-primary"
            defaultValue="AllScripts"
            value={statusScriptFormat}
            onChange={handleChangeScriptFormat}
            sx={{
              "&.MuiInputBase-root": {
                maxWidth: { xs: "172px", md: "100%" },
                width: { xs: "159px", md: "270px" },
              },
              "& .MuiSelect-select": {
                backgroundColor: "white",
                p: "8px 16px",
              },
              "& .MuiSvgIcon-root": {
                color: "#7953B5",
              },
            }}
          >
            <MenuItem value="Documentary">
              <ListItemText className="text-primary-700">200</ListItemText>
            </MenuItem>
          </Select>
        </div>
        <div className="flex items-start flex-col justify-start gap-2 mb-3 md:mb-5">
          <label
            htmlFor="cast-script-secondary"
            className="futura font-medium text-neutral-800"
          >
            Cast(Secondary)<span className="text-error-700">*</span>
          </label>
          <Select
            id="cast-script-secondary"
            defaultValue="Documentary"
            value={statusStoryFormat}
            onChange={handleChangeStoryFormat}
            sx={{
              "&.MuiInputBase-root": {
                maxWidth: { xs: "172px", md: "100%" },
                width: { xs: "159px", md: "270px" },
              },
              "& .MuiSelect-select": {
                backgroundColor: "white",
                p: "8px 16px",
              },
              "& .MuiSvgIcon-root": {
                color: "#7953B5",
              },
            }}
          >
            <MenuItem value="HighConcept">
              <ListItemText className="text-primary-700">50</ListItemText>
            </MenuItem>
          </Select>
        </div>
      </div>

      <div className="flex items-start flex-col justify-start gap-2 mb-3 md:mb-5">
        <label
          htmlFor="budget-script"
          className="futura font-medium text-neutral-800"
        >
          Estimated Budget<span className="text-error-700">*</span>
        </label>
        <Select
          id="budget-script"
          defaultValue="AllScripts"
          value={statusScriptFormat}
          onChange={handleChangeScriptFormat}
          sx={{
            "&.MuiInputBase-root": {
              maxWidth: { xs: "172px", md: "100%" },
              width: { xs: "159px", md: "270px" },
            },
            "& .MuiSelect-select": {
              backgroundColor: "white",
              p: "8px 16px",
            },
            "& .MuiSvgIcon-root": {
              color: "#7953B5",
            },
          }}
        >
          <MenuItem value="Documentary">
            <ListItemText className="text-primary-700">N1M-N3M</ListItemText>
          </MenuItem>
        </Select>
      </div>
    </>
  );
};

export default GeneralScriptProfile;
