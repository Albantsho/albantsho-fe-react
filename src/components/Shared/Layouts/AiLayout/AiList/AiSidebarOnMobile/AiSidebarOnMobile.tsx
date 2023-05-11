import {
  BottomNavigation,
  BottomNavigationAction,
  SvgIcon,
} from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { SiOpenai } from "react-icons/si";
import routes from "routes/routes";
const routesArray = [
  {
    route: routes.aiEditor.url,
    title: "Ai Editor",
    icon: SiOpenai,
  },
  {
    route: routes.aiAssistant.url,
    title: "Assistant",
    icon: AiOutlineInfoCircle,
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