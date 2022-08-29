import {
  BottomNavigation,
  BottomNavigationAction,
  Typography,
} from "@mui/material";
import projects from "../assets/projects.png";
import reviews from "../assets/reviews.png";
import listnings from "../assets/listnings.png";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const routes = [
  { route: "/projects", title: "Projects", icon: projects },
  { route: "/listings", title: "Listings", icon: listnings },
  { route: "/reviews", title: "Reviews", icon: reviews },
];

const ListDashboardMobile = () => {
  const [value, setValue] = useState(0);
  const { route } = useRouter();
  return (
    <div className=" lg:hidden">
      <BottomNavigation
        showLabels
        value={value}
        className="bg-primary-900 w-full flex justify-evenly text-white"
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        {routes.map((item) => {
          return (
            <Link
              key={item.title}
              className="text-white border-b-4 border-b-warning-500"
              href={`${item.route}`}
              passHref
            >
              <BottomNavigationAction
                showLabel
                disableRipple={true}
                sx={{
                  "&:hover": {
                    backgroundColor: "#6842A5",
                  },
                  "&.MuiButtonBase-root": {
                    "&:focus": { borderBottom: "4px solid #FDDC6A" },
                  },
                }}
                className={`${
                  route === item.route &&
                  " border-b-4 border-b-secondary-500 bg-primary-700"
                } text-white`}
                label={item.title}
                icon={<Image loading="lazy" src={item.icon} alt={item.title} />}
              />
            </Link>
          );
        })}
      </BottomNavigation>
    </div>
  );
};

export default ListDashboardMobile;
