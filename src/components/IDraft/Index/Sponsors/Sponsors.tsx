import { Typography } from "@mui/material";

import oneBrand from "./assets/one-brand.png";
import twoBrand from "./assets/two-brand.png";
import threeBrand from "./assets/three-brand.png";
import fourBrand from "./assets/four-brand.png";
import fiveBrand from "./assets/five-brand.png";
import sixBrand from "./assets/six-brand.png";
import sevenBrand from "./assets/seven-brand.png";
import eightBrand from "./assets/eight-brand.png";
import nineBrand from "./assets/nine-brand.png";
import Image from "next/image";

const brands = [
  oneBrand,
  twoBrand,
  threeBrand,
  fourBrand,
  fiveBrand,
  sixBrand,
  sevenBrand,
  eightBrand,
  nineBrand,
];

const Sponsors = () => {
  return (
    <div className=" mx-auto  justify-center px-5 sm:px-10 -mt-12 md:-mt-8 lg:-mt-4 xl:mt-0   pb-16">
      <div
        data-aos="flip-left"
        data-aos-duration="1000"
        className="mx-auto  rounded-2xl bg-[#F9F5FF] max-w-[950px]"
      >
        <Typography
          variant="h6"
          color="grey.900"
          mt={20}
          className="font-semibold text-center pt-11  lg:pt-16"
        >
          SPONSORED BY
        </Typography>

        <div className="mt-8 lg:mt-16 px-10 md:px-32 lg:px-44 w-full  flex flex-wrap gap-8 justify-center items-center pb-12 lg:pb-24">
          {brands.map((brand, index) => {
            return (
              <div key={index}>
                <Image src={brand} alt="brands" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
