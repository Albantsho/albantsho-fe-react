import { Button, SvgIcon } from "@mui/material";
import { IWriterScript } from "interfaces/script";

interface IProps {
  title: string;
  functionality: () => void;
  Icon: any;
  script: IWriterScript;
}

const CustomButtonScripts = ({
  title,
  Icon,
  functionality,
  script,
  ...props
}: IProps) => {
  return (
    <Button
      {...props}
      disabled={title === "PREVIEW" && !script.scriptFormat}
      onClick={functionality}
      sx={{ ":hover": { backgroundColor: "#48297B" } }}
      className={`${
        title === "PREVIEW" && !script.scriptFormat
          ? "opacity-40 !cursor-not-allowed !text-white"
          : "cursor-pointer opacity-100"
      } bg-primary-dark w-28 h-32 rounded-md lg:rounded-lg p-3 md:p-5 flex flex-col gap-2 md:gap-3 justify-center items-center text-white text-base`}
    >
      <div className="px-5 py-3 bg-purple-500/10 rounded-sm border border-purple-500/10">
        <SvgIcon component={Icon} inheritViewBox />
      </div>
      {title}
    </Button>
  );
};

export default CustomButtonScripts;
