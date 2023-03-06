import { Typography } from "@mui/material";

interface IProps {
  children: React.ReactNode;
}

const ListComponent = ({ children }: IProps) => {
  return (
    <Typography
      className="px-0 lg:px-6 text-[#484848] font-normal -inset-2 lg:-indent-6 list-item list list-disc list-outside lg:list-inside"
      paragraph
      variant="body1"
    >
      {children}
    </Typography>
  );
};

export default ListComponent;
