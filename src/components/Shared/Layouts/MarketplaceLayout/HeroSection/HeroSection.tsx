import { Box, InputAdornment, Typography } from "@mui/material";
import CustomInput from "@shared/CustomInput/CustomInput";
import { AiOutlineSearch } from "react-icons/ai";

interface IProps {
  description: string;
}

const HeroSection = ({ description }: IProps) => {
  return (
    <Box
      component="section"
      id="hero-section"
      sx={{
        backgroundImage: "url('/assets/images/julie.jpg')",
        minHeight: { xs: 375, md: 620 },
      }}
      className="bg-cover bg-left grid place-content-center px-5 sm:px-10 my-auto"
    >
      <Typography
        variant="h4"
        color="#fff"
        className="futura font-medium max-w-[349px] mx-auto mt-10 md:mt-12 sm:max-w-lg text-center mb-6 leading-10"
        gutterBottom
      >
        {description}
      </Typography>
      <div className="flex flex-1 items-center bg-white rounded-lg overflow-hidden md:min-w-[716px]">
        <input
          className=" placeholder:text-gray-400 text-primary-700 outline-none flex-1 py-3 px-4 text-sm sm:text-lg md:text-xl md:placeholder::text-3xl md:px-12 md:py-6"
          type="text"
          placeholder="Feature films"
        />
        <AiOutlineSearch className="text-2xl sm:text-3xl text-gray-200 mr-4" />
      </div>
    </Box>
  );
};

export default HeroSection;

{
  /* <CustomInput
id="email"
variant="outlined"
size="medium"
InputProps={{
  endAdornment: (
    <InputAdornment position="start">
      <AiOutlineSearch className="text-2xl text-gray-200" />
    </InputAdornment>
  ),
}}
placeholder="Search-Title, Genre, Themes..."
className="bg-white rounded-lg placeholder:!text-gray-400 flex-1"
/> */
}
