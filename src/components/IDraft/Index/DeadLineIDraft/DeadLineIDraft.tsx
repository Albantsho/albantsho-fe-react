import { Typography, Box } from "@mui/material";
import Btn from "@shared/Btn/Btn";
import Image from "next/image";
import flash from "./assets/flash.png";

const DeadLineIDraft = () => {
  return (
    <div className="flex flex-col items-center py-16 max-w-screen-2xl mx-auto mb-4 md:mb-6 lg:mb-8 xl:mb-14 2xl:mb-16">
      <div className="bg-primary-700 w-56 h-56 lg:w-80 lg:h-80 text-white flex flex-col justify-center items-center rounded-full">
        <span className="mb-2 text-2xl">DEADLINE</span>
        <Typography
          variant="h6"
          className="font-semibold px-24 md:px-0 text-center leading-normal "
        >
          15TH MARCH <br /> 2022
        </Typography>
      </div>

      <div className="flex relative flex-col w-full gap-6 justify-center items-center mt-6 md:mt-36">
        <div className="lg:min-w-[1020px] xl:min-w-[1250px] w-full">
          <div className="absolute  -left-[60%] sm:-left-[100%] lg:left-16 top-0 bottom-0 -z-10 opacity-70">
            <Image src={flash} alt="flash" />
          </div>
          <Box
            sx={{ transform: "rotateY(180deg)" }}
            className="absolute hidden lg:block  right-16 bottom-0 top-0 -z-10"
          >
            <div className="opacity-70">
              <Image src={flash} alt="flash" />
            </div>
          </Box>
        </div>
        <Typography variant="h5" className="font-semibold mt-8 md:mt-2">
          APPLICATION IS FREE
        </Typography>
        <Btn
          size="large"
          sx={{ paddingY: { xs: "12px", md: 3 }, paddingX: { xs: 3, md: 4 } }}
        >
          Apply now
        </Btn>
      </div>
    </div>
  );
};

export default DeadLineIDraft;
