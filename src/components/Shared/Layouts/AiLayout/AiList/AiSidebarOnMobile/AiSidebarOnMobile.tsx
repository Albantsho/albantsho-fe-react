import {
  BottomNavigation,
  BottomNavigationAction,
  SvgIcon,
} from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";
import { GiSecretBook } from "react-icons/gi";
import { MdDescription, MdHelp } from "react-icons/md";
import routes from "routes/routes";

const routesArray = [
  {
    route: routes.aiWritingScript.url,
    title: "Write script",
    icon: MdDescription,
  },
  {
    route: routes.aiWritingStory.url,
    title: "Write story",
    icon: GiSecretBook,
  },
  {
    route: routes.aiAssistant.url,
    title: "Assistant",
    icon: MdHelp,
  },
];

const AiSidebarOnMobile = () => {
  const [activeRoute, setActiveRoute] = useState(0);
  const { route, push } = useRouter();

  return (
    <div className="lg:hidden">
      <BottomNavigation
        showLabels
        value={activeRoute}
        className={`bg-primary-900 w-full justify-start min-h-[65px] flex text-white sm:px-8`}
        onChange={(event, newValue) => {
          setActiveRoute(newValue);
        }}
      >
        {routesArray.map((item) => {
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
                borderBottom: `${route === item.route && "4px solid #FDDC6A"}`,
                "&.Mui-selected": {
                  borderBottom: `${
                    route === item.route && "4px solid #FDDC6A"
                  }`,
                },
              }}
              className={`${route === item.route && "bg-primary-700"}`}
              label={item.title}
              icon={<SvgIcon inheritViewBox component={item.icon} />}
            />
          );
        })}
      </BottomNavigation>
    </div>
  );
};

export default AiSidebarOnMobile;
