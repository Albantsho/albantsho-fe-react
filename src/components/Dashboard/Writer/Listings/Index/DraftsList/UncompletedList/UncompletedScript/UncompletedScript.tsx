import { Button, Chip, Tooltip, Typography } from "@mui/material";
import { IUnCompletedScript } from "interfaces/script";
import dynamic from "next/dynamic";
import Image from "next/image";
import { Suspense, useState } from "react";

const AddScriptToCompletedModal = dynamic(
  () =>
    import("../../Modals/AddScriptToCompletedModal/AddScriptToCompletedModal")
);

interface IProps {
  script: IUnCompletedScript;
}

const UncompletedScript = ({ script }: IProps) => {
  const [openAddToScript, setOpenAddToScript] = useState<boolean>(false);
  return (
    <>
      <div
        data-aos-anchor-placement="top-bottom"
        data-aos="fade-up"
        className="flex py-6 items-center sm:justify-between xl:justify-start"
      >
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 md:w-fit xl:mr-14 lg:max-w-[445px] ">
          <div className="flex gap-3 items-end sm:items-start">
            <Image
              width={64}
              height={64}
              alt={script.title}
              className="rounded-md flex-shrink-0 w-16 h-16"
              loading="lazy"
              src={script.image}
            />

            <Tooltip title="Progress">
              <Chip
                label={`${script.progressPercent}% done`}
                className="bg-success-50 px-1 flex-shrink font-xs font-semibold sm:hidden text-success-500"
              />
            </Tooltip>
          </div>
          <div className="flex-grow sm:w-[271px] min-w-[170px] ">
            <Typography
              variant="body1"
              className="futura font-semibold text-primary-700"
            >
              {script.title}
            </Typography>
            <Typography variant="caption" className="text-stone-800">
              {script.tagLine}
            </Typography>
          </div>
          <Button
            onClick={() => setOpenAddToScript(true)}
            variant="text"
            sx={{
              border: "1px solid #7953B5",
              borderRadius: 1.5,
            }}
            className=" sm:hidden mb-1 py-2 px-3"
          >
            Complete Listing
          </Button>
        </div>
        <div className="hidden md:flex lg:hidden xl:flex gap-4 justify-start  flex-col items-center md:items-center lg:items-end xl:items-start xl:ml-2">
          <Chip
            label={`${script.progressPercent}% done`}
            className="py-5 px-4 hidden md:flex rounded-md bg-success-50 text-success-500"
          />
        </div>
        <div className="sm:min-w-[116px] justify-end xl:py-10 sm:pr-0 items-center hidden flex-col gap-2 sm:flex xl:ml-auto">
          <Chip
            label={`${script.progressPercent}% done`}
            className="py-5 px-4 w-full md:hidden lg:flex xl:hidden rounded-md bg-success-50 text-success-500"
          />
          <Button
            onClick={() => setOpenAddToScript(true)}
            variant="text"
            className="py-2 px-3 lg:px-4 lg:py-3"
            sx={{
              border: "1px solid #7953B5",
              borderRadius: 1.5,
            }}
          >
            Complete Listing
          </Button>
        </div>
      </div>
      <Suspense fallback={null}>
        <AddScriptToCompletedModal
          id={script._id}
          openAddToScript={openAddToScript}
          setOpenAddToScript={setOpenAddToScript}
        />
      </Suspense>
    </>
  );
};

export default UncompletedScript;
