import { Tab, Tabs } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import routes from "utils/routes";

const routesArray = [
  { route: "", label: "Live Blogs" },
  { route: "?archive=true", label: "Archive" },
  { route: "?trash=true", label: "Trash" },
];

const TabButtons = () => {
  const [activeLinkIndex, setActiveLinkIndex] = useState(0);
  const { push, query } = useRouter();

  const activeLinkChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveLinkIndex(newValue);
  };

  useEffect(() => {
    // !query.tab || query.tab === "live-blogs"
    //   ? setActiveLinkIndex(0)
    //   : query.tab === "archive"
    //   ? setActiveLinkIndex(1)
    //   : setActiveLinkIndex(2);
    if (!query.archive || !query.trash) setActiveLinkIndex(0);
    if (query && query.archive) setActiveLinkIndex(1);
    if (query && query.trash) setActiveLinkIndex(2);
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
            push(`${routes.blogsAdminDashboardTabs.url(item.route, "")}`)
          }
          sx={{
            "&.MuiButtonBase-root": {
              flexGrow: { xs: 1, md: 0 },
              minWidth: "20px",
            },
            marginRight: { md: 1 },
            px: { xs: 1.5, md: 6 },
          }}
          className="text-gray-600 lg:max-w-[180px] lg:w-full futura text-lg 2xl:text-xl font-medium"
          label={item.label}
        />
      ))}
    </Tabs>
  );
};

export default TabButtons;
