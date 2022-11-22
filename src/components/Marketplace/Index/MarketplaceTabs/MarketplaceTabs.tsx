import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useEffect, useState } from "react";
import routes from "routes/routes";
import { useRouter } from "next/router";

const routesList = [
  { id: 1, query: "", label: "Explore" },
  { id: 2, query: "?sort=rate", label: "Top rated" },
  { id: 3, query: "?sort=featured", label: "Featured" },
  { id: 4, query: "?sort=trending", label: "Trending" },
];

const MarketplaceTabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  const { push, query } = useRouter();

  useEffect(() => {
    if (query.sort === "rate") setActiveTab(1);
    else if (query.sort === "featured") setActiveTab(2);
    else if (query.sort === "trending") setActiveTab(3);
    else setActiveTab(0);
  }, [query]);

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
            onClick={() => {
              push(routes.marketplaceTabs(route.query));
            }}
            className="md:text-xl md:mr-2 2xl:ml-8"
            label={route.label}
          />
        ))}
      </Tabs>
    </div>
  );
};

export default MarketplaceTabs;
