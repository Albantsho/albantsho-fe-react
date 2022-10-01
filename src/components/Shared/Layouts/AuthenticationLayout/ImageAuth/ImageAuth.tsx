import { Box } from "@mui/material";
import Bg from "./assets/bg.png";

const ImageAuth = () => {
  return (
    <Box
      data-aos="fade-right"
      data-aos-delay="300"
      sx={{
        backgroundImage: `url('${Bg.src}') , linear-gradient(133.77deg, #8F65D1 5.34%, #573195 70.87%);`,
        minHeight: 500,
        maxWidth: { lg: 620 },
      }}
      className="bg-cover flex-1"
    />
  );
};

export default ImageAuth;
