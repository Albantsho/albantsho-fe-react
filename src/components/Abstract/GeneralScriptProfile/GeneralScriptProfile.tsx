import {
  Autocomplete,
  ListItemText,
  MenuItem,
  Typography,
} from "@mui/material";
import CustomInput from "@shared/CustomInput/CustomInput";
import { IAbstractFormValues } from "interfaces/abstract";
import { IFullInformationScript } from "interfaces/script";
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
  script: IFullInformationScript;
}

const genresFilms = [
  { label: "Fantasy" },
  { label: "Love" },
  { label: "Sci Fi" },
];

const GeneralScriptProfile = ({
  register,
  errors,
  control,
  step,
  script,
}: IProps) => {
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
            name="scriptFormat"
            control={control}
            render={({ field }) => (
              <CustomInput
                {...field}
                error={Boolean(errors.scriptFormat) || false}
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
                helperText={errors.scriptFormat?.message}
                variant="outlined"
                id="script-format"
                defaultValue={
                  script.scriptFormat ? script.scriptFormat : "documentary"
                }
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
                defaultValue={
                  script.storyFormat ? script.storyFormat : "highConcept"
                }
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
          defaultValue={script.title ? script.title : ""}
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
            name="primaryGenre"
            control={control}
            render={({ field }) => (
              <CustomInput
                error={Boolean(errors.primaryGenre) || false}
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
                helperText={errors.primaryGenre?.message}
                variant="outlined"
                id="genre-script-primary"
                defaultValue={
                  script.primaryGenre ? script.primaryGenre : "documentary"
                }
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
            name="secondaryGenre"
            control={control}
            render={({ field }) => (
              <CustomInput
                error={Boolean(errors.secondaryGenre) || false}
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
                helperText={errors.secondaryGenre?.message}
                variant="outlined"
                id="genre-script-secondary"
                defaultValue={
                  script.secondaryGenre ? script.secondaryGenre : "romance"
                }
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
            name="primaryCast"
            control={control}
            render={({ field }) => (
              <CustomInput
                {...field}
                error={Boolean(errors.primaryCast) || false}
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
                helperText={errors.primaryCast?.message}
                variant="outlined"
                defaultValue={script.primaryCast ? script.primaryCast : "200"}
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
            name="secondaryCast"
            control={control}
            render={({ field }) => (
              <CustomInput
                {...field}
                error={Boolean(errors.secondaryCast) || false}
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
                helperText={errors.secondaryCast?.message}
                variant="outlined"
                id="cast-script-secondary"
                defaultValue={
                  script.secondaryCast ? script.secondaryCast : "50"
                }
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
          name="estimatedBudget"
          control={control}
          render={({ field }) => (
            <CustomInput
              error={Boolean(errors.estimatedBudget) || false}
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
              helperText={errors.estimatedBudget?.message}
              defaultValue={
                script.estimatedBudget ? script.estimatedBudget : "high"
              }
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
