import { Typography } from "@mui/material";

interface IProps {
  subtitle: string;
  children?: React.ReactNode;
  isGreyText?: boolean;
}

const SubtitleComponent = ({ children, subtitle, isGreyText }: IProps) => {
  return (
    <>
      <Typography
        variant="body1"
        className={`${
          isGreyText ? "" : "font-semibold"
        } mb-2 lg:mb-4 px-2 lg:px-6`}
        color={isGreyText ? "gray.800" : "primary.main"}
      >
        {subtitle}
      </Typography>
      {children}
    </>
  );
};

export default SubtitleComponent;
