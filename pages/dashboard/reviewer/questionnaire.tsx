import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Rating,
  SvgIcon,
  Typography,
} from "@mui/material";
import Btn from "@shared/Btn/Btn";
import CustomInput from "@shared/CustomInput/CustomInput";
import Logo from "@shared/Logo/Logo";
import Head from "next/head";
import { BiChevronDown } from "react-icons/bi";

const Questionnaire = () => {
  return (
    <>
      <Head>
        <title>Albantsho || Questionnaire </title>
      </Head>
      <div className="py-6 md:py-6 lg:py-8 gap-6 bg-[#f6f8fc] px-5 sm:px-10 space-y-6">
        <div className="bg-white shadow-primary rounded-lg py-6 sm:py-10 lg:py-20 text-center max-w-5xl mx-auto px-5">
          <Logo className="mb-4" color="primary" />
          <Typography variant="body1">Entry Type: Type A</Typography>
          <Typography
            variant="body1"
            className="mb-8 lg:mb-16"
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

        <div className="rounded-lg text-center max-w-5xl mx-auto space-y-6">
          <Accordion
            sx={{ "&.MuiPaper-root": { borderRadius: "8px" } }}
            className="px-6 md:px-9 lg:px-16 shadow-primary rounded-lg"
          >
            <AccordionSummary
              className="py-6 md:py-9 lg:py-12 px-0 rounded-lg"
              sx={{ "& .MuiAccordionSummary-content": { m: 0 } }}
              expandIcon={
                <SvgIcon
                  color="primary"
                  fontSize="large"
                  component={BiChevronDown}
                />
              }
            >
              <Typography
                variant="h4"
                color="primary"
                className="leading-none futura font-medium"
              >
                INTRODUCTION
              </Typography>
            </AccordionSummary>
            <AccordionDetails className="rounded-lg px-0 pb-6 md:pb-9 lg:pb-12">
              <CustomInput multiline rows={8} fullWidth variant="outlined" />
              <div className="flex py-6 gap-x-5 flex-nowrap">
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

          <Accordion
            sx={{
              "&.MuiPaper-root": { borderRadius: "8px" },
              "&:before": { display: "none" },
            }}
            className="px-6 md:px-9 lg:px-16 shadow-primary rounded-lg"
          >
            <AccordionSummary
              className="py-6 md:py-9 lg:py-12 px-0 rounded-lg"
              sx={{ "& .MuiAccordionSummary-content": { m: 0 } }}
              expandIcon={
                <SvgIcon
                  color="primary"
                  fontSize="large"
                  component={BiChevronDown}
                />
              }
            >
              <Typography
                variant="h4"
                color="primary"
                className="leading-none futura font-medium"
              >
                RATING
              </Typography>
            </AccordionSummary>
            <AccordionDetails className="rounded-lg px-0 pb-6 md:pb-9 lg:pb-12">
              <div className="flex gap-2 flex-wrap">
                <Rating size="large" defaultValue={2.5} precision={0.5} />
                <Typography
                  variant="h4"
                  className="futura font-medium text-primary-700 leading-normal"
                >
                  - IMPROVE!
                </Typography>
              </div>
              <div className="flex py-6 gap-x-5 flex-nowrap">
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

          <Btn fullWidth className="mt-6 py-4 rounded-lg">
            COMPLETE REVIEW
          </Btn>
        </div>
      </div>
    </>
  );
};

export default Questionnaire;
