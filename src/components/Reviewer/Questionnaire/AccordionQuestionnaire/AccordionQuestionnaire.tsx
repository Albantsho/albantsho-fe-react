import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  SvgIcon,
  Typography,
} from "@mui/material";
import CustomInput from "@shared/CustomInput/CustomInput";
import { BiChevronDown } from "react-icons/bi";

interface IProps {
  title: string;
  description?: string;
}

const AccordionQuestionnaire = ({ title, description }: IProps) => {
  return (
    <Accordion
      sx={{
        "&.MuiPaper-root": { borderRadius: "8px" },
        "&:before": { display: "none" },
      }}
      className="px-6 md:px-9 lg:px-16 shadow-primary rounded-lg"
    >
      <AccordionSummary
        className="py-6 md:py-9 lg:py-12 px-0 rounded-lg flex-col sm:flex-row sm:items-start  gap-y-3"
        sx={{ "& .MuiAccordionSummary-content": { m: 0 } }}
        expandIcon={
          <SvgIcon color="primary" fontSize="large" component={BiChevronDown} />
        }
      >
        <div className="text-center sm:text-start sm:pr-6">
          <Typography
            variant="h4"
            color="primary"
            className="leading-none futura font-medium"
          >
            {title}
          </Typography>
          <Typography
            variant="h6"
            color="primary"
            className="leading-none futura font-normal mt-2"
          >
            {description}
          </Typography>
        </div>
      </AccordionSummary>
      <AccordionDetails className="rounded-lg px-0 pb-6 md:pb-9 lg:pb-12">
        <CustomInput multiline rows={8} fullWidth variant="outlined" />
        <div className="flex py-6 gap-x-5 flex-nowrap justify-center sm:justify-start">
          <Button
            disableElevation
            variant="contained"
            className="rounded-md py-3 px-6"
          >
            Save
          </Button>
          <Button
            variant="outlined"
            sx={{ border: "1px solid #7953B5" }}
            className="bg-white text-primary-700 rounded-md py-3 px-6"
          >
            Cancel
          </Button>
        </div>
      </AccordionDetails>
    </Accordion>
  );
};

export default AccordionQuestionnaire;
