import StarIcon from "@assets/icons/star.svg";
import { SvgIcon } from "@mui/material";
import GeneralLayout from "@shared/Layouts/GeneralLayout/GeneralLayout";
import AboutUsImage from "components/AboutUs/AboutUsImage/AboutUsImage";
import GetInTouch from "components/AboutUs/GetInTouch/GetInTouch";
import OurStory from "components/AboutUs/OurStory/OurStory";
import OurVision from "components/AboutUs/OurVision/OurVision";
import Head from "next/head";
import type { NextPageWithLayout } from "./_app";

const AboutUs: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Albantsho || About Us</title>
      </Head>
      <div className="px-5 sm:px-10">
        <div className="relative">
          <div className="max-w-screen-lg mx-auto">
            <AboutUsImage />
            <OurStory />
            <OurVision />
          </div>
          <SvgIcon
            component={StarIcon}
            inheritViewBox
            className="absolute bottom-0 right-1 text-transparent"
            sx={{
              width: { xs: 140, xl: 429 },
              height: { xs: 140, xl: 429 },
              translate: { xs: "55% 90%", xl: "100% 45%" },
            }}
          />
        </div>
        <GetInTouch />
      </div>
    </>
  );
};

AboutUs.getLayout = (page: React.ReactElement) => (
  <GeneralLayout title="About Us" hideBg>
    {page}
  </GeneralLayout>
);

export default AboutUs;
