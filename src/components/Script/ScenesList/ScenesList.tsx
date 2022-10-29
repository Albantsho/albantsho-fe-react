import { SvgIcon, Typography } from "@mui/material";
import PhotoIcon from "./assets/photo.svg";

const ScenesList = () => {
  return (
    <>
      {Array.from(new Array(6)).map((_, i) => (
        <div key={i} className="border-b">
          <div className="flex gap-4">
            <SvgIcon component={PhotoIcon} inheritViewBox />
            <Typography className="font-bold futura">
              INT. WATER FRONT
            </Typography>
          </div>
          <Typography variant="body2" className="text-gray-400 mt-3 mb-4">
            It amet, consectetur adipiscing elit. Volutpat vitae orci proin
            semper commodo a habitasse mollis. Magna pellentesque dignissim
            aliquam duis id tincidunt metus
          </Typography>
        </div>
      ))}
    </>
  );
};

export default ScenesList;
