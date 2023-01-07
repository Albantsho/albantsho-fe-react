import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import React from "react";

const routesList = [
  { id: 1, query: "?", label: "Explore" },
  { id: 2, query: "?rate=true", label: "Top rated" },
  { id: 3, query: "?featured=true", label: "Featured" },
  { id: 4, query: "?trending=true", label: "Trending" },
];

interface IProps {
  activeTab: number;
  pushToActiveRoute: (query: string) => () => void;
}

const MarketplaceTabs = ({ activeTab, pushToActiveRoute }: IProps) => {
  return (
    <div className="md:border-t border-b md:pl-4  border-gray-400 md:mt-8 w-full">
      <Tabs
        value={activeTab}
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
        {routesList.map((route) => (
          <Tab
            key={route.id}
            onClick={pushToActiveRoute(route.query)}
            className="md:text-xl md:mr-2 2xl:ml-8"
            label={route.label}
          />
        ))}
      </Tabs>
    </div>
  );
};

export default React.memo(MarketplaceTabs);
