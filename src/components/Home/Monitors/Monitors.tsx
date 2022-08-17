import { Box, Icon } from "@mui/material";
import Image from "next/image";
import LeftMonitorImg from "./assets/left-monitor.png";
import RightMonitorImg from "./assets/right-monitor.png";
import GreenArrowIcon from "@assets/Icons/green-arrow.svg";
import PurpleArrowIcon from "@assets/Icons/purple-arrow.svg";
import YellowArrowIcon from "@assets/Icons/yellow-arrow.svg";

const Monitors = () => {
  return (
    <section id="preview-monitors" className="mt-12 px-5 sm:px-10">
      <div>
        <Icon
          sx={{ fontSize: "min(15vw, 100px)" }}
          className="block mx-auto mb-10"
          data-aos="zoom-out-down"
        >
          <GreenArrowIcon />
        </Icon>
        <div className="flex items-center justify-center max-w-screen-md mx-auto">
          <Icon
            sx={{ fontSize: "min(10vw, 100px)" }}
            className="self-start md:hidden"
            data-aos="fade-down-right"
          >
            <PurpleArrowIcon />
          </Icon>
          <div className="z-50" data-aos="fade-right">
            <Image src={LeftMonitorImg} alt="Left preview monitor" />
          </div>
          <Box
            sx={{ translate: "-25px" }}
            data-aos="fade-left"
            data-aos-anchor-placement="center-bottom"
          >
            <Image src={RightMonitorImg} alt="Right preview monitor" />
          </Box>
          <Icon
            sx={{ fontSize: "min(8vw, 100px)" }}
            className="self-end md:hidden"
            data-aos="fade-up-left"
          >
            <YellowArrowIcon />
          </Icon>
        </div>
        <div className="hidden md:flex justify-between max-w-screen-2xl ml-auto items-center">
          <Icon sx={{ fontSize: "min(20vw, 130px)" }} data-aos="zoom-in-right">
            <PurpleArrowIcon />
          </Icon>
          <Icon
            sx={{ fontSize: "min(20vw, 130px)" }}
            className="-mr-10"
            data-aos="zoom-in-left"
          >
            <YellowArrowIcon />
          </Icon>
        </div>
      </div>
    </section>
  );
};

export default Monitors;
