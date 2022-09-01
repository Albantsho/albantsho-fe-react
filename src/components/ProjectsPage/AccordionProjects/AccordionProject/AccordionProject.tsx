import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Chip,
  IconButton,
  SvgIcon,
  Typography,
} from "@mui/material";
import { IoIosMore } from "react-icons/io";
import { BiChevronDown } from "react-icons/bi";
import accordionIcon from "./assets/accordion-icon.png";
import addAbstractIcon from "./assets/add-abstract-icon.png";
import addScriptIcon from "./assets/add-script-icon.png";
import addTitleIcon from "./assets/add-title-icon.png";
import Image from "next/image";
import { useState } from "react";

interface IProps {
  title: string;
  storyAbout: string;
  type: string;
}

const AccordionProject = ({ title, storyAbout, type }: IProps) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Accordion
      expanded={expanded}
      onChange={() => setExpanded(!expanded)}
      sx={{ "&:before": { display: "none" } }}
      className="shadow-sm mb-4 md:mb-5 rounded-md"
    >
      <AccordionSummary
        sx={{
          "&.MuiAccordionSummary-root": {
            backgroundColor: "#fff",
            marginBottom: "-8px",
          },
          "& .MuiAccordionSummary-content": {
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "flex-start",
            gap: { xs: 1, sm: 2 },
          },
        }}
        className="rounded-lg px-3  lg:px-6  pt-4"
      >
        <div className="flex flex-col sm:flex-row flex-1  md:items-center  gap-x-4 gap-y-3 sm:gap-y-0 md:gap-5">
          <div className="flex justify-center w-[72px] h-[72px] items-center  bg-tinted-50/80 rounded-sm">
            <Image loading="lazy" src={accordionIcon} alt={title} />
          </div>
          <div className="sm:max-w-[280px] md:max-w-[300px] lg::max-w-[340px]  flex-1">
            <Typography
              variant="h6"
              className="futura mb-1 leading-normal text-primary-700 font-semibold"
            >
              {title}
            </Typography>
            <Typography variant="caption" className=" text-neutral-600">
              {storyAbout}
            </Typography>
          </div>
          <Chip
            label={type}
            className="hidden rounded-md mx-auto 2xl:ml-0 lg:mr-auto  py-5 px-5 bg-tinted-50/80 text-neutral-800 md:flex"
          />
        </div>
       <div className="flex ml-auto  gap-4 items-center">
          <IconButton>
            <IoIosMore className=" text-3xl text-primary-700" />
          </IconButton>
          <SvgIcon
            sx={{
              transition: "all 0.3s linear",
              rotate: expanded ? "180deg" : "0deg",
            }}
            className="text-3xl text-primary-700"
            component={BiChevronDown}
          />
        </div>
      </AccordionSummary>
      <AccordionDetails className=" rounded-md pt-3 md:pt-5 bg-primary-dark/95">
        <div className="flex p-3 pt-5 md:px-12 justify-center sm:justify-start md:pb-5 md:pt-7 gap-2 md:gap-8 flex-wrap">
          <div className="bg-primary-dark w-28 h-32 rounded-md lg:rounded-lg p-3 md:p-5 flex flex-col gap-2 md:gap-3 justify-center items-center ">
            <div className="px-5 py-3 bg-purple-500/10 rounded-sm border border-purple-500/10">
              <Image layout="fixed" src={addAbstractIcon} alt="add-Abstract" />
            </div>
            <span className="text-white">ABSTRACT</span>
          </div>

          <div className="bg-primary-dark w-28 h-32 rounded-md lg:rounded-lg p-3 md:p-5 flex flex-col gap-2 md:gap-3 justify-center items-center ">
            <div className="px-5 py-3 bg-purple-500/10 rounded-sm border border-purple-500/10">
              <Image layout="fixed" src={addTitleIcon} alt="add-title" />
            </div>
            <span className="text-white">TITLE</span>
          </div>

          <div className="bg-primary-dark w-28 h-32 rounded-md lg:rounded-lg p-3 md:p-5 flex flex-col gap-2 md:gap-3 justify-center items-center ">
            <div className="px-5 py-3 bg-purple-500/10 rounded-sm border border-purple-500/10">
              <Image layout="fixed" src={addScriptIcon} alt="add-SCRIPT" />
            </div>
            <span className="text-white">SCRIPT</span>
          </div>
        </div>
      </AccordionDetails>
    </Accordion>
  );
};

export default AccordionProject;
