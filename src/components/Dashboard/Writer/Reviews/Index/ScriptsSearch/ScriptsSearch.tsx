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
import Btn from "@shared/Btn/Btn";
import useDraftApi from "apis/Draft.api";
import { IDraft } from "interfaces/draft";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import routes from "utils/routes";
interface ScriptsOptionType {
  inputValue?: string;
  title: string;
  _id: string;
}

interface IProps {
  showSearchScript: boolean | undefined;
  openSearchScript: boolean;
}

let scriptsList: Array<IDraft> = [];

const filterOptions = createFilterOptions({
  matchFrom: "start",
  stringify: (option: ScriptsOptionType) => option.title,
});

const ScriptsSearch = ({ showSearchScript, openSearchScript }: IProps) => {
  const [selectedScript, setSelectedScript] =
    useState<ScriptsOptionType | null>(null);
  const { getAllDraft } = useDraftApi();

  useEffect(() => {
    async function getOtherDrafts() {
      try {
        const res = await getAllDraft("reviewed=false");
        scriptsList = res.data.drafts;
      } catch (error) {
        ("");
      }
    }

    getOtherDrafts();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className={`${
        showSearchScript && openSearchScript ? "block" : "hidden"
      } w-full mt-8 lg:mt-16 space-y-8 mx-auto  md:max-w-[640px]`}
    >
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
          value={selectedScript}
          onChange={(value, newValue: ScriptsOptionType | null): void => {
            setSelectedScript(newValue);
          }}
          options={scriptsList}
          getOptionLabel={(option) => option.title}
          renderOption={(props, option) => (
            <ListItem
              disablePadding
              key={option.title}
              {...props}
              className={`px-2 sm:px-4 md:px-6`}
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
        <Link
          legacyBehavior
          href={routes.reviewsPlans.dynamicUrl(selectedScript?._id as string)}
        >
          <Btn disabled={!selectedScript} size="large">
            Next
          </Btn>
        </Link>
      </div>
    </div>
  );
};

export default ScriptsSearch;
