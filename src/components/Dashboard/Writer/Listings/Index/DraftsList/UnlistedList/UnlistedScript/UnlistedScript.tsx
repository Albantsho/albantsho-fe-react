import { Button, Chip, SvgIcon, Typography } from "@mui/material";
import { IUnlistedScript } from "interfaces/script";
import dynamic from "next/dynamic";
import Image from "next/image";
import { Suspense, useState } from "react";
import DefaultImage from "@assets/default-image-script.svg";

const RelistScriptModal = dynamic(
  () => import("../../Modals/RelistScriptModal/RelistScriptModal")
);

const DeleteScriptModal = dynamic(
  () => import("../../Modals/DeleteScriptModal/DeleteScriptModal")
);

interface IProps {
  script: IUnlistedScript;
  refetch: any;
}

const UnlistedScript = ({ script, refetch }: IProps) => {
  const [openRelistScript, setOpenRelistScript] = useState<boolean>(false);
  const [openDeleteScript, setOpenDeleteScript] = useState<boolean>(false);

  const setOpenRelistScriptModal = () => setOpenRelistScript(true);
  const setOpenDeleteScriptModal = () => setOpenDeleteScript(true);

  return (
    <>
      <div
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        className="flex py-6 items-center sm:justify-between xl:justify-start"
      >
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 md:w-fit xl:mr-6 lg:max-w-[445px] ">
          {script.image ? (
            <Image
              width={64}
              height={64}
              alt={script.title}
              className="rounded-md flex-shrink-0 w-16 h-16"
              loading="lazy"
              src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${script.image}`}
              unoptimized
            />
          ) : (
            <div className="w-16 h-16 items-center justify-center flex">
              <SvgIcon
                inheritViewBox
                fontSize="large"
                component={DefaultImage}
              />
            </div>
          )}

          <div className="flex-grow sm:w-[261px] min-w-[170px] ">
            <Typography
              variant="body1"
              className="futura font-semibold text-primary-700"
            >
              {script.title}
            </Typography>
            <Typography
              variant="caption"
              className="text-stone-800 sm::min-w-[270px]"
            >
              {script.tagline}
            </Typography>
          </div>
          <div className="flex-1 flex gap-4">
            <Button
              onClick={setOpenRelistScriptModal}
              variant="outlined"
              className="sm:hidden mb-1 min-w-[77px] flex-1"
            >
              Relist
            </Button>
            <Button
              onClick={setOpenDeleteScriptModal}
              variant="outlined"
              color="error"
              className=" sm:hidden mb-1"
            >
              Delete
            </Button>
          </div>
        </div>
        <div className="hidden md:flex lg:hidden xl:flex gap-4 justify-start  flex-col items-center md:items-center lg:items-end xl:items-start xl:ml-2">
          <div className="xl:min-w-[138px]">
            <Chip
              label={script.scriptFormat}
              className=" py-5 px-4  rounded-md bg-tinted-100/80 text-neutral-800 w-fit"
            />
          </div>
        </div>
        <div className="sm:min-w-[140px] xl:min-w-[160px] justify-end gap-4 xl:py-10 sm:pr-0 items-center hidden sm:flex xl:ml-auto lg:flex-col xl:flex-row ">
          <Button
            onClick={setOpenRelistScriptModal}
            variant="outlined"
            sx={{
              paddingY: 1,
              border: "1px solid",
              borderRadius: 1.5,
            }}
            className="md:ml-auto xl:ml-0 w-full xl:min-w-[77px] xl:h-[48px]"
          >
            Relist
          </Button>
          <Button
            onClick={setOpenDeleteScriptModal}
            variant="outlined"
            color="error"
            sx={{
              paddingY: 1,
              border: "1px solid",
              borderRadius: 1.5,
            }}
            className="md:ml-auto xl:ml-0 w-full xl:min-w-[77px] xl:h-[48px]"
          >
            Delete
          </Button>
        </div>
      </div>
      <Suspense fallback={null}>
        {openRelistScript ? (
          <RelistScriptModal
            refetch={refetch}
            id={script._id}
            openRelistScript={openRelistScript}
            setOpenRelistScript={setOpenRelistScript}
          />
        ) : null}
      </Suspense>
      <Suspense fallback={null}>
        {openDeleteScript ? (
          <DeleteScriptModal
            refetch={refetch}
            id={script._id}
            openDeleteScript={openDeleteScript}
            setOpenDeleteScript={setOpenDeleteScript}
          />
        ) : null}
      </Suspense>
    </>
  );
};

export default UnlistedScript;
