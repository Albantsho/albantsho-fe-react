import { Typography } from "@mui/material";
import Btn from "@shared/Btn/Btn";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import award from "./assets/award.png";

const HeadReviews = () => {
  const { route } = useRouter();

  return (
    <div className="bg-white mt-4 md:mt-16 rounded-md px-5 pt-7 pb-6 sm:pb-9 lg:pb-12 xl:pb-16  md:pt-14  flex flex-col sm:flex-row  gap-3 sm:gap-6 xl:gap-8">
      <div className="flex-shrink-0 mx-auto xl:mx-0">
        <Image src={award} alt="award" />
      </div>
      <div className="mr-4 lg:max-w-lg xl:max-w-md">
        <Typography
          variant="h6"
          className="futura font-semibold text-primary-700 leading-normal"
        >
          Get your script reviewed by our top experts
        </Typography>
        <Typography variant="subtitle1" className="text-neutral-800">
          Your script gets even more attention from producer when it’s
          professionally reviewed by us.
        </Typography>
        {route === "/reviews" && (
          <Link href="reviews/search-scripts">
            <Btn sx={{ marginTop: { xs: 2, md: 3 } }} size="large">
              Review a script
            </Btn>
          </Link>
        )}
      </div>
    </div>
  );
};

export default HeadReviews;
