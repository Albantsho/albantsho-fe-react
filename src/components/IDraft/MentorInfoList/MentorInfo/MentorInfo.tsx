import { Typography } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import Stars from "../Stars/Stars";

interface IProps {
  image: StaticImageData;
  name: string;
  description: string;
}


const MentorInfo = ({ image, name, description }: IProps) => {
  return (
    <div className="flex flex-col gap-4 md:gap-10 md:flex-row pb-10 border-b  border-tinted-100">
      <div className="flex justify-between md:w-1/3">
        <div className="w-1/2 md:w-full overflow-hidden">
          <Image className="rounded-br-[50%]" src={image} alt={`${name}`} />
        </div>
        <div className="md:hidden">
          <Stars />
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
