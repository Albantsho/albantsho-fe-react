import GreenArrowIcon from "@assets/icons/green-arrow.svg";
import PurpleArrowIcon from "@assets/icons/purple-arrow.svg";
import YellowArrowIcon from "@assets/icons/yellow-arrow.svg";
import { SvgIcon } from "@mui/material";
import Image from "next/image";
import PlatformImg from "./assets/platform.png";

const Monitors = () => {
  return (
    <section
      id="preview-monitors"
      className="mt-12 px-5 sm:px-10 overflow-hidden"
    >
      <div>
        <span data-aos="zoom-out-down" className="flex justify-center mb-10">
          <SvgIcon
            inheritViewBox
            component={GreenArrowIcon}
            sx={{ fontSize: "min(15vw, 100px)" }}
          />
        </span>
        <div className="flex items-center justify-center max-w-screen-lg mx-auto">
          <span data-aos="fade-down-right" className="self-start md:hidden">
            <SvgIcon
              component={PurpleArrowIcon}
              inheritViewBox
              sx={{ fontSize: "min(10vw, 100px)" }}
            />
          </span>
          <div className="z-50" data-aos="fade-up">
            <Image src={PlatformImg} alt="Platform preview" />
          </div>
          {/* <div className="z-50" data-aos="fade-right">
            <Image src={LeftMonitorImg} alt="Left preview monitor" />
          </div> */}
          {/* <Box
            sx={{ translate: "-5%" }}
            data-aos="fade-left"
            data-aos-anchor-placement="center-bottom"
          >
            <Image src={RightMonitorImg} alt="Right preview monitor" />
          </Box> */}
          <span className="self-end md:hidden" data-aos="fade-up-left">
            <SvgIcon
              inheritViewBox
              component={YellowArrowIcon}
              sx={{ fontSize: "min(8vw, 100px)" }}
              color="secondary"
            />
          </span>
        </div>
        <div className="hidden md:flex justify-between max-w-screen-xl mx-auto items-center">
          <span data-aos="zoom-in-right">
            <SvgIcon
              inheritViewBox
              component={PurpleArrowIcon}
              sx={{ fontSize: "min(20vw, 130px)" }}
            />
          </span>
          <span data-aos="zoom-in-left">
            <SvgIcon
              inheritViewBox
              component={YellowArrowIcon}
              sx={{ fontSize: "min(20vw, 130px)" }}
              color="secondary"
            />
          </span>
        </div>
      </div>
    </section>
  );
};

export default Monitors;
