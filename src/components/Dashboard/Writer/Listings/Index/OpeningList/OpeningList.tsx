import beautySmall from "@assets/images/beauty-small.jpg";
import { Paper, Typography } from "@mui/material";
import { IBidScript } from "interfaces/script";
import OpeningBidScript from "./OpeningBidScript/OpeningBidScript";

const listScripts = [
  {
    id: 1,
    image: beautySmall,
    title: "The Long man of Long Beach",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesu fermentum ipsum ",
    type: "Tv Pilot",
    bids: 4,
  },
  {
    id: 2,
    image: beautySmall,
    title: "The Long man of Long Beach",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesu fermentum ipsum ",
    type: "Tv Pilot",
    bids: 2,
  },
  {
    id: 3,
    image: beautySmall,
    title: "The Long man of Long Beach",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesu fermentum ipsum ",
    type: "Tv Pilot",
    bids: 1,
  },
  {
    id: 4,
    image: beautySmall,
    title: "The Long man of Long Beach",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesu fermentum ipsum ",
    type: "Tv Pilot",
    bids: 0,
  },
  {
    id: 5,
    image: beautySmall,
    title: "The Long man of Long Beach",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesu fermentum ipsum ",
    type: "Tv Pilot",
    bids: 3,
  },
];

interface IProps {
  scripts: IBidScript[];
}

const OpeningList = ({ scripts }: IProps) => {
  return (
    <Paper elevation={0} className="mt-4 bg-white mb-16 shadow-primary">
      <div className="border-b border-tinted-100 px-5 py-5 xl:px-14 xl:py-8 flex">
        <Typography
          variant="h6"
          className="futura w-1/2 sm:w-full sm:max-w-[387px] md:max-w-[377px]  xl:max-w-[408px] font-medium text-primary-700"
        >
          Script
        </Typography>

        <Typography
          variant="h6"
          className="futura hidden md:block lg:hidden xl:flex 2xl:ml-3 md:text-center 2xl:mr-28 font-medium text-primary-700"
        >
          Script Type
        </Typography>
        <Typography
          variant="h6"
          className="futura hidden sm:block self-start md:mx-auto  lg:ml-0 xl:ml-20 xl:mr-0 md:text-center lg:text-star font-medium text-primary-700"
        >
          Bids
        </Typography>
      </div>
      <div className="px-5 xl:px-14 overflow-hidden">
        {scripts.map((script, index) => (
          <OpeningBidScript
            key={script._id}
            scripts={scripts}
            script={script}
            index={index}
          />
        ))}
      </div>
    </Paper>
  );
};

export default OpeningList;
