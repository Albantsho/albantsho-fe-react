import StarIcon from "@assets/icons/star.svg";
import { Icon } from "@mui/material";
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
      <div>
        <div className="max-w-screen-lg mx-auto">
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
