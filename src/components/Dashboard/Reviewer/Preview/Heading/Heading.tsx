import { Typography } from "@mui/material";
import Logo from "@shared/Logo/Logo";
import { IScriptReviewer } from "interfaces/script";

interface IProps {
  script: IScriptReviewer;
}

const Heading = ({ script }: IProps) => {
  return (
    <div className="text-center">
      <Logo className="mb-4" color="primary" />
      <Typography variant="body1">
        Entry Type: Type {script.reviewPlan}
      </Typography>
      <Typography variant="body1" className="mb-16">{`Start date: {{${new Date(
        script.createdAt
      ).toLocaleDateString()}}}`}</Typography>

      <Typography
        variant="h4"
        className="text-neutral-800 futura font-medium leading-normal"
      >
        SAMPLE SCRIPT
      </Typography>

      <Typography
        variant="h6"
        className="text-primary-700 futura font-medium leading-normal"
      >
        {script.title}
      </Typography>
      <Typography
        variant="body1"
        className="text-neutral-800  font-medium leading-normal"
      >
        {script.scriptFormat}|{" "}
        {script.totalPages && `${script.totalPages} Page`}
      </Typography>
    </div>
  );
};

export default Heading;
