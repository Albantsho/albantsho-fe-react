import { Typography } from "@mui/material";

interface IProps {
  title: string;
}

const Title = ({ title }: IProps) => {
  return (
    <div className="bg-white w-full mx-auto py-6">
      <Typography
        variant="h6"
        component="p"
        className="text-center text-black courier"
      >
        {title}
      </Typography>
    </div>
  );
};

export default Title;
