import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Rating,
  SvgIcon,
  Typography,
} from "@mui/material";
import Btn from "@shared/Btn/Btn";
import { BiChevronDown } from "react-icons/bi";
import { useState } from "react";

const Ratings = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div>
      <Accordion
        expanded={expanded}
        onChange={() => setExpanded(!expanded)}
        sx={{
          "&:before": { display: "none" },
        }}
        className="shadow-sm mb-4 md:mb-5 rounded-md w-full"
      >
        <AccordionSummary
          sx={{
            "& .MuiAccordionSummary-content": {
              py: { xs: 1, sm: 2 },
              px: { xs: 0, sm: 2 },
            },
          }}
        >
          <div className="flex gap-3">
            <div className="sm:pr-36">
              <Typography
                variant="h6"
                className="futura font-medium text-primary-700 mb-2 sm:mb-4"
              >
                RATING
              </Typography>
              <div className="flex gap-2 flex-wrap">
                <Rating size="large" defaultValue={2.5} precision={0.5} />
                <Typography
                  variant="h6"
                  className="futura font-medium text-primary-700"
                >
                  - IMPROVE!
                </Typography>
              </div>

              <div className="flex gap-3 mt-6">
                <Btn>Save</Btn>
                <Btn>Cancel</Btn>
              </div>
            </div>
            <SvgIcon
              sx={{
                transition: "all 0.3s linear",
                rotate: expanded ? "180deg" : "0deg",
              }}
              className="text-2xl text-primary-700"
              component={BiChevronDown}
            />
          </div>
        </AccordionSummary>
        <AccordionDetails></AccordionDetails>
      </Accordion>
    </div>
  );
};

export default Ratings;
