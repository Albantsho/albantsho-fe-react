import { Box, Typography } from "@mui/material";

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

const TermsIDraft = () => {
  return (
    <div className=" mx-auto  justify-center   gap-8 pt-12 pb-16">
      <Typography variant="h6" className="font-semibold text-center">
        TERMS AND CONDITIONS APPLY
      </Typography>

      <div className="mx-auto  rounded-2xl bg-[#F9F5FF]">
        <Typography
          variant="h6"
          color="grey.900"
          mt={20}
          className="font-semibold text-center pt-10 lg:pt-16"
        >
          SPONSORED BY
        </Typography>

        <div className="max-w-lg mt-8 lg:mt-16 px-10 lg:px-32 lg:min-w-[800px]  flex flex-wrap gap-8 justify-center items-center pb-12 lg:pb-24">
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

export default TermsIDraft;
