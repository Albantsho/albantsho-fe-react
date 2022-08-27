import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Rating,
  Typography,
} from "@mui/material";
import React from "react";
import { BiChevronDown } from "react-icons/bi";

const MainDetailsMarketScript = () => {
  return (
    <div className="px-5 md:px-10 py-10  md:w-1/2 mx-auto">
      <Accordion
        sx={{ "&.MuiAccordion-root": { border: "none" } }}
        className="border-none mb-20 rounded-sm overflow-hidden"
      >
        <AccordionSummary
          className="bg-primary-700"
          expandIcon={<BiChevronDown className="w-8 h-8 text-[#F7F5F8]" />}
          aria-controls="logline-content"
          id="logline-header"
        >
          <Typography
            sx={{
              "&.MuiTypography-root": {
                textAlign: { xs: "center", md: "start" },
                width: { xs: "100%" },
              },
            }}
            variant="button"
            color="white"
            className="font-bold"
          >
            LOGLINE
          </Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={{ "&.MuiAccordionDetails-root": { width: "55%" } }}
        >
          <Typography variant="overline" color="primary.700">
            THE LONGMAN OF LONG BEACH Written by Micheal
          </Typography>
          <br />
          <Typography variant="overline" className="text-[#484848]">
            KRISTEN BELL speaks directly into the CAMERA. KRISTEN BELL You can’t
            begin to describe it. It’s just so... it’s... CUT TO: ADAM SCOTT
            speaks directly into the CAMERA. ADAM SCOTT I mean... CUT TO: KEVIN
            SMITH Like nothing you’ve ever seen. CUT TO: LIZZY CAPLAN Totally,
            impossibly terrible. CUT TO: IKE BARINHOLTZ What the fuuuuuck? CUT
            TO: J.J. ABRAMS To say it’s a “bad” movie is offensive to other bad
            movies. CUT TO: ADAM SCOTT The acting, the script, the green
            screen... CUT TO: KRISTEN BELL The sex scenes are particularly
            upsetting. CUT TO: KEVIN SMITH The thing... anyone can make a bad
            movie. This is something else, something... extraordinary. CUT TO:
            J.J. ABRAMS It’s more than a movie. It’s an experience, a triumph...
            KEVIN SMITH The thing... anyone can make a bad movie. This is
            something else, something... extraordinary. CUT TO: J.J. ABRAMS It’s
            more than a movie. It’s an experience, a triumph...
          </Typography>
        </AccordionDetails>
      </Accordion>
      <div className="py-8 px-28 bg-primary-700 rounded-md flex flex-col justify-center items-center gap-5">
        <Typography color="white" variant="subtitle2" className="text-center">
          How would you rate this script?
        </Typography>
        <div className="bg-primary-500/20 rounded-md p-2">
          <Rating name="text-feedback" value={4}  precision={0.5} />
        </div>
      </div>
    </div>
  );
};

export default MainDetailsMarketScript;
