import { Typography } from "@mui/material";

interface IProps {
  children: React.ReactNode;
}

const TitleComponent = ({ children }: IProps) => {
  return (
    <Typography
      variant="h4"
      className="mb-2 lg:mb-6 leading-none"
      color="primary.main"
    >
      {children}
    </Typography>
  );
};

export default TitleComponent;
