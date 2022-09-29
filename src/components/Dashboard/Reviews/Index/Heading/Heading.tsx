import { Typography } from "@mui/material";
import Btn from "@shared/Btn/Btn";
import Image from "next/image";
import { useState } from "react";
import ScriptsSearch from "../ScriptsSearch/ScriptsSearch";
import award from "./assets/award.png";

interface IProps {
  showSearchScript?: boolean;
}

const Heading = ({ showSearchScript }: IProps) => {
  const [openSearchScript, setOpenSearchScript] = useState<boolean>(false);

  return (
    <div
      data-aos="flip-left"
      className={`${
        showSearchScript && "shadow-primary"
      } bg-white rounded-md px-5 md:px-8 lg:px-10 xl:px-14 py-9 lg:py-16 mt-4`}
    >
      <div className="flex flex-col items-center sm:flex-row gap-3 sm:gap-6 max-w-[640px] mx-auto lg:gap-8 ">
        <div className="flex-shrink-[0.5] mx-auto sm:mx-0">
          <Image src={award} alt="award" />
        </div>
        <div className=" sm:max-w-[380px] ">
          <Typography
            variant="h4"
            className="futura font-semibold text-primary-700 leading-7 mb-2 md:mb-0 sm:leading-8 text-center sm:text-start "
          >
            Get your script reviewed by our top experts
          </Typography>
          <Typography
            variant="subtitle1"
            className="text-neutral-800 text-center sm:text-start leading-normal my-2  md:my-5"
          >
            Your script gets even more attention from producer when it’s
            professionally reviewed by us.
          </Typography>
          {showSearchScript && !openSearchScript && (
            <div className="flex justify-center sm:justify-start">
              <Btn
                className="px-8 py-3 sm:px-6 sm:py-3"
                onClick={() => setOpenSearchScript(true)}
                size="large"
              >
                Review a script
              </Btn>
            </div>
          )}
        </div>
      </div>
      {openSearchScript && showSearchScript && <ScriptsSearch />}
    </div>
  );
};

export default Heading;
