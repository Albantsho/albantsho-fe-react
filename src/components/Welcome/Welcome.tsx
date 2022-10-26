import { Box, Typography } from "@mui/material";
import Btn from "@shared/Btn/Btn";
import Logo from "@shared/Logo/Logo";
import Image from "next/image";
import welcome from "./assets/welcome.png";

const Welcome = () => {
  return (
    <>
      <Box
        data-aos="fade-down"
        data-aos-delay="300"
        className="px-8 py-12 lg:px-24 hidden lg:flex justify-between"
      >
        <Logo color="primary" />
      </Box>
      <div
        data-aos="fade-left"
        data-aos-delay="300"
        className="flex flex-col justify-center items-center px-5 sm:px-10 mt-12"
      >
        <Image src={welcome} alt="welcome" />
        <Typography
          variant="h3"
          color="primary.main"
          className="futura font-medium leading-normal mt-5 lg:mrt-8 text-center"
        >
          Welcome to Albantsho!
        </Typography>
        <Typography
          variant="body1"
          className="max-w-sm lg:max-w-[444px] text-center mt-2"
        >
          We know you can't wait to sell your first script and we're already
          setting things up to make that possible. While we're setting up please
          visit our blog to get useful screenwriting tips and other exclusive
          content.
        </Typography>
        <Btn
          href="https://blog.albantsho.com"
          className="py-4 px-6 lg:py-6 lg:px-11 mt-6 text-base lg:mt-16 lg:text-2xl leading-none font-normal"
        >
          Visit our blog
        </Btn>
      </div>
    </>
  );
};

export default Welcome;
