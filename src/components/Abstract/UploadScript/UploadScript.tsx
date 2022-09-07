import {
  Autocomplete,
  Button,
  ButtonGroup,
  createFilterOptions,
  InputAdornment,
  ListItem,
  ListItemButton,
  ListItemText,
  SvgIcon,
  TextField,
  Typography,
} from "@mui/material";
import Btn from "@shared/Btn/Btn";
import { AiOutlineSearch } from "react-icons/ai";
import { Dispatch, SetStateAction } from "react";

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

interface IProps {
  activeButton: number;
  setActiveButton: Dispatch<SetStateAction<number>>;
}

interface ResultsOptionType {
  inputValue?: string;
  title: string;
}

const filterOptions = createFilterOptions({
  matchFrom: "start",
  stringify: (option: ResultsOptionType) => option.title,
});

const UploadScript = ({ activeButton, setActiveButton }: IProps) => {

  return (
    <>
      <Typography
        width="100%"
        variant="h6"
        color="primary.700"
        className="futura font-medium"
      >
        Upload Script
      </Typography>

      <Typography
        variant="body2"
        className="text-neutral-700 mb-4 sm:mb-6 lg:mb-10 max-w-[290px] md:max-w-full"
      >
        By the way, your story is not a gift but a NECESSITY
      </Typography>

      <ButtonGroup
       
        disableElevation
        variant="contained"
        className="w-full mt-4 md:mt-7 mb-4 md:mb-7 border rounded-md"
      >
        <Btn
          onClick={() => {
            setActiveButton(1);
          }}
       
          className={`${
            activeButton === 0
              ? "bg-primary-700 text-white"
              : "border-none bg-white text-[#B7B7B7]"
          } flex-1 py-3`}
        >
          Draft
        </Btn>
        <Btn
          onClick={() => {
            setActiveButton(1);
          }}
          className={`${
            activeButton === 1
              ? "bg-primary-700 text-white"
              : "border-none bg-white text-[#B7B7B7]"
          } flex-1 py-3`}
        >
          Upload Script
        </Btn>
      </ButtonGroup>

      <div>
        <label
          htmlFor="filter-Results"
          className="futura  font-medium mb-2 block text-neutral-800"
        >
          Select Script<span className="text-error-500 my-auto">*</span>
        </label>
        <Autocomplete
          size="medium"
          id="filter-Results"
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
        <Button
          className="max-w-[520px] w-full  text-primary-700 text-center py-2 mt-8 block mx-auto rounded-md border-2 border-dashed mb-5 px-8  border-primary-700 "
        >
          Write new script
        </Button>
      </div>
    </>
  );
};

export default UploadScript;
