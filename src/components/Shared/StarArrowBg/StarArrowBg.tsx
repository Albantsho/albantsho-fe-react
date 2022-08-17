import StarIcon from "@assets/Icons/star.svg";
import GreenArrow from "@assets/Icons/green-arrow.svg";
import YellowArrow from "@assets/Icons/yellow-arrow.svg";
import { Icon } from "@mui/material";

const StarArrowBg = () => {
  return (
    <div className="hidden xl:block absolute inset-0">
      <Icon
        className="absolute right-full"
        sx={{
          width: 47,
          height: 75,
          rotate: "-120deg",
          top: 50,
        }}
      >
        <GreenArrow />
      </Icon>
      <Icon
        className="absolute right-full"
        sx={{ width: 115, height: 115, top: 250 }}
      >
        <StarIcon />
      </Icon>
      <Icon
        className="absolute left-full"
        sx={{
          width: 99,
          height: 67,
          top: 200,
          "svg path": { fill: "#7953B5 !important" },
        }}
      >
        <YellowArrow />
      </Icon>
      <Icon
        className="absolute left-full"
        sx={{ width: 429, height: 429, translate: "", top: 400 }}
      >
        <StarIcon />
      </Icon>
    </div>
  );
};

export default StarArrowBg;
