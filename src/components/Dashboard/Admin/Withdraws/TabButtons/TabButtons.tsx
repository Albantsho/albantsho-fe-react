import { Tab, Tabs } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import routes from "utils/routes";

const routesArray = [
  { route: "?status=onchecking", label: "Checking Withdraws" },
  { route: "?status=done", label: "Verified withdraws" },
  { route: "?status=rejected", label: "Rejected withdraws" },
];

const TabButtons = () => {
  const [activeLinkIndex, setActiveLinkIndex] = useState(0);
  const { push, query } = useRouter();

  const activeLinkChange = (_event: React.SyntheticEvent, newValue: number) => {
    setActiveLinkIndex(newValue);
  };

  useEffect(() => {
    if (!query || query.status === "onchecking") setActiveLinkIndex(0);
    if (query && query.status === "done") setActiveLinkIndex(1);
    if (query && query.status === "rejected") setActiveLinkIndex(2);
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
            push(`${routes.withdrawsAdminDashboardTabs.url(item.route)}`)
          }
          sx={{
            "&.MuiButtonBase-root": {
              flexGrow: { xs: 1, md: 0 },
              minWidth: "20px",
            },
            marginRight: { md: 1 },
            px: { xs: 1.5, md: 6 },
          }}
          className="text-gray-600 lg:max-w-[280px] lg:w-full futura text-lg 2xl:text-xl font-medium"
          label={item.label}
        />
      ))}
    </Tabs>
  );
};

export default TabButtons;
