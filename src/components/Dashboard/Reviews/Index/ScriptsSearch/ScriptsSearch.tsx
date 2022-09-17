import { AiOutlineSearch } from "react-icons/ai";
import Btn from "@shared/Btn/Btn";
import Link from "next/link";

import {
  Autocomplete,
  createFilterOptions,
  InputAdornment,
  ListItem,
  ListItemButton,
  ListItemText,
  SvgIcon,
  TextField,
} from "@mui/material";
import { useState } from "react";
import routes from "routes/routes";

interface MoviesOptionType {
  inputValue?: string;
  title: string;
}

const moviesList = [
  { title: "The Long Man of Long Beach1" },
  { title: "The Long Man of Long Beach2" },
  { title: "The Long Man of Long Beach3" },
  { title: "The Long Man of Long Beach4" },
  { title: "The Long Man of Long Beach5" },
  { title: "The Long Man of Long Beach6" },
  { title: "The Long Man of Long Beach7" },
  { title: "The Long Man of Long Beach8" },
];

const filterOptions = createFilterOptions({
  matchFrom: "start",
  stringify: (option: MoviesOptionType) => option.title,
});

const ScriptsSearch = () => {
  const [selectedStore, setSelectedStory] = useState<MoviesOptionType | null>(
    null
  );
  console.log(selectedStore);

  return (
    <div className="w-full mt-8 lg:mt-16 space-y-8 mx-auto  md:max-w-[640px]">
      <div>
        <label className="futura  font-medium mb-2 block ">
          Select Script<span className="text-error-500 my-auto">*</span>
        </label>
        <Autocomplete
          size="medium"
          id="filterResults"
          sx={{
            "& .MuiInputBase-input": { color: "#7953B5" },
            "& .MuiOutlinedInput-notchedOutline": { borderRadius: "12px" },
          }}
          value={selectedStore}
          onChange={(value: any, newValue: MoviesOptionType | null) =>
            setSelectedStory(newValue)
          }
          options={moviesList}
          getOptionLabel={(option) => option.title}
          renderOption={(props, option) => (
            <ListItem
            disablePadding
              key={option.title}
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
                <ListItemText
                  primary={option.title}
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
                    <SvgIcon
                      fontSize="medium"
                      component={AiOutlineSearch}
                      inheritViewBox
                    />
                  </InputAdornment>
                ),
              }}
            />
          )}
        />
      </div>

      <div className="flex justify-center sm:justify-start">
        <Link href={`${routes.reviewsPlans}`} passHref>
          <Btn disabled={!selectedStore} size="large">
            Next
          </Btn>
        </Link>
      </div>
    </div>
  );
};

export default ScriptsSearch;
