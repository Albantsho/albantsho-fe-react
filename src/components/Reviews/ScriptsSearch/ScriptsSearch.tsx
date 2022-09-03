import { AiOutlineSearch } from "react-icons/ai";
import Btn from "@shared/Btn/Btn";
import Link from "next/link";
import { Dispatch, SetStateAction, useState } from "react";

import {
  Autocomplete,
  createFilterOptions,
  InputAdornment,
  ListItem,
  ListItemButton,
  ListItemText,
  SvgIcon,
  TextField,
  Typography,
} from "@mui/material";
interface FilmOptionType {
  inputValue?: string;
  title: string;
}

const results = [
  { title: "The Long Man of Long Beach" },
  { title: "The Long Man of Long Beach" },
  { title: "The Long Man of Long Beach" },
  { title: "The Long Man of Long Beach" },
  { title: "The Long Man of Long Beach" },
  { title: "The Long Man of Long Beach" },
  { title: "The Long Man of Long Beach" },
  { title: "The Long Man of Long Beach" },
];

const filterOptions = createFilterOptions({
  matchFrom: "start",
  stringify: (option: FilmOptionType) => option.title,
});

const ScriptsSearch = () => {
  return (
    <div className="bg-white -mt-4 mx-auto relative md:items-center rounded-md px-5 pt-7 pb-6 sm:pb-9 lg:pb-12 xl:pb-16  md:pt-14  flex flex-col min-h-screen">
      <div className="md:min-w-[580px]">
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
          options={results}
          getOptionLabel={(option) => option.title}
          renderOption={(props, option) => (
            <ListItem
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

      <div className="flex-1  mt-10 md:min-w-[540px] md:bottom-[20%] md:left-10">
        <Link href="/abstract" passHref>
          <Btn size="large">Next</Btn>
        </Link>
      </div>
    </div>
  );
};

export default ScriptsSearch;

{
  /* <Typography
variant="h6"
color="primary.700"
className="mb-2 md:mb-4 futura font-medium"
gutterBottom
></Typography> */
}

// InputProps={{
//   startAdornment: (
//     <InputAdornment position="start">
//       <SvgIcon
//         fontSize="medium"
//         component={AiOutlineSearch}
//         inheritViewBox
//       />
//     </InputAdornment>
//   ),
// }}

{
  /* <div className="px-4 flex-1 rounded-lg shadow-md pt-5 md:pt-7 overflow-y-scroll md:min-w-[540px]">
  <div className="relative max-w-[520px]  ">
    <input
      placeholder="Search by name"
      type="text"
      className="outline-none bg-gray-50  border-none bg-transparent w-full placeholder:text-neutral-800 placeholder:font-light  rounded-sm pr-3 text-lg pl-9 py-2 md:py-3  md:pl-14"
    />
    <BiSearch className="absolute text-neutral-800 left-2 top-3 md:left-4  md:top-4 text-xl" />
  </div>
  <div className="mt-10 md:mt-7 pb-8 space-y-7 max-h-96 md:max-h-[560px]">
    <div className="">
      <Typography
        variant="h6"
        color="primary.700"
        className="mb-2 md:mb-4 futura"
      >
        The Apple and The Berry
      </Typography>
      <Divider />
    </div>
    <div className="">
      <Typography
        variant="h6"
        color="primary.700"
        className="mb-2 md:mb-4 futura"
      >
        The Apple and The Berry
      </Typography>
      <Divider />
    </div>
    <div className="">
      <Typography
        variant="h6"
        color="primary.700"
        className="mb-2 md:mb-4 futura"
      >
        The Apple and The Berry
      </Typography>
      <Divider />
    </div>
    <div className="">
      <Typography
        variant="h6"
        color="primary.700"
        className="mb-2 md:mb-4 futura"
      >
        The Apple and The Berry
      </Typography>
      <Divider />
    </div>
    <div className="">
      <Typography
        variant="h6"
        color="primary.700"
        className="mb-2 md:mb-4 futura"
      >
        The Apple and The Berry
      </Typography>
      <Divider />
    </div>

    <div className="">
      <Typography
        variant="h6"
        color="primary.700"
        className="mb-2 md:mb-4 futura"
      >
        The Apple and The Berry
      </Typography>
      <Divider />
    </div>
    <div className="">
      <Typography
        variant="h6"
        color="primary.700"
        className="mb-2 md:mb-4 futura"
      >
        The Apple and The Berry
      </Typography>
      <Divider />
    </div>
    <div className="">
      <Typography
        variant="h6"
        color="primary.700"
        className="mb-2 md:mb-4 futura"
      >
        The Apple and The Berry
      </Typography>
      <Divider />
    </div>
    <div className="">
      <Typography
        variant="h6"
        color="primary.700"
        className="mb-2 md:mb-4 futura"
      >
        The Apple and The Berry
      </Typography>
      <Divider />
    </div>
    <div className="">
      <Typography
        variant="h6"
        color="primary.700"
        className="mb-2 md:mb-4 futura"
      >
        The Apple and The Berry
      </Typography>
      <Divider />
    </div>
    <div className="">
      <Typography
        variant="h6"
        color="primary.700"
        className="mb-2 md:mb-4 futura"
      >
        The Apple and The Berry
      </Typography>
    </div>
  </div>
</div>; */
}

// InputProps={{
//   startAdornment: (
//     <InputAdornment position="start">
//       <SvgIcon
//         fontSize="small"
//         component={BiSearch}
//         inheritViewBox
//       />
//     </InputAdornment>
//   ),
// }}
