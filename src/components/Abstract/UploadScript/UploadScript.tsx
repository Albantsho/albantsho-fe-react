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
import useDraftApi from "apis/Draft.api";
import { IAbstractFormValues } from "interfaces/abstract";
import { IFullInformationScript } from "interfaces/script";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import type {
  Control,
  FieldErrorsImpl,
  UseFormRegister,
} from "react-hook-form";
import { Controller } from "react-hook-form";
import { AiOutlineSearch } from "react-icons/ai";
import routes from "utils/routes";

interface IDraft {
  _id: string;
  title: string;
  image: null | string;
}

let results: Array<IDraft> = [];

interface IProps {
  activeButton: number;
  setActiveButton: React.Dispatch<React.SetStateAction<number>>;
  register: UseFormRegister<IAbstractFormValues>;
  errors: Partial<FieldErrorsImpl<IAbstractFormValues>>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<IAbstractFormValues, any>;
  step: number;
  script: IFullInformationScript;
}

interface ResultsOptionType {
  inputValue?: string;
  _id?: string;
  title: string;
}

const filterOptions = createFilterOptions({
  matchFrom: "start",
  stringify: (option: ResultsOptionType) => option.title,
});

const UploadScript = ({
  activeButton,
  setActiveButton,
  step,
  control,
  errors,
  script,
}: IProps) => {
  const { getAllDraft } = useDraftApi();
  const { query } = useRouter();

  useEffect(() => {
    async function getOtherDrafts() {
      try {
        const res = await getAllDraft();
        results = res.data.drafts;
      } catch (error) {
        ("");
      }
    }

    getOtherDrafts();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={`${step === 6 && activeButton === 0 ? "block" : "hidden"}`}>
      <Typography
        variant="h5"
        color="primary.700"
        className="futura font-medium leading-normal"
      >
        Upload Script
      </Typography>

      <Typography variant="body1" className="text-neutral-700 mb-6">
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

      <div className="flex mt-5 md:mt-6 items-start flex-col justify-start gap-2 mb-3 md:mb-5">
        <label htmlFor="filter-Results">
          <Typography
            variant="body1"
            className="futura font-medium text-primary-700"
          >
            Select Script<span className="text-error-500 my-auto">*</span>
          </Typography>
        </label>
        <Controller
          name="draft"
          control={control}
          render={({ field: { onChange } }) => (
            <Autocomplete
              fullWidth
              onChange={(_, data) => {
                onChange(data?._id);
                return data;
              }}
              size="medium"
              id="filter-Results"
              sx={{
                "& .MuiSvgIcon-root": { color: "#7953B5 !important" },
                "& .MuiInputBase-input": { color: "#7953B5" },
                "& .MuiOutlinedInput-notchedOutline": { borderRadius: "12px" },
              }}
              options={results}
              getOptionLabel={(option) => option.title}
              renderOption={(props, option) => (
                <ListItem {...props} className={` px-2 sm:px-4 md:px-6`}>
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
          )}
        />
        {errors.draft?.message && (
          <span className="text-error-700 text-base">
            {errors.draft.message}
          </span>
        )}
        {!script.scriptFileType ? (
          <Link
            href={routes.script.url(query.id as string)}
            passHref
            legacyBehavior
          >
            <Button className="max-w-[520px] w-full  text-primary-700 text-center py-3 mt-8 block mx-auto rounded-lg border-2 border-dashed mb-5 px-8  border-primary-700 ">
              Write new script
            </Button>
          </Link>
        ) : script.scriptFileType === "text/plain" ? (
          <Link
            href={routes.script.url(query.id as string)}
            passHref
            legacyBehavior
          >
            <Button className="max-w-[520px] w-full  text-primary-700 text-center py-3 mt-8 block mx-auto rounded-lg border-2 border-dashed mb-5 px-8  border-primary-700 ">
              Continue writing
            </Button>
          </Link>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default UploadScript;
