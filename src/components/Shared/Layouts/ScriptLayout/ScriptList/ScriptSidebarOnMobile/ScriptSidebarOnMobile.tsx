import {
  BottomNavigation,
  BottomNavigationAction,
  SvgIcon,
} from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import useScriptLayout from "../../useScriptLayout";
import Comment from "../assets/comment.svg";
import Document from "../assets/document.svg";
import Export from "../assets/export.svg";
import Scenes from "../assets/scenes.svg";

const routesArray = [
  { route: "?tab=scenes", title: "Scenes", icon: Scenes, value: 1 },
  { route: "?tab=comment", title: "Comment", icon: Comment, value: 2 },
  { route: "?tab=export", title: "Export", icon: Export, value: 3 },
  { route: "?tab=document", title: "Document", icon: Document, value: 4 },
];

const ScriptSidebarOnMobile = () => {
  const { activeRoute, handleActiveRoute } = useScriptLayout();
  const { query } = useRouter();

  return (
    <div className=" lg:hidden">
      <BottomNavigation
        showLabels
        value={activeRoute}
        className="bg-primary-900 w-full min-h-[65px] flex justify-evenly text-white sm:px-8"
        onChange={handleActiveRoute}
      >
        {routesArray.map((item) => {
          return (
            <Link href={`${item.route}`} key={item.title}>
              <BottomNavigationAction
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
                    query.tab === item.route.split("=")[1] &&
                    "4px solid #FDDC6A"
                  }`,
                  "&.Mui-selected": {
                    borderBottom: `${
                      query.tab === item.route.split("=")[1] &&
                      "4px solid #FDDC6A"
                    }`,
                  },
                }}
                className={`${
                  query.tab === item.route.split("=")[1] && " bg-primary-700"
                } sm:max-w-full`}
                label={item.title}
                icon={<SvgIcon component={item.icon} inheritViewBox />}
              />
            </Link>
          );
        })}
      </BottomNavigation>
    </div>
  );
};

export default ScriptSidebarOnMobile;
