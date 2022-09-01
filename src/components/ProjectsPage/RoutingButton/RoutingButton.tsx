import { Tab, Tabs } from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";

const routes = [
  { route: "?type=scripts", label: "Scripts" },
  { route: "?type=archives", label: "Archive" },
];

const RoutingButton = () => {
  const [value, setValue] = useState(0);
  const { push } = useRouter();
  console.log(push);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Tabs value={value} onChange={handleChange} className="bg-white rounded-md">
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
          className={`text-gray-600  futura text-lg`}
          label={item.label}
        />
      ))}
    </Tabs>
  );
};

export default RoutingButton;
