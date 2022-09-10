import { Tab, Tabs } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const routes = [
  { route: "?type=scripts", label: "Scripts" },
  { route: "?type=archives", label: "Archive" },
];

const TabButtons = () => {
  const [activeLinkIndex, setActiveLinkIndex] = useState(0);
  const { push, query } = useRouter();

  const activeLinkChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveLinkIndex(newValue);
  };

  useEffect(() => {
    !query.type || query.type === "scripts"
      ? setActiveLinkIndex(0)
      : setActiveLinkIndex(1);
  }, [query]);

  return (
    <Tabs
      value={activeLinkIndex}
      onChange={activeLinkChange}
      className="bg-white rounded-md"
      sx={{"& .MuiTabs-indicator":{borderBottom:"5px solid #7953B5",mb:"-1px"}}}
    >
      {routes.map((item) => (
        <Tab
          key={item.label}
          onClick={() => push(`/projects/${item.route}`)}
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
