import { Box } from "@mui/material";

const ImageAuth = () => {
  return (
    <Box
      sx={{
        backgroundImage:
          "url('/assets/images/auth-bg-image.png') , linear-gradient(133.77deg, #8F65D1 5.34%, #573195 70.87%);",
        minHeight: 312,
        width:"100%"
      }}
      
      className="bg-cover md:w-3/6"
    ></Box>
  );
};

export default ImageAuth;
