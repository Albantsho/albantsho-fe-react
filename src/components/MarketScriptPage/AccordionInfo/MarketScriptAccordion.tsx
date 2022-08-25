import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { BiChevronDown } from "react-icons/bi";
import { Chip, ListItem } from "@mui/material";

export default function MarketScriptAccordion() {
  return (
    <div className="md:w-1/2">
      <Accordion elevation={0} sx={{ "&:before": { display: "none" } }}>
        <AccordionSummary
          className="bg-[#F7F5F8]"
          expandIcon={<BiChevronDown className="w-8 h-8 text-primary-700" />}
          aria-controls="logline-content"
          id="logline-header"
        >
          <Typography
            variant="button"
            color="primary.700"
            className="font-bold"
          >
            LOGLINE
          </Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={{ "&.MuiAccordionDetails-root": { paddingX: 0 } }}
        >
          <Typography variant="body2" className="text-[#484848]">
            Lorem ipsum dolor sit amet, consectetur adipisci ngeelit. Malesu
            fermentum ipsum tincidunt seda arcu. Hac arcu ac amet mi. Enim id
            viverra nislsdf.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion elevation={0} sx={{ "&:before": { display: "none" } }}>
        <AccordionSummary
          className="bg-[#F7F5F8]"
          expandIcon={<BiChevronDown className="w-8 h-8 text-primary-700" />}
          aria-controls="synopsis-content"
          id="synopsis-header"
        >
          <Typography
            variant="button"
            color="primary.700"
            className="font-bold"
          >
            SYNOPSIS
          </Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={{ "&.MuiAccordionDetails-root": { paddingX: 0 } }}
        >
          <Typography variant="body2" className="text-[#484848]">
            Lorem ipsum dolor sit amet, consectetur adipisci ngeelit. Malesu
            fermentum ipsum tincidunt seda arcu. Hac arcu ac amet mi. Enim id
            viverra nislsdf.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion elevation={0} sx={{ "&:before": { display: "none" } }}>
        <AccordionSummary
          className="bg-[#F7F5F8]"
          expandIcon={<BiChevronDown className="w-8 h-8 text-primary-700" />}
          aria-controls="story-content"
          id="story-header"
        >
          <Typography
            variant="button"
            color="primary.700"
            className="font-bold"
          >
            STORY WORLD
          </Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={{ "&.MuiAccordionDetails-root": { paddingX: 0 } }}
        >
          <Typography variant="body2" className="text-[#484848]">
            Lorem ipsum dolor sit amet, consectetur adipisci ngeelit. Malesu
            fermentum ipsum tincidunt seda arcu. Hac arcu ac amet mi. Enim id
            viverra nislsdf.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion elevation={0} sx={{ "&:before": { display: "none" } }}>
        <AccordionSummary
          className="bg-[#F7F5F8]"
          expandIcon={<BiChevronDown className="w-8 h-8 text-primary-700" />}
          aria-controls="nav-personal-content"
          id="nav-personal-header"
        >
          <Typography
            variant="button"
            color="primary.700"
            className="font-bold"
          >
            MOTIVATION & PERSONAL NOTE
          </Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={{ "&.MuiAccordionDetails-root": { paddingX: 0 } }}
        >
          <Typography variant="body2" className="text-[#484848]">
            Lorem ipsum dolor sit amet, consectetur adipisci ngeelit. Malesu
            fermentum ipsum tincidunt seda arcu. Hac arcu ac amet mi. Enim id
            viverra nislsdf.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion elevation={0} sx={{ "&:before": { display: "none" } }}>
        <AccordionSummary
          className="bg-[#F7F5F8]"
          expandIcon={<BiChevronDown className="w-8 h-8 text-primary-700" />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography
            variant="button"
            color="primary.700"
            className="font-bold"
          >
            THEME
          </Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={{ "&.MuiAccordionDetails-root": { paddingX: 0 } }}
        >
          <ListItem className="flex gap-3" alignItems="center">
            <Chip
              className="text-primary-700"
              size="medium"
              label="High Concept"
            />
            <Chip
              className="text-primary-700"
              size="medium"
              label="High Concept"
            />
            <Chip
              className="text-primary-700"
              size="medium"
              label="High Concept"
            />
          </ListItem>
        </AccordionDetails>
      </Accordion>
      <Accordion elevation={0} sx={{ "&:before": { display: "none" } }}>
        <AccordionSummary
          className="bg-[#F7F5F8]"
          expandIcon={<BiChevronDown className="w-8 h-8 text-primary-700" />}
          aria-controls="panel3a-content"
          id="act-header"
        >
          <Typography
            variant="button"
            color="primary.700"
            className="font-bold"
          >
            ACT STRUCTURE
          </Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={{ "&.MuiAccordionDetails-root": { paddingX: 0 } }}
        >
          <Typography variant="body2" className="text-[#484848]">
            Lorem ipsum dolor sit amet, consectetur adipisci ngeelit. Malesu
            fermentum ipsum tincidunt seda arcu. Hac arcu ac amet mi. Enim id
            viverra nislsdf.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion elevation={0} sx={{ "&:before": { display: "none" } }}>
        <AccordionSummary
          className="bg-[#F7F5F8]"
          expandIcon={<BiChevronDown className="w-8 h-8 text-primary-700" />}
          aria-controls="insperation-content"
          id="insperation-header"
        >
          <Typography
            variant="button"
            color="primary.700"
            className="font-bold"
          >
            INSPIRATION
          </Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={{ "&.MuiAccordionDetails-root": { paddingX: 0 } }}
        >
          <Typography variant="body2" className="text-[#484848]">
            Lorem ipsum dolor sit amet, consectetur adipisci ngeelit. Malesu
            fermentum ipsum tincidunt seda arcu. Hac arcu ac amet mi. Enim id
            viverra nislsdf.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
