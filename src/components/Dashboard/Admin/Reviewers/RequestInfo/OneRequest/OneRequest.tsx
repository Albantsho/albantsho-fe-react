import {
  Autocomplete,
  Avatar,
  createFilterOptions,
  InputAdornment,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  SvgIcon,
  TextField,
  Typography,
} from "@mui/material";
import CustomInput from "@shared/CustomInput/CustomInput";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

interface IProps {
  requestInfo:
    | {
        id: number;
        image: StaticImageData;
        title: string;
        description: string;
        type: string;
      }
    | undefined;
}

interface IGenresFilmsOptionType {
  inputValue?: string;
  label: string;
}

const listReviewers = [
  { label: "Kurt Jarvis" },
  { label: "Kurt Jarvis" },
  { label: "Orlando Kidd" },
  { label: "Sharoz Battle" },
];

const filterOptions = createFilterOptions({
  matchFrom: "start",
  stringify: (option: IGenresFilmsOptionType) => option.label,
});

const OneRequest = ({ requestInfo }: IProps) => {
  const [selectedGenresFilm, setSelectedGenresFilm] =
    useState<IGenresFilmsOptionType | null>(null);

  return (
    <div>
      {requestInfo && (
        <>
          <div className="mb-4">
            <Image
              width={180}
              height={180}
              className="rounded-lg"
              alt={requestInfo.title}
              src={requestInfo?.image}
            />
          </div>
          <div className="flex justify-between gap-x-6 gap-y-2 items-center flex-wrap mb-5">
            <div className="flex-1">
              <label htmlFor="title">
                <Typography
                  variant="body1"
                  className="futura font-medium text-primary-700"
                >
                  Title
                </Typography>
              </label>
              <CustomInput
                fullWidth
                defaultValue={requestInfo?.title}
                id="title"
                variant="outlined"
                size="small"
                sx={{
                  "& .MuiOutlinedInput-input": { py: 1.5 },
                }}
                className="min-w-[180px]"
              />
            </div>
            <div className="flex-1">
              <label htmlFor="genre">
                <Typography
                  variant="body1"
                  className="futura font-medium text-primary-700"
                >
                  Genre
                </Typography>
              </label>
              <CustomInput
                fullWidth
                id="genre"
                variant="outlined"
                defaultValue="Tv Pilot"
                size="small"
                sx={{
                  "& .MuiOutlinedInput-input": { py: 1.5 },
                }}
                className="min-w-[180px]"
              />
            </div>
          </div>
          <div className="flex-1 mb-5">
            <label htmlFor="short-description">
              <Typography
                variant="body1"
                className="futura font-medium text-primary-700"
              >
                Short description
              </Typography>
            </label>
            <CustomInput
              fullWidth
              id="short-description"
              multiline
              maxRows={10}
              variant="outlined"
              defaultValue={requestInfo.description}
              size="small"
              sx={{
                "& .MuiOutlinedInput-input": { py: 1.5 },
              }}
            />
          </div>

          <div className="mb-5 flex flex-col gap-2">
            <label
              htmlFor="assigned-reviewer"
              className="futura font-medium block"
            >
              <Typography
                variant="body1"
                className="futura font-medium text-primary-700"
              >
                Assigned Reviewer
              </Typography>
            </label>
            <Autocomplete
              size="medium"
              id="assigned-reviewer"
              sx={{
                "& .MuiOutlinedInput-notchedOutline": { borderRadius: "12px" },
                "&.MuiButtonBase-root": { color: "#7953B5" },
              }}
              value={selectedGenresFilm}
              onChange={(
                value,
                newValue: IGenresFilmsOptionType | null
              ): void => {
                setSelectedGenresFilm(newValue);
              }}
              options={listReviewers}
              getOptionLabel={(option) => option.label}
              renderOption={(props, option) => (
                <ListItem
                  disablePadding
                  key={option.label}
                  {...props}
                  className={` px-2 sm:px-4 md:px-6`}
                  sx={{ "&:last-child": { border: 0 } }}
                >
                  <ListItemButton
                    sx={{
                      "&.MuiListItemButton-root": {
                        borderBottom: "1px solid #EEEBF1",
                      },
                    }}
                  >
                    <ListItemAvatar>
                      <Avatar className="w-8 h-8">j</Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={option.label}
                      primaryTypographyProps={{
                        color: (theme) => theme.palette.primary.main,
                        fontSize: 20,
                        fontWeight: 500,
                        fontFamily: "futura",
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              )}
              filterOptions={filterOptions}
              renderInput={({ InputProps, ...params }) => (
                <TextField
                  {...params}
                  InputProps={{
                    ...InputProps,
                    startAdornment: (
                      <InputAdornment position="start">
                        <>
                          <SvgIcon
                            fontSize="medium"
                            component={AiOutlineSearch}
                            inheritViewBox
                          />
                          <Avatar className="ml-1 w-8 h-8">j</Avatar>
                        </>
                      </InputAdornment>
                    ),
                  }}
                />
              )}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default OneRequest;
