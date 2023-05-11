import { Tab, Tabs } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import routes from "utils/routes";

const routesArray = [
  { route: "?tab=current-requests", label: "Current requests" },
  { route: "?tab=assigned-requests", label: "Assigned requests" },
  { route: "?tab=completed-requests", label: "Completed requests" },
];

const TabButtons = () => {
  const [activeLinkIndex, setActiveLinkIndex] = useState(0);
  const { push, query } = useRouter();

  const activeLinkChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveLinkIndex(newValue);
  };

  useEffect(() => {
    !query.tab || query.tab === "current-requests"
      ? setActiveLinkIndex(0)
      : query.tab === "assigned-requests"
      ? setActiveLinkIndex(1)
      : setActiveLinkIndex(2);
  }, [query]);

  return (
    <Tabs
      value={activeLinkIndex}
      onChange={activeLinkChange}
      variant="scrollable"
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
            push(`${routes.reviewersAdminDashboardTabs.url(item.route)}`)
          }
          sx={{
            "&.MuiButtonBase-root": {
              flexGrow: { xs: 1, md: 0 },
              minWidth: "20px",
            },
            marginRight: { md: 1 },
            px: { xs: 1.5, md: 6 },
          }}
          className="text-gray-600 futura text-lg 2xl:text-xl font-medium lg:max-w-[260px] lg:w-full"
          label={item.label}
        />
      ))}
    </Tabs>
  );
};

export default TabButtons;
