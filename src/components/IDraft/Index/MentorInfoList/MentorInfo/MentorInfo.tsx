import { Typography } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import Star from "../Stars/Star/Star";

interface IProps {
  image: StaticImageData;
  name: string;
  description: string;
}

const MentorInfo = ({ image, name, description }: IProps) => {
  return (
    <div
      data-aos="flip-up"
      className={`${
        name !== "FUNMI ODUSHOLA" && "border-b  border-tinted-100"
      } flex flex-col gap-4 md:gap-10 md:flex-row pb-10`}
    >
      <div className="flex justify-between md:w-1/3 gap-4">
        <div className="w-1/2  min-w-[100px] md:w-full overflow-hidden">
          <Image
            className="rounded-br-[50%] flex-shrink-0"
            src={image}
            alt={`${name}`}
          />
        </div>
        <div className="md:hidden ">
          <Star isSmall="isSmall" />
        </div>
      </div>
      <div className="md:w-2/3">
        <Typography
          mb={1}
          variant="h5"
          color="primary.700"
          className="font-semibold leading-normal"
        >
          {name}
        </Typography>
        <Typography variant="subtitle2" color="grey.500">
          {description}
        </Typography>
      </div>
    </div>
  );
};

export default MentorInfo;
