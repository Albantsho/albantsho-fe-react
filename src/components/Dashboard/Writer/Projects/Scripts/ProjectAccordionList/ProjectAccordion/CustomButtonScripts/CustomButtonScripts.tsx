import { Button } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/router";

interface IProps {
  title: string;
  link: string;
  image: StaticImageData;
}

const CustomButtonScripts = ({ title, image, link, ...props }: IProps) => {
  const { push } = useRouter();
  return (
    <Button
      {...props}
      onClick={() => push(link)}
      sx={{ ":hover": { backgroundColor: "#48297B" } }}
      className="bg-primary-dark w-28 h-32 rounded-md lg:rounded-lg p-3 md:p-5 flex flex-col gap-2 md:gap-3 justify-center items-center text-white text-base"
    >
      <div className="px-5 py-3 bg-purple-500/10 rounded-sm border border-purple-500/10">
        <Image layout="fixed" src={image} alt={title} />
      </div>
      {title}
    </Button>
  );
};

export default CustomButtonScripts;
