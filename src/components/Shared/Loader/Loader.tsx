import LoaderLogo from "./assets/LoaderIcon.svg";
import { SvgIcon } from "@mui/material";
import { DotLoader } from "react-spinners";

interface IProps {
  setCustomHeight?: string;
}

const Loader = ({ setCustomHeight }: IProps) => {
  return (
    <div
      className={`flex bg-[#181025] items-center justify-center text-primary-700 ${
        setCustomHeight ? setCustomHeight : "min-h-screen"
      }`}
    >
      {/* <SvgIcon
        color="primary"
        className="text-primary-700 rotate-loader"
        sx={{ width: 120, height: 120 }}
        component={LoaderLogo}
        inheritViewBox
      /> */}
      <DotLoader color="#7953B5" />
    </div>
  );
};

export default Loader;
