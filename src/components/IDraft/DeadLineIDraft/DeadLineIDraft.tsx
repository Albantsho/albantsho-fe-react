import { Typography, Box } from "@mui/material";
import Btn from "@shared/Btn/Btn";
import Image from "next/image";
import flash from "./assets/flash.png";

const DeadLineIDraft = () => {
  return (
    <Box className="flex flex-col items-center py-16">
      <Box className="bg-primary-700 py-12 px-12 text-white flex flex-col items-center rounded-full">
        <span className="mb-3 text-2xl">DEADLINE</span>
        <Typography variant="body1" className="font-semibold text-center">
          15TH <br /> MARCH <br /> 2022
        </Typography>
      </Box>

      <Box className="flex relative flex-col w-full gap-6 justify-center items-center mt-6 md:mt-36">
        <div className="absolute left-0 lg:left-16 top-0 bottom-0 -z-10">
          <Image src={flash} alt="flash" />
        </div>
        <Box sx={{transform:"rotateY(180deg)"}} className="absolute hidden lg:block  right-16 bottom-0 top-0 -z-10" >
          <div className="">
            <Image src={flash} alt="flash" />
          </div>
        </Box>
        <Typography variant="h5" className="font-semibold">
          APPLICATION IS FREE
        </Typography>
        <Btn
          size="large"
          sx={{ paddingY: { xs: 2, md: 3 }, paddingX: { xs: 3, md: 4 } }}
        >
          Apply now
        </Btn>
      </Box>
    </Box>
  );
};

export default DeadLineIDraft;
