import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import React from "react";
import { BiChevronDown } from "react-icons/bi";

const MainDetailsMarketScript = () => {
  return (
    <div className="px-5 sm:px-10 py-10  md:w-1/2 mx-auto max-w-screen-md">
      <Accordion
        sx={{ "&.MuiAccordion-root": { border: "none" } }}
        className="border-none mb-20  overflow-hidden"
      >
        <AccordionSummary
          className="bg-primary-700"
          expandIcon={<BiChevronDown className="w-8 h-8 text-[#F7F5F8]" />}
          aria-controls="logline-content"
          id="logline-header"
          sx={{ "&.MuiAccordionSummary-root": { borderRadius: "4px" } }}
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
          <Typography
            sx={{ marginTop: { xs: 3, sm: 4, md: 5, xl: 7 } }}
            variant="body2"
            color="primary.700"
          >
            THE LONGMAN OF LONG BEACH Written by Micheal
          </Typography>
          <br />
          <Typography variant="body1" className="text-gray-600 leading-relaxed">
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
    </div>
  );
};

export default MainDetailsMarketScript;
