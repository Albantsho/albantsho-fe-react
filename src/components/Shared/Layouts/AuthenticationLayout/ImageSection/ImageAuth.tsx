import { Box } from "@mui/material";
import Bg from "./assets/bg.png";

const ImageAuth = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url('${Bg.src}') , linear-gradient(133.77deg, #8F65D1 5.34%, #573195 70.87%);`,
        minHeight: 500,
      }}
      className="bg-cover flex-1"
    />
  );
};

export default ImageAuth;