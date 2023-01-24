import { Button, Chip, Typography } from "@mui/material";
import { IUnlistedScript } from "interfaces/script";
import dynamic from "next/dynamic";
import Image from "next/image";
import { Suspense, useState } from "react";

const RelistScriptModal = dynamic(
  () => import("../../Modals/RelistScriptModal/RelistScriptModal")
);

interface IProps {
  script: IUnlistedScript;
  setUnListedScripts: React.Dispatch<React.SetStateAction<IUnlistedScript[]>>;
}

const UnlistedScript = ({ script, setUnListedScripts }: IProps) => {
  const [openRelistScript, setOpenRelistScript] = useState<boolean>(false);

  const setOpenRelistScriptModal = () => setOpenRelistScript(true);

  return (
    <>
      <div
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        className="flex py-6 items-center sm:justify-between xl:justify-start"
      >
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 md:w-fit xl:mr-14 lg:max-w-[445px] ">
          <Image
            width={64}
            height={64}
            alt={script.title}
            className="rounded-md flex-shrink-0 w-16 h-16"
            loading="lazy"
            src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${script.image}`}
          />

          <div className="flex-grow sm:max-w-[271px] min-w-[170px] ">
            <Typography
              variant="body1"
              className="futura font-semibold text-primary-700"
            >
              {script.title}
            </Typography>
            <Typography variant="caption" className="text-stone-800">
              {script.tagline}
            </Typography>
          </div>
          <Button
            onClick={setOpenRelistScriptModal}
            variant="text"
            sx={{
              border: "1px solid #7953B5",
              borderRadius: 1.5,
            }}
            className=" sm:hidden mb-1"
          >
            Relist
          </Button>
        </div>
        <div className="hidden md:flex lg:hidden xl:flex gap-4 justify-start  flex-col items-center md:items-center lg:items-end xl:items-start xl:ml-2">
          <div className="xl:min-w-[138px]">
            <Chip
              label={script.scriptFormat}
              className=" py-5 px-4  rounded-md bg-tinted-100/80 text-neutral-800 w-fit"
            />
          </div>
        </div>
        <div className="sm:min-w-[116px] justify-end xl:py-10 sm:pr-0 items-center hidden sm:flex xl:ml-auto">
          <Button
            onClick={setOpenRelistScriptModal}
            variant="text"
            sx={{
              paddingY: 1,
              border: "1px solid #7953B5",
              borderRadius: 1.5,
            }}
            className="md:ml-auto xl:ml-0 w-full"
          >
            Relist
          </Button>
        </div>
      </div>
      {openRelistScript ? (
        <Suspense fallback={null}>
          <RelistScriptModal
            setUnListedScripts={setUnListedScripts}
            id={script._id}
            openRelistScript={openRelistScript}
            setOpenRelistScript={setOpenRelistScript}
          />
        </Suspense>
      ) : null}
    </>
  );
};

export default UnlistedScript;
