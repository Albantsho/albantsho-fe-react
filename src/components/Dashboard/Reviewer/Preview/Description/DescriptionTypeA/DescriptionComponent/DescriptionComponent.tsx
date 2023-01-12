import { Typography } from "@mui/material";
import parse from "html-react-parser";

interface IProps {
  desc:
    | {
        title: string;
        value: string;
        description?: undefined;
      }
    | {
        title: string;
        description: string;
        value: string;
      };
}

const DescriptionComponent = ({
  desc: { title, value, description },
}: IProps) => {
  return (
    <>
      <Typography
        variant="h4"
        className="futura text-primary-700 font-medium leading-6 mb-5 mt-10"
      >
        {title}
      </Typography>
      {description && (
        <Typography
          variant="h4"
          className="futura text-primary-700 font-light mb-5 leading-7"
        >
          {description}
        </Typography>
      )}
      {value && parse(value)}
    </>
  );
};

export default DescriptionComponent;
