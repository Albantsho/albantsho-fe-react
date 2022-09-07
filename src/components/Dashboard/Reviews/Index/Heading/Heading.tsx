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
    <div className="bg-white rounded-md px-5 md:px-8 lg:px-10 xl:px-14 py-9   mt-4">
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 lg:gap-8 ">
        <div className="flex-shrink-0 mx-auto sm:mx-0">
          <Image src={award} alt="award" />
        </div>
        <div className=" sm:max-w-[240px] md:max-w-[270px] lg:max-w-[320px] ">
          <Typography
            variant="h5"
            className="futura font-semibold text-primary-700 leading-normal"
          >
            Get your script reviewed by our top experts
          </Typography>
          <Typography variant="subtitle1" className="text-neutral-800">
            Your script gets even more attention from producer when it’s
            professionally reviewed by us.
          </Typography>
          {showSearchScript && !openSearchScript && (
            <Btn
              onClick={() => setOpenSearchScript(true)}
              sx={{ marginTop: { xs: 2, md: 3 } }}
              size="large"
              className="mr-auto sm:ml-auto sm:mr-0"
            >
              Review a script
            </Btn>
          )}
        </div>
      </div>
      {openSearchScript && showSearchScript && <ScriptsSearch />}
    </div>
  );
};

export default Heading;
