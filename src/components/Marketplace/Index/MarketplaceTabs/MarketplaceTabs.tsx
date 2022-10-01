import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useState } from "react";

const MarketplaceTabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  return (
    <div className="md:border-t border-b md:pl-4  border-gray-400 md:mt-8 w-full ">
      <Tabs
        value={activeTab}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        allowScrollButtonsMobile
        sx={{
          ".MuiTabs-scrollButtons.Mui-disabled": {
            opacity: 0.3,
          },
        }}
        className="-mb-[1px] md:ml-7 max-w-screen-2xl 2xl:mx-auto "
      >
        <Tab className="md:text-xl md:mr-2 2xl:ml-8" label="Explore" />
        <Tab className="md:text-xl md:mr-2 2xl:ml-8" label="Top rated" />
        <Tab className="md:text-xl md:mr-2 2xl:ml-8" label="Featured" />
        <Tab className="md:text-xl md:mr-2 2xl:ml-8" label="Trending" />
      </Tabs>
    </div>
  );
};

export default MarketplaceTabs;
