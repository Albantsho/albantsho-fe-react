import { Typography } from "@mui/material";

interface IProps {
  children: React.ReactNode;
}

const DescriptionComponent = ({ children }: IProps) => {
  return (
    <Typography
      className="px-2 lg:px-6 text-[#484848] font-normal -indent-2 lg:-indent-6"
      paragraph
      variant="body1"
    >
      {children}
    </Typography>
  );
};

export default DescriptionComponent;
