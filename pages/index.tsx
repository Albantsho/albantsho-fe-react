import Brands from "components/Landing/Brands/Brands";
import HeroSection from "components/Landing/HeroSection/HeroSection";
import LandingNav from "components/Landing/LandingNav/LandingNav";
import type { NextPage } from "next";
import dynamic from "next/dynamic";
import Head from "next/head";
import { Suspense } from "react";
import { animated, useSpring } from "react-spring";

const WhyAlbantsho = dynamic(
  () => import("components/Landing/WhyAlbantsho/WhyAlbantsho")
);
const Monitors = dynamic(() => import("components/Landing/Monitors/Monitors"));
const Testimonials = dynamic(
  () => import("components/Landing/Testimonials/Testimonials")
);
const TrendingStories = dynamic(
  () => import("components/Landing/TrendingStories/TrendingStories")
);
const Footer = dynamic(() => import("@shared/Footer/Footer"));
const FAQs = dynamic(() => import("components/Landing/FAQs/FAQs"));

const Home: NextPage = () => {
  const navAnim = useSpring({
    from: { y: -100, opacity: 0 },
    to: { y: 0, opacity: 1 },
  });

  return (
    <>
      <Head>
        <title>Albantsho</title>
      </Head>
      <animated.div style={navAnim}>
        <LandingNav />
      </animated.div>
      <main>
        <HeroSection />
        <Brands />
        <Suspense fallback={null}>
          <WhyAlbantsho />
          <Monitors />
          <Testimonials />
          <FAQs />
          <TrendingStories />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </>
  );
};

export default Home;