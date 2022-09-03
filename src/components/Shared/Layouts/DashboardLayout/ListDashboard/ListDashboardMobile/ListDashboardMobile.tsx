import {
  BottomNavigation,
  BottomNavigationAction,
} from "@mui/material";
import projects from "../assets/projects.png";
import reviews from "../assets/reviews.png";
import listings from "../assets/listings.png";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";

const routes = [
  { route: "/projects", title: "Projects", icon: projects },
  { route: "/listings", title: "Listings", icon: listings },
  { route: "/reviews", title: "Reviews", icon: reviews },
];

const ListDashboardMobile = () => {
  const [value, setValue] = useState(0);
  const { route, push } = useRouter();

  return (
    <div className=" lg:hidden">
      <BottomNavigation
        showLabels
        value={value}
        className="bg-primary-900 w-full min-h-[65px] flex justify-evenly text-white"
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        {routes.map((item) => {
          return (
            <BottomNavigationAction
              key={item.title}
              onClick={() => push(`${item.route}`)}
              showLabel
              disableRipple={true}
              sx={{
                "&:hover": {
                  backgroundColor: "#6842A5",
                },
                "&.MuiButtonBase-root": {
                  color: "white",
                },
                gap: 0.5,
                py: 1,
                borderBottom: `${route === item.route && "4px solid #FDDC6A"}`,
                "&.Mui-selected": {
                  borderBottom: `${
                    route === item.route && "4px solid #FDDC6A"
                  }`,
                },
              }}
              className={`${route === item.route && " bg-primary-700"}`}
              label={item.title}
              icon={<Image loading="lazy" src={item.icon} alt={item.title} />}
            />
          );
        })}
      </BottomNavigation>
    </div>
  );
};

export default ListDashboardMobile;
