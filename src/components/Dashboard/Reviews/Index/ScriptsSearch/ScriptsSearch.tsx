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

interface ResultsOptionType {
  inputValue?: string;
  title: string;
}

const results = [
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
  stringify: (option: ResultsOptionType) => option.title,
});

const ScriptsSearch = () => {
  // const [selectedScript, setSelectedScript] =
  //   useState<ResultsOptionType | null>(null);

  return (
    <div className="w-full mt-6 lg:mt-16 space-y-8 mx-auto  md:max-w-[640px]">
      <div>
        <label className="futura  font-medium mb-2 block ">
          Select Script<span className="text-error-500 my-auto">*</span>
        </label>
        <Autocomplete
          // value={selectedScript}
          // onInputChange={(event, newInputValue) => {
          //   setSelectedScript(newInputValue);
          // }}
          size="medium"
          id="filterResults"
          sx={{
            "& .MuiInputBase-input": { color: "#7953B5" },
            "& .MuiOutlinedInput-notchedOutline": { borderRadius: "12px" },
          }}
          options={results}
          getOptionLabel={(option) => option.title}
          renderOption={(props, option) => (
            <ListItem
              key={option.title}
              {...props}
              className={`border-b border-gray-200 px-2 sm:px-4 md:px-6`}
              sx={{ "&:last-child": { border: 0 } }}
            >
              <ListItemButton>
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

      <div className="flex justify-center" >
        <Link href="/reviews/plans" passHref>
          <Btn size="large">Next</Btn>
        </Link>
      </div>
    </div>
  );
};

export default ScriptsSearch;
