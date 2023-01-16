import { Box, Typography } from "@mui/material";
import useScriptsApi from "apis/Scripts.api";
import { IScript } from "interfaces/script";
import { debounce } from "lodash";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import routes from "routes/routes";

interface IProps {
  description: string;
}

const HeroSection = ({ description }: IProps) => {
  const { searchScripts } = useScriptsApi();
  const [searchQuery, setSearchQuery] = useState("");
  const [scriptList, setScriptList] = useState<Array<IScript>>([]);

  const handleSearch = useCallback(
    debounce(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value.trim());
      },
      2000,
      { leading: false }
    ),
    [searchQuery]
  );

  useEffect(() => {
    async function getScripts() {
      try {
        const res = await searchScripts(searchQuery);
        setScriptList(res.data.scripts);
      } catch (error) {
        ("");
      }
    }

    getScripts();
  }, [searchQuery]);

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
      <div className="flex flex-col items-center bg-white rounded-lg overflow-hidden md:min-w-[716px]">
        <div className="flex flex-1 items-center overflow-hidden">
          <input
            value={searchQuery}
            onChange={handleSearch}
            className=" placeholder:text-gray-400 text-primary-700 outline-none flex-1 py-3 px-4 text-sm sm:text-lg md:text-xl md:placeholder::text-3xl md:px-12 md:py-6"
            type="text"
            placeholder="Feature films"
          />
          <AiOutlineSearch className="text-2xl sm:text-3xl text-gray-200 mr-4" />
        </div>
        {searchQuery && (
          <div className="flex flex-col gap-2">
            {scriptList.map((script) => (
              <Link
                key={script._id}
                passHref
                href={routes.marketplaceOneScript.dynamicUrl(script._id)}
              >
                <Typography
                  variant="body1"
                  className="text-primary-700 border-b"
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
