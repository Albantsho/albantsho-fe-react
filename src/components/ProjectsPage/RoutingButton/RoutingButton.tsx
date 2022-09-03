import { Tab, Tabs } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const routes = [
  { route: "?type=scripts", label: "Scripts" },
  { route: "?type=archives", label: "Archive" },
];

const RoutingButton = () => {
  const [activeLinkIndex, setActiveLinkIndex] = useState(0);
  const { push, query } = useRouter();

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
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
      onChange={handleChange}
      className="bg-white rounded-md"
    >
      {routes.map((item) => (
        <Tab
          key={item.label}
          onClick={() => push(`/projects/${item.route}`)}
          sx={{
            "&.MuiButtonBase-root": {
              flexGrow: { xs: 1, md: 0 },
            },
            marginRight: { md: 1 },
          }}
          className={`text-gray-600 futura text-lg`}
          label={item.label}
        />
      ))}
    </Tabs>
  );
};

export default RoutingButton;
