import { Tab, Tabs } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const routes = [
  { route: "?type=open-listings", label: "Open Listings" },
  { route: "?type=drafts", label: "Drafts" },
  { route: "?type=closed-listings", label: "Closed Listings" },
];

const RoutingButton = () => {
  const [value, setValue] = useState(0);
  const { push } = useRouter();
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Tabs value={value} onChange={handleChange} className="bg-white rounded-md">
      {routes.map((item) => (
        <Tab
          key={item.label}
          onClick={() => push(`/listings/${item.route}`)}
          sx={{
            "&.MuiButtonBase-root": {
              flexGrow: { xs: 1, md: 0 },
              minWidth: "30px",
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

// "&.MuiTabs-root": { maxWidth: "full" },
