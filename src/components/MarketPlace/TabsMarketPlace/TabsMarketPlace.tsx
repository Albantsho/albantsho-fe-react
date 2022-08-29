import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useState } from "react";

const TabsMarketPlace = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className="md:border-t border-b md:pl-4 border-gray-400 md:mt-8 w-full ">
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        allowScrollButtonsMobile
        sx={{
          ".MuiTabs-scrollButtons.Mui-disabled": {
            opacity: 0.3,
          },
        }}
        className="-mb-[1px] md:ml-7"
      >
        <Tab className="md:text-xl md:mr-2" label="Explore" />
        <Tab className="md:text-xl md:mr-2" label="Top rated" />
        <Tab className="md:text-xl md:mr-2" label="Featured" />
        <Tab className="md:text-xl md:mr-2" label="Trending" />
      </Tabs>
    </div>
  );
};

export default TabsMarketPlace;
