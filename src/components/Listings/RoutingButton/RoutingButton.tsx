import { Tab, Tabs } from "@mui/material";
import Link from "next/link";
import { useState } from "react";

const routes = [
  { route: "?type=open-listings", label: "Open Listings" },
  { route: "?type=drafts", label: "Drafts" },
  { route: "?type=closed-listings", label: "Closed Listings" },
];

const RoutingButton = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className="">
      <Tabs
        value={value}
        onChange={handleChange}
        className="bg-white rounded-md"
      >
        {routes.map((item) => (
          <Link
            className="text-black"
            key={item.label}
            href={`/listings/${item.route}`}
            passHref
          >
            <Tab
              sx={{
                "&.MuiButtonBase-root": { flexGrow: { xs: 1, lg: 0 } },
                marginRight: { lg: 1 },
              }}
              className={`text-gray-600  futura text-lg`}
              label={item.label}
            />
          </Link>
        ))}
      </Tabs>
    </div>
  );
};

export default RoutingButton;
