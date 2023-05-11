import { Tab, Tabs } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import routes from "utils/routes";

const routesArray = [
  { route: "?archive=false", label: "Scripts" },
  { route: "?archive=true", label: "Archive" },
];

const TabButtons = () => {
  const [activeLinkIndex, setActiveLinkIndex] = useState(0);
  const { push, query } = useRouter();

  const activeLinkChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveLinkIndex(newValue);
  };

  useEffect(() => {
    !query.archive || query.archive === "false"
      ? setActiveLinkIndex(0)
      : setActiveLinkIndex(1);
  }, [query]);

  return (
    <Tabs
      value={activeLinkIndex}
      onChange={activeLinkChange}
      className="bg-white rounded-md shadow-primary"
      sx={{
        "& .MuiTabs-indicator": {
          borderBottom: { sx: "2px solid #7953B5", lg: "4px solid #7953B5" },
          mb: { lg: "-1px" },
        },
      }}
    >
      {routesArray.map((item) => (
        <Tab
          key={item.label}
          onClick={() =>
            push(`${routes.projectsDashboardTabs.url(item.route)}`)
          }
          sx={{
            "&.MuiButtonBase-root": {
              flexGrow: { xs: 1, md: 0 },
              px: { md: 10 },
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
