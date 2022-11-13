import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import routes from "routes/routes";
import listings from "../assets/listings.png";
import projects from "../assets/projects.png";
import reviews from "../assets/reviews.png";
import scripts from "../assets/scripts.png";

const routesArray = [
  { route: routes.projectsDashboard, title: "Projects", icon: projects },
  { route: routes.listingsDashboard, title: "Listings", icon: listings },
  { route: routes.reviewsDashboard, title: "Reviews", icon: reviews },
];
const routesArray2 = [
  { route: routes.scriptsDashboard, title: "Scripts", icon: scripts },
];

const DashboardSidebarOnMobile = () => {
  const [activeRoute, setActiveRoute] = useState(0);
  const { route, push } = useRouter();

  return (
    <div className=" lg:hidden">
      <BottomNavigation
        showLabels
        value={activeRoute}
        className="bg-primary-900 w-full min-h-[65px] flex justify-evenly text-white sm:px-8"
        onChange={(event, newValue) => {
          setActiveRoute(newValue);
        }}
      >
        {
          // user.user_type === "user" &&
          routesArray.map((item) => {
            return (
              <BottomNavigationAction
                key={item.title}
                onClick={() => push(`${item.route}`)}
                showLabel
                sx={{
                  "&:hover": {
                    backgroundColor: "#6842A5",
                  },
                  "&.MuiButtonBase-root": {
                    color: "white",
                  },
                  gap: 0.5,
                  py: 1,
                  borderBottom: `${
                    route === item.route && "4px solid #FDDC6A"
                  }`,
                  "&.Mui-selected": {
                    borderBottom: `${
                      route === item.route && "4px solid #FDDC6A"
                    }`,
                  },
                }}
                className={`${
                  route === item.route && " bg-primary-700"
                } sm:max-w-full`}
                label={item.title}
                icon={<Image loading="lazy" src={item.icon} alt={item.title} />}
              />
            );
          })
        }
        {/* {user.user_type === "producer" &&
          routesArray2.map((item) => {
            return (
              <BottomNavigationAction
                key={item.title}
                onClick={() => push(`${item.route}`)}
                showLabel
                sx={{
                  "&:hover": {
                    backgroundColor: "#6842A5",
                  },
                  "&.MuiButtonBase-root": {
                    color: "white",
                  },
                  gap: 0.5,
                  py: 1,
                  borderBottom: `${
                    route === item.route && "4px solid #FDDC6A"
                  }`,
                  "&.Mui-selected": {
                    borderBottom: `${
                      route === item.route && "4px solid #FDDC6A"
                    }`,
                  },
                }}
                className={`${
                  route === item.route && " bg-primary-700"
                } sm:max-w-full`}
                label={item.title}
                icon={<Image loading="lazy" src={item.icon} alt={item.title} />}
              />
            );
          })} */}
      </BottomNavigation>
    </div>
  );
};

export default DashboardSidebarOnMobile;
