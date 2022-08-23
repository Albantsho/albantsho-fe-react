import { Box } from "@mui/material";

const ImageSignup = () => {
  return (
    <Box
      sx={{
        backgroundImage:
          "url('/assets/images/auth-bg-image.png') , linear-gradient(133.77deg, #8F65D1 5.34%, #573195 70.87%);",
        minHeight: 312,
      }}
      className="bg-cover"
    ></Box>
  );
};

export default ImageSignup;
