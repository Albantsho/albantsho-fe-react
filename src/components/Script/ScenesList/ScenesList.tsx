import { Divider, SvgIcon, Typography } from "@mui/material";
import PhotoIcon from "./assets/photo.svg";

const ScenesList = () => {
  return (
    <>
      {Array.from(new Array(6)).map((_, i) => (
        <>
          <div key={i}>
            <div className="flex gap-4">
              <SvgIcon component={PhotoIcon} inheritViewBox />
              <Typography className="font-bold futura">
                INT. WATER FRONT
              </Typography>
            </div>
            <Typography variant="body2" className="text-gray-400 mt-3">
              It amet, consectetur adipiscing elit. Volutpat vitae orci proin
              semper commodo a habitasse mollis. Magna pellentesque dignissim
              aliquam duis id tincidunt metus
            </Typography>
          </div>
          <Divider className="my-4" />
        </>
      ))}
    </>
  );
};

export default ScenesList;
