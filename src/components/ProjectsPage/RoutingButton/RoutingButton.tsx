import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const RoutingButton = () => {
  const [value, setValue] = useState(0);
  const { route } = useRouter();
  console.log(route);

  return (
    <div className="bg-tinted-50 ">
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        className="w-full flex justify-start"
      >
        {[
          { route: "/scripts", label: "Scripts" },
          { route: "/archives", label: "Archive" },
        ].map((item) => (
          <Link
            className="text-black"
            key={item.label}
            href={`/projects/${item.route}`}
            passHref
          >
         <BottomNavigationAction
                sx={{
                    color:"#000",
                  "&:hover": {
                    backgroundColor: "#6842A5",
                  },
                  "&:active": {
                    backgroundColor: "#6842A5",
                  },
                }}
                className={`${
                  route === item.route &&
                  " border-b-4 border-b-secondary-500 bg-primary-700"
                } `}
                label={item.label}
              
              />
          </Link>
        ))}
      </BottomNavigation>
    </div>
  );
};

export default RoutingButton;
