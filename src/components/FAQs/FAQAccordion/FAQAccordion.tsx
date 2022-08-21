import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Paper,
  Typography
} from "@mui/material";
import { MdExpandLess } from "react-icons/md";

interface IProps {
  question: string;
  children: React.ReactNode;
}

const FAQAccordion = ({ children, question }: IProps) => {
  return (
    <Accordion
      elevation={0}
      sx={{ bgcolor: "transparent", "&::before": { display: "none" } }}
    >
      <AccordionSummary
        expandIcon={<MdExpandLess className="text-2xl" />}
        component={Paper}
        className="text-primary-main rounded"
        sx={{ boxShadow: "0px 3px 7px rgba(110, 88, 146, 0.15)" }}
      >
        <Typography variant="h6" component="p" className="futura font-medium">
          {question}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>{children}</AccordionDetails>
    </Accordion>
  );
};

export default FAQAccordion;
