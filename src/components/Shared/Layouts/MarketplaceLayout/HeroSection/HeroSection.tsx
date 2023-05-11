import { Box, Typography } from "@mui/material";
import Link from "next/link";
import { AiOutlineSearch } from "react-icons/ai";
import routes from "utils/routes";
import useHeroSection from "./useHeroSection";

interface IProps {
  description: string;
}

const HeroSection = ({ description }: IProps) => {
  const { handleSearch, searchScriptData, searchQuery } = useHeroSection();

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
      <div className="flex flex-col bg-white rounded-lg md:min-w-[716px] relative">
        <div
          className={`${
            searchScriptData && searchScriptData.scripts.length > 0
              ? "border-b-2 mb-4"
              : "border-none"
          } flex flex-1 items-center rounded-lg overflow-hidden`}
        >
          <input
            onChange={handleSearch}
            className=" placeholder:text-gray-400 text-primary-700 outline-none flex-1 py-3 px-4 text-sm sm:text-lg md:text-xl md:placeholder::text-3xl md:px-12 md:py-6"
            type="text"
            placeholder="Feature films"
          />
          <AiOutlineSearch className="text-2xl sm:text-3xl text-gray-200 mr-4" />
        </div>
        {searchQuery && (
          <div className="flex flex-col gap-2 absolute -bottom-7 left-0 right-0 bg-white rounded-lg">
            {searchScriptData?.scripts.map((script) => (
              <Link
                key={script._id}
                passHref
                href={routes.marketplaceOneScript.dynamicUrl(script._id)}
              >
                <Typography
                  variant="body1"
                  className="text-primary-700 border-b-2 px-4 py-2 rounded-lg"
                >
                  {script.title}
                </Typography>
              </Link>
            ))}
          </div>
        )}
      </div>
    </Box>
  );
};

export default HeroSection;
