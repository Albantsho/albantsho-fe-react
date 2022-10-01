import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  SvgIcon,
  Typography,
} from "@mui/material";
import CustomRating from "@shared/CustomRating/CustomRating";
import { useState } from "react";
import { BiChevronDown } from "react-icons/bi";

const labels: { [index: string]: string } = {
  1: "- IMPROVE!",
  2: "- FAIR!",
  3: "- GOOD!!",
  4: "- GREAT!",
  5: "- UNICORN!",
};

function getLabelText(value: number) {
  return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
}

const QuestionnaireRating = () => {
  const [countRate, setCountRate] = useState<number | null>(2);
  const [hoverRate, setHoverRate] = useState(-1);

  return (
    <Accordion
      sx={{
        "&.MuiPaper-root": { borderRadius: "8px" },
        "&:before": { display: "none" },
      }}
      className="px-6 md:px-9 lg:px-16 shadow-primary rounded-lg"
    >
      <AccordionSummary
        className="py-6 md:py-9 lg:py-12 px-0 rounded-lg flex-col sm:flex-row gap-y-3"
        sx={{ "& .MuiAccordionSummary-content": { m: 0 } }}
        expandIcon={
          <SvgIcon color="primary" fontSize="large" component={BiChevronDown} />
        }
      >
        <Typography
          variant="h4"
          color="primary"
          className="leading-none futura font-medium"
        >
          Rating
        </Typography>
      </AccordionSummary>
      <AccordionDetails className="rounded-lg px-0 pb-6 md:pb-9 lg:pb-12">
        <div className="flex gap-2 flex-wrap justify-center sm:justify-start items-center">
          <CustomRating
            sx={{
              "& .MuiSvgIcon-root": {
                width: { sm: "40px" },
                height: { sm: "40px" },
              },
              "&.MuiRating-root": {
                gap: { sm: "8px" },
              },
            }}
            getLabelText={getLabelText}
            size="large"
            defaultValue={3}
            precision={1}
            onChange={(event, newValue) => {
              setCountRate(newValue);
            }}
            onChangeActive={(event, newHover) => {
              setHoverRate(newHover);
            }}
          />
          {countRate !== null && (
            <Typography
              variant="h4"
              className="futura font-medium text-primary-700 leading-normal"
            >
              {labels[hoverRate !== -1 ? hoverRate : countRate]}
            </Typography>
          )}
        </div>
        <div className="flex py-6 gap-x-5  justify-center sm:justify-start">
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

export default QuestionnaireRating;
