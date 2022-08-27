import { BottomNavigation, BottomNavigationAction } from "@mui/material";
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
        className="bg-primary-900 w-full flex justify-start text-white"
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        {routes.map((item) => {
          return (
            <Link key={item.title} href={`${item.route}`} passHref>
              <BottomNavigationAction
                sx={{
                  "&:hover": {
                    backgroundColor: "#6842A5",
                  },
                  "&:active": {
                    backgroundColor: "#6842A5",
                  },
                }}
                className={`${
                  route === item.route &&
                  "text-white border-b-4 border-b-secondary-500 bg-primary-700"
                } `}
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

{
  /* // <BottomNavigationAction */
}
//   sx={{
//     "&:hover": {
//       backgroundColor: "#6842A5",
//       color: "#fff",
//     },

//     "&:active": {
//       backgroundColor: "#6842A5",
//       color: "#fff",
//       boeder: "2px solid ",
//     },
//   }}
//   className="text-white border-b-4 border-b-secondary-500"
//   label="Listings"
//   icon={<Image src={reviews} alt="projects" />}
// />
// <BottomNavigationAction
//   sx={{
//     "&:hover": {
//       backgroundColor: "#6842A5",
//       color: "#fff",
//     },
//     "&:active": {
//       backgroundColor: "#6842A5",
//       color: "#fff",
//     },
//   }}
//   className="text-white border-b-4 border-b-secondary-500"
//   label="Reviews"
//   icon={<Image src={listnings} alt="projects" />}
// />
