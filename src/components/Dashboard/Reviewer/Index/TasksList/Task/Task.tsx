import { Typography } from "@mui/material";
import { IReviewerTask } from "interfaces/reviews";
import dynamic from "next/dynamic";
import Image from "next/image";
import { Suspense, useState } from "react";

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
        data-aos-anchor-placement="top-bottom"
        data-aos="fade-up"
        onClick={handleSelectedScript}
        className={`${
          selectedScriptId ? "bg-primary-50/40" : "bg-white"
        } flex flex-1 cursor-pointer  items-center hover:bg-primary-50/40 flex-wrap sm:flex-nowrap gap-y-2 gap-x-2 py-5 sm:py-6 lg:py-9 px-5 sm:px-6 lg:px-12`}
      >
        <div className="flex-shrink-0 -mb-2">
          <Image
            className="rounded-md"
            loading="lazy"
            src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${reviewerTask.script_image}`}
            alt={reviewerTask.title}
          />
        </div>
        <div className="flex-grow sm:pl-3 sm:max-w-[271px] min-w-[170px]">
          <Typography
            variant="body1"
            className="futura font-semibold text-primary-700"
          >
            {reviewerTask.title}
          </Typography>
          <Typography variant="caption" className="text-stone-800">
            {reviewerTask.description}
          </Typography>
        </div>
      </div>
      <Suspense fallback={null}>
        <DetailScriptModal
          reviewerTask={reviewerTask}
          openDetailScript={openDetailScript}
          setOpenDetailScript={setOpenDetailScript}
        />
      </Suspense>
    </>
  );
};

export default Task;
