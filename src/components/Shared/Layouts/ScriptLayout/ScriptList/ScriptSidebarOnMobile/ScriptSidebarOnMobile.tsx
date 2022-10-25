import {
  BottomNavigation,
  BottomNavigationAction,
  SvgIcon,
} from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";
import routes from "routes/routes";
import Comment from "../assets/comment.svg";
import Document from "../assets/document.svg";
import Export from "../assets/export.svg";
import Scenes from "../assets/scenes.svg";

const routesArray = [
  { route: routes.scenesScript, title: "Scenes", icon: Scenes },
  { route: routes.commentScript, title: "Comment", icon: Comment },
  { route: routes.exportScript, title: "Export", icon: Export },
  { route: routes.documentScript, title: "Document", icon: Document },
];

const ScriptSidebarOnMobile = () => {
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
              className={`${
                route === item.route && " bg-primary-700"
              } sm:max-w-full`}
              label={item.title}
              icon={<SvgIcon component={item.icon} inheritViewBox />}
            />
          );
        })}
      </BottomNavigation>
    </div>
  );
};

export default ScriptSidebarOnMobile;
