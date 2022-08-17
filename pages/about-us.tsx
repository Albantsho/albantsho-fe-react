import { Icon } from "@mui/material";
import Layout from "@shared/Layouts/Layout";
import AboutUsImage from "components/AboutUs/AboutUsImage/AboutUsImage";
import GetInTouch from "components/AboutUs/GetInTouch/GetInTouch";
import OurStory from "components/AboutUs/OurStory/OurStory";
import OurVision from "components/AboutUs/OurVision/OurVision";
import Head from "next/head";
import type { NextPageWithLayout } from "./_app";
import StarIcon from "@assets/icons/star.svg";
import HeroSection from "@shared/HeroSection/HeroSection";

const AboutUs: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Albantsho || About Us</title>
      </Head>
      <HeroSection title="About Us" />
      <div className="relative">
        <div className="max-w-screen-lg mx-auto px-5 sm:px-10">
          <AboutUsImage />
          <OurStory />
          <OurVision />
        </div>
        <Icon
          className="absolute bottom-0 left-full"
          sx={{
            width: { xs: 140, xl: 429 },
            height: { xs: 140, xl: 429 },
            translate: { xs: "-60% 90%", xl: "-50% 50%" },
          }}
        >
          <StarIcon />
        </Icon>
      </div>
      <GetInTouch />
    </>
  );
};

AboutUs.getLayout = (page: React.ReactElement) => <Layout>{page}</Layout>;

export default AboutUs;
