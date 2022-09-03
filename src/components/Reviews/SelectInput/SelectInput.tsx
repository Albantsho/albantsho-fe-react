import {
  FormControl,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Select,
  SvgIcon,
} from "@mui/material";
import { useState } from "react";
import reviewIcon from "@assets/icons/reviewed.svg";
import { MdDone } from "react-icons/md";
const menuItems = [
  { value: "AllScript", name: "All scripts" },
  { value: "InReview", name: "In review" },
  { value: "Reviewed", name: "Reviewed" },
];

const SelectInput = () => {
  const [status, setStatus] = useState("AllScripts");
  const handleChange = (event: SelectChangeEvent<string>): void => {
    setStatus(event.target.value);
    console.log(event.target.value);
  };

  return (
    <div className="my-4 md:mt-20 md:mb-6">
      <FormControl sx={{ width: { xs: "200px", md: "220px" } }}>
        <Select
          value={status}
          onChange={handleChange}
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
              {item.value === status && (
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

export default SelectInput;
