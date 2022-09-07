import {
  FormControl,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Select,
  type SelectChangeEvent,
  SvgIcon,
} from "@mui/material";
import { useState } from "react";
import { MdDone } from "react-icons/md";
const menuItems = [
  { value: "AllScript", name: "All scripts" },
  { value: "InReview", name: "In review" },
  { value: "Reviewed", name: "Reviewed" },
];

const SortScriptsSelectInput = () => {
  const [statusSelectInput, setStatusSelectInput] = useState("AllScript");
  const handleChangeStatusSelectInput = (
    event: SelectChangeEvent<string>
  ): void => {
    setStatusSelectInput(event.target.value);
  };

  return (
    <div className="my-4 md:mt-20 md:mb-6">
      <FormControl sx={{ width: { xs: "200px", md: "220px" } }}>
        <Select
          defaultValue="AllScripts"
          value={statusSelectInput}
          onChange={handleChangeStatusSelectInput}
          sx={{
            "& .MuiSelect-select": { backgroundColor: "white" },
            "& .MuiOutlinedInput-notchedOutline": { border: "none" },
            "& .MuiSvgIcon-root": {
              color: "#7953B5",
            },
            "& .MuiListItemIcon-root": { display: "none" },
          }}
        >
          {menuItems.map((item) => (
            <MenuItem key={item.value} value={item.value}>
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

export default SortScriptsSelectInput;
