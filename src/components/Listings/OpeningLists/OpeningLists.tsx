import { Button, Divider, Typography } from "@mui/material";
import Image from "next/image";
import projectArchive from "./assets/project-archive.png";
import { IoIosMore } from "react-icons/io";

const listScripts = [
  {
    id: 1,
    image: projectArchive,
    title: "The Long man of Long Beach",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesu fermentum ipsum ",
    type: "Tv Pilot",
    bids: 4,
  },
  {
    id: 2,
    image: projectArchive,
    title: "The Long man of Long Beach",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesu fermentum ipsum ",
    type: "Tv Pilot",
    bids: 2,
  },
  {
    id: 3,
    image: projectArchive,
    title: "The Long man of Long Beach",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesu fermentum ipsum ",
    type: "Tv Pilot",
    bids: 1,
  },
  {
    id: 4,
    image: projectArchive,
    title: "The Long man of Long Beach",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesu fermentum ipsum ",
    type: "Tv Pilot",
    bids: 0,
  },
  {
    id: 5,
    image: projectArchive,
    title: "The Long man of Long Beach",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesu fermentum ipsum ",
    type: "Tv Pilot",
    bids: 3,
  },
];

const OpeningLists = () => {
  return (
    <div className="mt-4 bg-white rounded-md shadow-sm px-3 py-5">
      <div className="mb-5 flex border-b pb-5 sm:pb-6 gap-2 sm:gap-4 md:gap-8 xl:gap-10 2xl:gap-14">
        <Typography
          variant="body1"
          className="futura flex-1 text-primary-700 font-medium "
        >
          Script
        </Typography>
        <Typography
          variant="body1"
          className="futura hidden flex-1  md:block  text-primary-700 font-medium "
        >
          Script Type
        </Typography>
        <Typography
          variant="body1"
          className="futura mr-10 md:mr-16  block  text-primary-700 font-medium "
        >
          Bids
        </Typography>
      </div>

      <div className="flex flex-col  gap-5 md:gap-10">
        {listScripts.map((script, index) => {
          return (
            <div key={script.id} className="sm:px-4 md:px-6 xl:px-10 2xl:px-12">
              <div className="flex mb-7 gap-3 sm:gap-4 md:gap-8 xl:gap-10 2xl:gap-14">
                <div className="flex flex-1 min-w-[210px] sm:gap-5 flex-wrap item-center gap-2">
                  <div className="flex-shrink-0 w-[110px] h-[80px]">
                    <Image
                      className="rounded-md w-full h-full bg-red-500"
                      loading="lazy"
                      src={script.image}
                      alt={script.title}
                    />
                  </div>
                  <div className="max-w-[220px]">
                    <Typography
                      variant="body1"
                      className="futura font-semibold text-primary-700"
                    >
                      {script.title}
                    </Typography>
                    <Typography variant="caption" className="text-stone-800">
                      {script.description}
                    </Typography>
                  </div>
                </div>

                <div className=" py-2 px-4   hidden md:block bg-slate-100 rounded-sm  text-neutral-800">
                  <span>{script.type}</span>
                </div>

                <div className="md:flex-1 flex flex-wrap justify-between items-center gap-8 md:gap-16">
                  <span className="w-8 h-8   border border-success-500 rounded-full flex justify-center items-center text-success-500">
                    {script.bids}
                  </span>
                  <IoIosMore className="text-2xl text-primary-700 cursor-pointer right-0 top-1/3" />
                </div>
              </div>
              {index < listScripts.length - 1 && (
                <Divider className="hidden md:flex" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OpeningLists;
