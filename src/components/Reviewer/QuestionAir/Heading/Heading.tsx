import { Typography } from "@mui/material";
import Logo from "@shared/Logo/Logo";

const Heading = () => {
  return (
    <div className="text-center px-4 sm:px-0">
      <Logo className="mb-4" color="primary" />
      <Typography variant="body1">Entry Type: Type A</Typography>
      <Typography
        variant="body1"
        className="mb-4 sm:mb-8 lg:mb-16"
      >{`Start date: {{dd/mm/yyyy/}}`}</Typography>

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
        The Long Man of Long Beach
      </Typography>
      <Typography
        variant="body1"
        className="text-neutral-800  font-medium leading-normal"
      >
        Feature film | 100 pages
      </Typography>
    </div>
  );
};

export default Heading;
