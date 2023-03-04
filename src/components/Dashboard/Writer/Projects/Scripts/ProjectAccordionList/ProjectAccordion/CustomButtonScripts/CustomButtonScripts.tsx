import { Button, SvgIcon } from "@mui/material";

interface IProps {
  title: string;
  functionality: () => void;
  Icon: any;
}

const CustomButtonScripts = ({
  title,
  Icon,
  functionality,
  ...props
}: IProps) => {
  return (
    <Button
      {...props}
      onClick={functionality}
      sx={{ ":hover": { backgroundColor: "#48297B" } }}
      className="bg-primary-dark w-28 h-32 rounded-md lg:rounded-lg p-3 md:p-5 flex flex-col gap-2 md:gap-3 justify-center items-center text-white text-base"
    >
      <div className="px-5 py-3 bg-purple-500/10 rounded-sm border border-purple-500/10">
        <SvgIcon component={Icon} />
      </div>
      {title}
    </Button>
  );
};

export default CustomButtonScripts;
