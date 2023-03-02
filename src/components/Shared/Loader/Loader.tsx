import LoaderLogo from "./assets/LoaderIcon.svg";
import { SvgIcon } from "@mui/material";

const Loader = () => {
  return (
    <div className="min-h-screen flex items-center justify-center text-primary-700">
      <SvgIcon
        color="primary"
        className="text-primary-700 rotate-loader"
        sx={{ width: 120, height: 120 }}
        component={LoaderLogo}
        inheritViewBox
      />
    </div>
  );
};

export default Loader;
