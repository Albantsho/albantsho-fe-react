import {
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
} from "@mui/material";
import { BiChevronDown } from "react-icons/bi";

interface IProps {
  title: string;
  children: JSX.Element;
}

const AccordionCustom = ({ children, title }: IProps) => {
  return (
    <Accordion
      className="space-y-2 md:space-y-4 overflow-hidden"
      elevation={0}
      sx={{ "&:before": { display: "none" } }}
    >
      <AccordionSummary
        className="bg-tinted-50/60"
        expandIcon={<BiChevronDown className="w-8 h-8 text-primary-700" />}
        sx={{ "&.MuiAccordionSummary-root": { borderRadius: "4px" } }}
      >
        <Typography variant="button" color="primary.700" className="font-bold">
          {title}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>{children}</AccordionDetails>
    </Accordion>
  );
};

export default AccordionCustom;
