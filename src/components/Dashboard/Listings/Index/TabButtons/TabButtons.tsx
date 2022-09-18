import { Tab, Tabs } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import routes from "routes/routes";

const routesArray = [
  { route: "?tab=opening-list", label: "Open Listings" },
  { route: "?tab=drafts", label: "Drafts" },
  { route: "?tab=closed-list", label: "Closed Listings" },
];

const TabButtons = () => {
  const [activeLink, setActiveLink] = useState(0);
  const { push, query } = useRouter();
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveLink(newValue);
  };

  useEffect(() => {
    if (!query.tab || query.tab === "opening-list") setActiveLink(0);
    if (query.tab === "drafts") setActiveLink(1);
    if (query.tab === "closed-list") setActiveLink(2);
  }, [query]);

  return (
    <Tabs
      value={activeLink}
      variant="scrollable"
      onChange={handleChange}
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
          onClick={() => push(`${routes.listingsDashboardTabs(item.route)}`)}
          sx={{
            "&.MuiButtonBase-root": {
              flexGrow: { xs: 1, md: 0 },
              minWidth: "20px",
            },
            marginRight: { md: 1 },
            px: { xs: 1.5, md: 6 },
          }}
          className={`text-gray-600 futura text-lg 2xl:text-xl font-medium`}
          label={item.label}
        />
      ))}
    </Tabs>
  );
};

export default TabButtons;
