import { FormControl, MenuItem, Select } from "@mui/material";
import React from "react";

const SelectInput = () => {
  
  return (
    <div className="my-4 md:mt-20 md:mb-6 -10 ">
      <FormControl sx={{ width: { xs: "133px", md: "220px" } }}>
        <Select
        value="All Scripts"
          defaultValue="AllScript"
          sx={{
            "& .MuiOutlinedInput-notchedOutline": {
              border: "none",
              backgroundColor: "#fff",
            },
            "& .MuiSvgIcon-root": {
              color: "#7953B5",
              zIndex: 3,
            },
          }}
        >
          <MenuItem  className="text-primary-700">All scripts</MenuItem>
          <MenuItem  className="text-primary-700">In review</MenuItem>
          <MenuItem  className="text-primary-700">Reviewed</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default SelectInput;
