import { Typography, SvgIcon } from "@mui/material";
import { IReviewerTask } from "interfaces/reviews";
import dynamic from "next/dynamic";
import Image from "next/image";
import { Suspense, useState } from "react";
import DefaultImage from "@assets/default-image-script.svg";

const DetailScriptModal = dynamic(
  () => import("../../DetailScriptModal/DetailScriptModal")
);

interface IProps {
  reviewerTask: IReviewerTask;
  setSelectedScriptId: React.Dispatch<React.SetStateAction<string>>;
  selectedScriptId: string;
}

const Task = ({
  reviewerTask,
  setSelectedScriptId,
  selectedScriptId,
}: IProps) => {
  const [openDetailScript, setOpenDetailScript] = useState(false);

  const handleSelectedScript = () => {
    setOpenDetailScript(true);
    setSelectedScriptId(reviewerTask._id);
  };

  return (
    <>
      <div
        onClick={handleSelectedScript}
        className={`${
          selectedScriptId === reviewerTask._id
            ? "bg-primary-50/40"
            : "bg-white"
        } flex cursor-pointer  h-fit justify-start hover:bg-primary-50/40 flex-wrap sm:flex-nowrap gap-y-2 gap-x-2 py-5 sm:py-6 lg:py-9 px-5 sm:px-6 lg:px-12 `}
      >
        <div className="flex-shrink-0 -mb-2">
          {reviewerTask.image ? (
            <Image
              style={{ width: "64px", height: "64px" }}
              width={64}
              height={64}
              className="rounded-md w-16 h-16"
              loading="lazy"
              src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${reviewerTask.image}`}
              alt={reviewerTask.title}
              unoptimized
            />
          ) : (
            <div className="flex justify-center w-[64px] h-[64px] items-center self-start  bg-tinted-100/60 rounded-md">
              <SvgIcon
                inheritViewBox
                fontSize="large"
                component={DefaultImage}
              />
            </div>
          )}
        </div>
        <div className="flex-grow sm:pl-3 sm:max-w-[271px] min-w-[170px]">
          <Typography
            variant="body1"
            className="futura font-semibold text-primary-700"
          >
            {reviewerTask.title}
          </Typography>
          <Typography variant="caption" className="text-stone-800">
            {reviewerTask.tagline}
          </Typography>
        </div>
      </div>
      <Suspense fallback={null}>
        {openDetailScript ? (
          <DetailScriptModal
            reviewerTask={reviewerTask}
            openDetailScript={openDetailScript}
            setOpenDetailScript={setOpenDetailScript}
          />
        ) : null}
      </Suspense>
    </>
  );
};

export default Task;
