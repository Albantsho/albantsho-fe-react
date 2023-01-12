import parse from "html-react-parser";
import { Typography } from "@mui/material";

interface IProps {
  title: string;
  review: string;
}

const ReviewInformation = ({ title, review }: IProps) => {
  return (
    <div className="flex flex-col mt-10 gap-5">
      <Typography
        variant="h4"
        className="futura text-primary-700 font-medium leading-6"
      >
        {title}
      </Typography>

      {parse(review)}
    </div>
  );
};

export default ReviewInformation;
