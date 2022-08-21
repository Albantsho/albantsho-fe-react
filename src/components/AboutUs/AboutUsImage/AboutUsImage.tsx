import GreenArrow from "@assets/icons/green-arrow.svg";
import StarIcon from "@assets/icons/star.svg";
import YellowArrow from "@assets/icons/yellow-arrow.svg";
import { SvgIcon } from "@mui/material";
import Image from "next/image";
import AboutUsImgSm from "./assets/about-us-img-sm.png";
import AboutUsImg from "./assets/about-us-img.png";

const AboutUsImage = () => {
  return (
    <section id="about-us-img" className="mt-12">
      <div className="flex justify-center">
        <div className="relative">
          <SvgIcon
            inheritViewBox
            component={StarIcon}
            className="absolute bottom-6 -left-16 sm:-bottom-8 sm:-left-24 text-transparent"
            sx={{ width: { xs: 53, sm: 115 }, height: { xs: 53, sm: 115 } }}
          />
          <SvgIcon
            inheritViewBox
            className="absolute top-0 -left-9 sm:top-10 sm:-left-28"
            component={GreenArrow}
            sx={{
              width: { xs: 35, sm: 66 },
              height: { xs: 35, sm: 69 },
              rotate: "250deg",
            }}
          />
          <div className="bg-secondary-300/20 rounded-full inline-flex sm:hidden overflow-hidden items-end">
            <Image src={AboutUsImgSm} alt="about-us-image" />
          </div>
          <div className="bg-secondary-300/20 rounded-full hidden sm:inline-flex overflow-hidden items-end">
            <Image src={AboutUsImg} alt="about-us-image" />
          </div>
          <SvgIcon
            inheritViewBox
            component={YellowArrow}
            className="absolute top-1/2 -right-14 sm:-right-36"
            color="primary"
            sx={{
              width: { xs: 37, sm: 99 },
              height: { xs: 25, sm: 67 },
              translate: { sm: "0 -50%" },
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUsImage;
