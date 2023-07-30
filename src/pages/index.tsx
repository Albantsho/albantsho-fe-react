import { NewLanding } from "components/NewLanding/NewLanding";
import type { NextPage } from "next";
import dynamic from "next/dynamic";
import Head from "next/head";
import { useSpring } from "react-spring";
import routes from "routes/routes";


const WhyAlbantsho = dynamic(
  () => import("components/Home/WhyAlbantsho/WhyAlbantsho")
);
const Monitors = dynamic(() => import("components/Home/Monitors/Monitors"));
const Testimonials = dynamic(
  () => import("components/Home/Testimonials/Testimonials")
);
const TrendingStories = dynamic(
  () => import("components/Home/TrendingStories/TrendingStories")
);
const Footer = dynamic(() => import("@shared/Footer/Footer"));
const FAQs = dynamic(() => import("components/Home/FAQs/FAQs"));

const links = [
  { title: "Home", href: routes.home.url },
  { title: "About Us", href: routes.aboutUs.url },
  { title: "Blog", href: routes.blog.url },
  { title: "FAQ", href: routes.FAQs.url },
];

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
      {/* <animated.div style={navAnim}>
        <Nav links={links} secondaryUnderLineColor={false} />
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
      </Suspense> */}
      {/* <WaitListLanding /> */}
      <NewLanding />
    </>
  );
};

export default Home;
