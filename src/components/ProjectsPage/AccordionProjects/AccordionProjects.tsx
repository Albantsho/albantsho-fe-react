import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import { IoIosMore } from "react-icons/io";
import { BiChevronDown } from "react-icons/bi";
import accoedionIcon from "./assets/accordion-icon.png";
import addAbstractIcon from "./assets/add-abstract-icon.png";
import addScriptIcon from "./assets/add-script-icon.png";
import addTitleIcon from "./assets/add-title-icon.png";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";

const listAccordions = [
  {
    id: 1,
    title: "The Long man of Long Beach",
    storyAbout: "Story about a man who lived on long beach",
    type: "Tv Pilot",
    accoedionIcon,
    accordionContent: [
      { icon: addAbstractIcon, title: "ABSTRACT" },
      { icon: addScriptIcon, title: "SCRIPT" },
      { icon: addTitleIcon, title: "TITLE" },
    ],
  },
  {
    id: 2,
    title: "The Apple and The Berry",
    storyAbout:
      "Dive into the world of two freinds on opposite ends of the spectrum",
    type: "Feature Film",
    accoedionIcon,
    accordionContent: [
      { icon: addAbstractIcon, title: "ABSTRACT" },
      { icon: addScriptIcon, title: "SCRIPT" },
      { icon: addTitleIcon, title: "TITLE" },
    ],
  },
  {
    id: 3,
    title: "The Walk of fame",
    storyAbout:
      "The glits and the glam don’t mean as much when Claire climbs up the ladder",
    type: "Documentary",
    accoedionIcon,
    accordionContent: [
      { icon: addAbstractIcon, title: "ABSTRACT" },
      { icon: addScriptIcon, title: "SCRIPT" },
      { icon: addTitleIcon, title: "TITLE" },
    ],
  },
  {
    id: 4,
    title: "Honeycumb",
    storyAbout:
      "Young man shakes the hornets and finds something extraoridnary",
    type: "Feature Film",
    accoedionIcon,
    accordionContent: [
      { icon: addAbstractIcon, title: "ABSTRACT" },
      { icon: addScriptIcon, title: "SCRIPT" },
      { icon: addTitleIcon, title: "TITLE" },
    ],
  },
];



const AccordionProjects = () => {
  return (
    <div className="mt-4 md:mt-6">
      {listAccordions.map((accordion) => {
        return (
          <Accordion
            key={accordion.id}
            sx={{ "&:before": { display: "none" } }}
            className="shadow-sm mb-4 md:mb-5 rounded-md"
          >
            <AccordionSummary
              className="rounded-lg px-3 lg:px-6 md:px-2 pt-4 pb-6 py-7"
              expandIcon={
                <BiChevronDown className="text-3xl text-primary-700" />
              }
            >
              <div className="flex flex-col sm:flex-row gap-2">
                <div className="py-1 flex justify-center items-center w-[72px] h-[72px] flex-grow flex-shrink-0 bg-primary-50 rounded-sm mr-3 lg:mr-5 xl:mr-12">
                  <Image
                    layout="fixed"
                    loading="lazy"
                    src={accordion.accoedionIcon}
                    alt={accordion.title}
                  />
                </div>
                <div className="lg:mr-4 lg:max-w-[240px] xl:max-w-[288px]">
                  <Typography
                    variant="h6"
                    className="futura leading-normal text-primary-700 font-semibold"
                  >
                    {accordion.title}
                  </Typography>
                  <Typography variant="caption" className="text-neutral-600">
                    {accordion.storyAbout}
                  </Typography>
                </div>
              </div>
              <span className="hidden py-2 px-4 rounded-md mx-auto bg-slate-100 text-neutral-800 lg:flex my-auto">
                {accordion.type}
              </span>
              <div className="ml-auto my-auto xl:mr-9 lg:mr-7   mr-3">
                <IoIosMore className=" text-3xl mt-1 text-primary-700 " />
              </div>
            </AccordionSummary>
            <AccordionDetails className="bg-primary-900/95 rounded-md">
              <div className="flex p-3 md:px-12 justify-center sm:justify-start md:py-5 gap-2 md:gap-8 flex-wrap">
                {accordion.accordionContent.map((detail) => {
                  return (
                    <div
                      key={detail.title}
                      className="bg-primary-dark w-28 h-32 rounded-sm p-3 md:p-5 flex flex-col gap-2 md:gap-3 justify-center items-center"
                    >
                      <div className="px-5 py-3 bg-purple-500/10 rounded-sm border border-purple-500/10">
                        <Image
                          layout="fixed"
                          src={detail.icon}
                          alt="addAbstractIcon"
                        />
                      </div>
                      <span className="text-white">{detail.title}</span>
                    </div>
                  );
                })}
              </div>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
};

export default AccordionProjects;
