import {
  FormControl,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Select,
  SvgIcon,
  type SelectChangeEvent,
} from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { MdDone } from "react-icons/md";
import routes from "utils/routes";

const menuItems = [
  { query: "", value: "AllScript", name: "All scripts" },
  { query: "?reviewed=false", value: "InReview", name: "In review" },
  { query: "?reviewed=true", value: "Reviewed", name: "Reviewed" },
];

const FilterScriptsSelect = () => {
  const [statusSelectInput, setStatusSelectInput] = useState("AllScript");
  const { push, query } = useRouter();

  const handleChangeStatusSelectInput = (
    event: SelectChangeEvent<string>
  ): void => {
    setStatusSelectInput(event.target.value);
  };

  const filterScripts = (selectedQuery: string) => () => {
    push(routes.reviewsFilterScripts.dynamicUrl(selectedQuery));
  };

  useEffect(() => {
    !query.reviewed
      ? setStatusSelectInput("AllScript")
      : query.reviewed === "true"
      ? setStatusSelectInput("Reviewed")
      : setStatusSelectInput("InReview");
  }, [query]);

  return (
    <div className="my-4 md:mt-20 md:mb-6 overflow-hidden">
      <FormControl
        data-aos="fade-right"
        data-aos-anchor-placement="top-bottom"
        className="shadow-primary"
        sx={{ width: { xs: "200px", md: "215px" } }}
      >
        <Select
          defaultValue="AllScripts"
          value={statusSelectInput}
          onChange={handleChangeStatusSelectInput}
          sx={{
            "&.MuiInputBase-root": { backgroundColor: "white" },
            "& .MuiSelect-select": { py: "12px" },
            "& .MuiOutlinedInput-notchedOutline": { border: "none" },
            "& .MuiSvgIcon-root": {
              color: "#7953B5",
            },
            "& .MuiListItemIcon-root": { display: "none" },
          }}
        >
          {menuItems.map((item) => (
            <MenuItem
              onClick={filterScripts(item.query)}
              TouchRippleProps={{ className: "text-primary-main" }}
              className="w-full hover:bg-primary-50/25"
              sx={{
                "&.MuiButtonBase-root": { py: 2 },
                "&.MuiList-root": { width: "100%" },
              }}
              key={item.value}
              value={item.value}
            >
              <ListItemText className="text-primary-700">
                {item.name}
              </ListItemText>
              {item.value === statusSelectInput && (
                <ListItemIcon>
                  <SvgIcon
                    fontSize="small"
                    className="text-success-500"
                    component={MdDone}
                    inheritViewBox
                  />
                </ListItemIcon>
              )}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default FilterScriptsSelect;
