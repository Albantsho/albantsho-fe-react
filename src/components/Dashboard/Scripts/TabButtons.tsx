import { Tab, Tabs } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import routes from "routes/routes";

const routesArray = [
  { route: "?type=current-bids", label: "Current Bids" },
  { route: "?type=my-scripts", label: "My Scripts" },
];

const TabButtons = () => {
  const [activeLinkIndex, setActiveLinkIndex] = useState(0);
  const { push, query } = useRouter();

  const activeLinkChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveLinkIndex(newValue);
  };

  useEffect(() => {
    !query.type || query.type === "current-bids"
      ? setActiveLinkIndex(0)
      : setActiveLinkIndex(1);
  }, [query]);

  return (
    <Tabs
      value={activeLinkIndex}
      onChange={activeLinkChange}
      className="bg-white rounded-md"
      sx={{
        "& .MuiTabs-indicator": {
          borderBottom: { sx: "2px solid #7953B5", md: "4px solid #7953B5" },
          mb: { md: "-1px" },
        },
      }}
    >
      {routesArray.map((item) => (
        <Tab
          key={item.label}
          onClick={() => push(`${routes.scriptsDashboard}/${item.route}`)}
          sx={{
            "&.MuiButtonBase-root": {
              flexGrow: { xs: 1, md: 0 },
              px: { md: 6 },
            },
            marginRight: { md: 1 },
          }}
          className={`text-gray-600 futura text-lg 2xl:text-xl font-medium`}
          label={item.label}
        />
      ))}
    </Tabs>
  );
};

export default TabButtons;
