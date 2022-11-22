import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Chip,
  IconButton,
  Menu,
  MenuItem,
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
import CustomButtonScripts from "./CustomButtonScripts/CustomButtonScripts";
import routes from "routes/routes";

interface IProps {
  title: string;
  storyAbout: string;
  type: string;
}

const buttonsProjects = [
  { title: "ABSTRACT", image: addAbstractIcon, link: routes.abstract },
  { title: "TITLE", image: addTitleIcon, link: routes.titleScript },
  { title: "SCRIPT", image: addScriptIcon, link: routes.scriptsDashboard },
];

const ProjectAccordion = ({ title, storyAbout, type }: IProps) => {
  const [expanded, setExpanded] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const openProjectAccordionMenu = Boolean(anchorEl);
  const handleOpenProjectAccordionMenu = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  };
  const handleCloseProjectAccordionMenu = (
    event: React.MouseEvent<HTMLButtonElement | HTMLLIElement>
  ) => {
    event.stopPropagation();
    setAnchorEl(null);
  };

  return (
    <Accordion
      expanded={expanded}
      onChange={() => setExpanded(!expanded)}
      sx={{ "&:before": { display: "none" } }}
      className="shadow-primary mb-4 md:mb-5 rounded-md"
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
        className="rounded-lg px-4 sm:px-6 py-4"
      >
        <div className="flex flex-col  sm:flex-row flex-1    gap-x-4 gap-y-3 sm:gap-y-0 xl:pr-20">
          <div className="flex justify-center w-[72px] h-[72px] items-center self-start  bg-tinted-100/60 rounded-md">
            <Image loading="lazy" src={accordionIcon} alt={title} />
          </div>
          <div className="sm:max-w-[280px]   flex-1 self-start leading-none">
            <Typography
              variant="h6"
              className="futura leading-normal text-primary-700 font-semibold"
            >
              {title}
            </Typography>
            <Typography variant="caption" className=" text-neutral-600">
              {storyAbout}
            </Typography>
          </div>
          <Chip
            label={type}
            className="hidden rounded-md  md:ml-6 xl:ml-24  self-center py-5 px-5 bg-tinted-100/60 text-neutral-800 md:flex lg:hidden xl:flex"
          />
        </div>
        <div className="flex ml-auto  gap-4 items-center">
          <IconButton onClick={handleOpenProjectAccordionMenu}>
            <IoIosMore className=" text-3xl text-primary-700" />
          </IconButton>
          <Menu
            sx={{ "& .MuiMenu-list": { width: "170px", py: 0 } }}
            anchorEl={anchorEl}
            open={openProjectAccordionMenu}
            onClose={handleCloseProjectAccordionMenu}
            anchorOrigin={{
              vertical: "center",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <MenuItem
              className="hover:text-primary-700 hover:bg-tinted-50/50 py-3 px-10"
              onClick={handleCloseProjectAccordionMenu}
            >
              Archive
            </MenuItem>
            <MenuItem
              className="hover:text-primary-700 hover:bg-tinted-50/50 py-3 px-10"
              onClick={handleCloseProjectAccordionMenu}
            >
              Delete
            </MenuItem>
          </Menu>
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
      <AccordionDetails className="rounded-md pt-3 md:pt-5 bg-primary-dark/95">
        <div className="flex  pt-4 justify-center gap-5 sm:justify-start md:pb-5 md:pt-7 sm:gap-6 md:gap-8 flex-wrap md:px-4 lg:px-6 xl:px-12">
          {buttonsProjects.map((button) => {
            return (
              <CustomButtonScripts
                key={button.title}
                title={button.title}
                image={button.image}
                link={button.link}
              />
            );
          })}
        </div>
      </AccordionDetails>
    </Accordion>
  );
};

export default ProjectAccordion;