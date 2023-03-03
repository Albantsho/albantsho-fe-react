import LoaderLogo from "./assets/LoaderIcon.svg";
import { SvgIcon } from "@mui/material";

interface IProps {
  setCustomHeight?: string;
}

const Loader = ({ setCustomHeight }: IProps) => {
  return (
    <div
      className={`flex items-center justify-center text-primary-700 ${
        setCustomHeight ? setCustomHeight : "min-h-screen"
      }`}
    >
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
