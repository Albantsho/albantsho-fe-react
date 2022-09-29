import { Typography } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import { Dispatch, SetStateAction } from "react";

interface IProps {
  image: StaticImageData;
  title: string;
  description: string;
  setOpenDetailScript: Dispatch<SetStateAction<boolean>>;
}

const ListTask = ({
  image,
  title,
  description,
  setOpenDetailScript,
}: IProps) => {
  return (
    <div
      data-aos-anchor-placement="top-bottom"
      data-aos="fade-up"
      onClick={() => {
        setOpenDetailScript(true);
      }}
      className="flex flex-1 cursor-pointer  items-center hover:bg-primary-50/40 flex-wrap sm:flex-nowrap gap-y-2 gap-x-2 py-5 sm:py-6 lg:py-9 px-5 sm:px-6 lg:px-12"
    >
      <div className="flex-shrink-0 -mb-2">
        <Image className="rounded-md" loading="lazy" src={image} alt={title} />
      </div>
      <div className="flex-grow sm:pl-3 sm:max-w-[271px] min-w-[170px]">
        <Typography
          variant="body1"
          className="futura font-semibold text-primary-700"
        >
          {title}
        </Typography>
        <Typography variant="caption" className="text-stone-800">
          {description}
        </Typography>
      </div>
    </div>
  );
};

export default ListTask;
