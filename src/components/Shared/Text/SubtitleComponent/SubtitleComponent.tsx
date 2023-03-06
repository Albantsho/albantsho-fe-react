import { Typography } from "@mui/material";

interface IProps {
  subtitle: string;
  children?: React.ReactNode;
}

const SubtitleComponent = ({ children, subtitle }: IProps) => {
  return (
    <>
      <Typography
        variant="body1"
        className="mb-2 lg:mb-4 px-2 lg:px-6 font-semibold"
        color="primary.main"
      >
        {subtitle}
      </Typography>
      {children}
    </>
  );
};

export default SubtitleComponent;
