import {
  FormControl,
  MenuItem,
  Select,
} from "@mui/material";
import { useState } from "react";

const SelectInput = () => {
  const [status, setStatus] = useState("AllScripts");
  const handleChange = (event: SelectChangeEvent) => {
    setStatus(event.target.value);
  };

  return (
    <div className="my-4 md:mt-20 md:mb-6 -10 ">
      <FormControl sx={{ width: { xs: "133px", md: "220px" } }}>
        <Select
          value={status}
          onChange={handleChange}
          sx={{
            // "& .MuiOutlinedInput-notchedOutline": {
            //   border: "none",
            //   backgroundColor: "#fff",
            // },
            "& .MuiSelect-select": { backgroundColor: "white" },
            "& .MuiOutlinedInput-notchedOutline": { border: "none" },
            "& .MuiSvgIcon-root": {
              color: "#7953B5",
            },
          }}
        >
          <MenuItem value="AllScript" className="text-primary-700">
            All scripts
          </MenuItem>
          <MenuItem value="InReview" className="text-primary-700">
            In review
          </MenuItem>
          <MenuItem value="Reviewed" className="text-primary-700">
            Reviewed
          </MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default SelectInput;
