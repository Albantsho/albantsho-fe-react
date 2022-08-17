import Image from "next/image";
import AboutUsImg from "./assets/about-us-img.png";
import AboutUsImgSm from "./assets/about-us-img-sm.png";
import GreenArrow from "@assets/icons/green-arrow.svg";
import YellowArrow from "@assets/icons/yellow-arrow.svg";
import StarIcon from "@assets/icons/star.svg";
import { Icon } from "@mui/material";

const AboutUsImage = () => {
  return (
    <section id="about-us-img" className="mt-12">
      <div className="flex justify-center">
        <div className="relative">
          <Icon
            className="absolute bottom-6 -left-16 sm:-bottom-8 sm:-left-24"
            sx={{ width: { xs: 53, sm: 115 }, height: { xs: 53, sm: 115 } }}
          >
            <StarIcon />
          </Icon>
          <Icon
            className="absolute top-0 -left-9 sm:top-10 sm:-left-28"
            sx={{
              width: { xs: 35, sm: 66 },
              height: { xs: 35, sm: 69 },
              rotate: "250deg",
            }}
          >
            <GreenArrow />
          </Icon>
          <div className="bg-secondary-300/20 rounded-full inline-flex sm:hidden overflow-hidden items-end">
            <Image src={AboutUsImgSm} alt="about-us-image" />
          </div>
          <div className="bg-secondary-300/20 rounded-full hidden sm:inline-flex overflow-hidden items-end">
            <Image src={AboutUsImg} alt="about-us-image" />
          </div>
          <Icon
            className="absolute top-1/2 -right-14 sm:-right-36"
            sx={{
              "svg > path": { fill: "#7953B5" },
              width: { xs: 37, sm: 99 },
              height: { xs: 25, sm: 67 },
              translate: { sm: "0 -50%" },
            }}
          >
            <YellowArrow />
          </Icon>
        </div>
      </div>
    </section>
  );
};

export default AboutUsImage;
