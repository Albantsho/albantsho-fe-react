import {
  Autocomplete,
  ListItemText,
  MenuItem,
  Typography,
} from "@mui/material";
import CustomInput from "@shared/CustomInput/CustomInput";
import { IAbstractFormValues } from "interfaces/abstract";
import React from "react";
import type {
  Control,
  FieldErrorsImpl,
  UseFormRegister,
} from "react-hook-form";
import { Controller } from "react-hook-form";
import { AiFillInfoCircle } from "react-icons/ai";

interface IProps {
  register: UseFormRegister<IAbstractFormValues>;
  errors: Partial<FieldErrorsImpl<IAbstractFormValues>>;
  control: Control<IAbstractFormValues, any>;
  step: number;
}

const genresFilms = [
  { label: "Fantasy" },
  { label: "Love" },
  { label: "Sci Fi" },
];

const GeneralScriptProfile = ({ register, errors, control, step }: IProps) => {
  return (
    <div className={`${step === 1 ? "block" : "hidden"}`}>
      <Typography
        variant="h5"
        color="primary.700"
        className="futura font-medium leading-normal"
      >
        General Script Profile
      </Typography>
      <Typography variant="body1" className="text-neutral-700 mb-6 lg:mb-10">
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
          <Controller
            name="script_type"
            control={control}
            render={({ field }) => (
              <CustomInput
                {...field}
                error={Boolean(errors.script_type) || false}
                select
                fullWidth
                size="small"
                sx={{
                  "& .MuiOutlinedInput-input": { py: 1.5, minWidth: "135px" },
                  "& .MuiSvgIcon-root": { color: "#7953B5" },
                  "& .MuiFormHelperText-root": {
                    mt: "8px",
                    mx: 0,
                    color: "red",
                    fontSize: "16px",
                  },
                }}
                helperText={errors.script_type?.message}
                variant="outlined"
                id="script-format"
                defaultValue="documentary"
              >
                <MenuItem value="documentary">
                  <ListItemText className="text-primary-700">
                    Documentary
                  </ListItemText>
                </MenuItem>
              </CustomInput>
            )}
          />
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
          <Controller
            name="storyFormat"
            control={control}
            render={({ field }) => (
              <CustomInput
                {...field}
                error={Boolean(errors.storyFormat) || false}
                select
                fullWidth
                size="small"
                sx={{
                  "& .MuiOutlinedInput-input": { py: 1.5, minWidth: "135px" },
                  "& .MuiSvgIcon-root": { color: "#7953B5" },
                  "& .MuiFormHelperText-root": {
                    mt: "8px",
                    mx: 0,
                    color: "red",
                    fontSize: "16px",
                  },
                }}
                helperText={errors.storyFormat?.message}
                variant="outlined"
                id="story-format"
                defaultValue="highConcept"
              >
                <MenuItem value="highConcept">
                  <ListItemText className="text-primary-700">
                    High Concept
                  </ListItemText>
                </MenuItem>
              </CustomInput>
            )}
          />
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
          {...register("title")}
          error={Boolean(errors.title) || false}
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
        {errors.title?.message && (
          <span className="text-error-700 text-base">
            {errors.title.message}
          </span>
        )}
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
          <Controller
            name="primary_genre"
            control={control}
            render={({ field }) => (
              <CustomInput
                error={Boolean(errors.primary_genre) || false}
                {...field}
                select
                fullWidth
                size="small"
                sx={{
                  "& .MuiOutlinedInput-input": { py: 1.5, minWidth: "135px" },
                  "& .MuiSvgIcon-root": { color: "#7953B5" },
                  "& .MuiFormHelperText-root": {
                    mt: "8px",
                    mx: 0,
                    color: "red",
                    fontSize: "16px",
                  },
                }}
                helperText={errors.primary_genre?.message}
                variant="outlined"
                id="genre-script-primary"
                defaultValue="documentary"
              >
                <MenuItem value="documentary">
                  <ListItemText className="text-primary-700">
                    Documentary
                  </ListItemText>
                </MenuItem>
              </CustomInput>
            )}
          />
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
          <Controller
            name="secondary_genre"
            control={control}
            render={({ field }) => (
              <CustomInput
                error={Boolean(errors.secondary_genre) || false}
                {...field}
                select
                fullWidth
                size="small"
                sx={{
                  "& .MuiOutlinedInput-input": { py: 1.5, minWidth: "135px" },
                  "& .MuiSvgIcon-root": { color: "#7953B5" },
                  "& .MuiFormHelperText-root": {
                    mt: "8px",
                    mx: 0,
                    color: "red",
                    fontSize: "16px",
                  },
                }}
                helperText={errors.secondary_genre?.message}
                variant="outlined"
                id="genre-script-secondary"
                defaultValue="romance"
              >
                <MenuItem value="romance">
                  <ListItemText className="text-primary-700">
                    Romance
                  </ListItemText>
                </MenuItem>
              </CustomInput>
            )}
          />
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
        <Controller
          name="theme"
          control={control}
          render={({ field: { onChange } }) => (
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
              onChange={(_, data) => {
                onChange(data);
                return data;
              }}
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
          <Controller
            name="primary_cast"
            control={control}
            render={({ field }) => (
              <CustomInput
                {...field}
                error={Boolean(errors.primary_cast) || false}
                select
                fullWidth
                size="small"
                sx={{
                  "& .MuiOutlinedInput-input": { py: 1.5, minWidth: "135px" },
                  "& .MuiSvgIcon-root": { color: "#7953B5" },
                  "& .MuiFormHelperText-root": {
                    mt: "8px",
                    mx: 0,
                    color: "red",
                    fontSize: "16px",
                  },
                }}
                helperText={errors.primary_cast?.message}
                variant="outlined"
                defaultValue="200"
                id="cast-script-primary"
              >
                <MenuItem value="200">
                  <ListItemText className="text-primary-700">200</ListItemText>
                </MenuItem>
              </CustomInput>
            )}
          />
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
          <Controller
            name="secondary_cast"
            control={control}
            render={({ field }) => (
              <CustomInput
                {...field}
                error={Boolean(errors.secondary_cast) || false}
                select
                fullWidth
                size="small"
                sx={{
                  "& .MuiOutlinedInput-input": { py: 1.5, minWidth: "135px" },
                  "& .MuiSvgIcon-root": { color: "#7953B5" },
                  "& .MuiFormHelperText-root": {
                    mt: "8px",
                    mx: 0,
                    color: "red",
                    fontSize: "16px",
                  },
                }}
                helperText={errors.secondary_cast?.message}
                variant="outlined"
                id="cast-script-secondary"
                defaultValue="50"
              >
                <MenuItem value="50">
                  <ListItemText className="text-primary-700">50</ListItemText>
                </MenuItem>
              </CustomInput>
            )}
          />
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
        <Controller
          name="estimated_budger"
          control={control}
          render={({ field }) => (
            <CustomInput
              error={Boolean(errors.estimated_budger) || false}
              {...field}
              select
              fullWidth
              size="small"
              variant="outlined"
              sx={{
                "& .MuiOutlinedInput-input": { py: 1.5, minWidth: "135px" },
                "& .MuiSvgIcon-root": { color: "#7953B5" },
                "& .MuiFormHelperText-root": {
                  mt: "8px",
                  mx: 0,
                  color: "red",
                  fontSize: "16px",
                },
              }}
              helperText={errors.estimated_budger?.message}
              defaultValue="high"
              id="budget-script"
            >
              <MenuItem value="high">
                <ListItemText className="text-primary-700">High</ListItemText>
              </MenuItem>
              <MenuItem value="medium">
                <ListItemText className="text-primary-700">Medium</ListItemText>
              </MenuItem>
              <MenuItem value="low">
                <ListItemText className="text-primary-700">Low</ListItemText>
              </MenuItem>
            </CustomInput>
          )}
        />
      </div>
    </div>
  );
};

export default GeneralScriptProfile;
