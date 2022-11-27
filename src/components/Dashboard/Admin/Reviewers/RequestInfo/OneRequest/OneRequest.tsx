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
import { IReviewer } from "interfaces/reviews";
import { IFullInformationScript } from "interfaces/script";
import Image from "next/image";
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

interface IProps {
  script: IFullInformationScript;
  readonly reviewersList: IReviewer[];
}

interface IReviewersListOptionType {
  inputValue?: string;
  fullname: string;
}

const filterOptions = createFilterOptions({
  matchFrom: "start",
  stringify: (option: IReviewersListOptionType) => option.fullname,
});

const OneRequest = ({ reviewersList, script }: IProps) => {
  const [selectedReviewer, setSelectedReviewer] =
    useState<IReviewersListOptionType | null>(null);

  return (
    <div>
      <div className="mb-4">
        <Image
          width={180}
          height={180}
          className="rounded-lg"
          alt={script.title}
          src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${script.script_image}`}
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
          <div
            id="title"
            className="min-w-[180px] p-3 border border-gray-300 rounded-lg"
          >
            <Typography className="leading-normal">{script.title}</Typography>
          </div>
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
          <div
            id="genre"
            className="min-w-[180px] p-3 border border-gray-300 rounded-lg"
          >
            <Typography className="leading-normal">
              {script.primary_genre}
            </Typography>
          </div>
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
        <div
          id="short-description"
          className=" p-3 border border-gray-300 rounded-lg"
        >
          <Typography className="leading-normal">
            {script.description}
          </Typography>
        </div>
      </div>

      <div className="mb-5 flex flex-col gap-2">
        <label htmlFor="assigned-reviewer" className="futura font-medium block">
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
          value={selectedReviewer}
          onChange={(
            value,
            newValue: IReviewersListOptionType | null
          ): void => {
            setSelectedReviewer(newValue);
          }}
          options={reviewersList}
          getOptionLabel={(option) => option.fullname}
          renderOption={(props, option) => (
            <ListItem
              disablePadding
              key={option.fullname}
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
                  <Avatar className="w-8 h-8">{option.fullname}</Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={option.fullname}
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
                    </>
                  </InputAdornment>
                ),
              }}
            />
          )}
        />
      </div>
    </div>
  );
};

export default OneRequest;
