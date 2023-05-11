import GreenArrow from "@assets/icons/green-arrow.svg";
import StarIcon from "@assets/icons/star.svg";
import YellowArrow from "@assets/icons/yellow-arrow.svg";
import { SvgIcon } from "@mui/material";
import Nav from "@shared/Nav/Nav";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import routes from "utils/routes";
import HeroSection from "./HeroSection/HeroSection";

const links = [
  { title: "Home", href: routes.home.url },
  { title: "About Us", href: routes.aboutUs.url },
  { title: "Blog", href: routes.blog.url },
  { title: "FAQ", href: routes.FAQs.url },
];
interface IProps {
  children: React.ReactNode;
  title: string;
  hideBg?: boolean;
}

const Footer = dynamic(() => import("@shared/Footer/Footer"));

const GeneralLayout = ({ children, title, hideBg }: IProps) => {
  return (
    <>
      <Nav links={links} secondaryUnderLineColor={false} />
      <main>
        <HeroSection title={title} />
        <div className="flex justify-center">
          {!hideBg && (
            <div className="flex-1 relative hidden xl:block overflow-hidden">
              <SvgIcon
                inheritViewBox
                component={GreenArrow}
                className="absolute"
                sx={{
                  rotate: "-120deg",
                  top: 50,
                  right: "10%",
                  fontSize: 60,
                }}
              />
              <SvgIcon
                inheritViewBox
                component={StarIcon}
                className="absolute hidden xl:block text-transparent"
                sx={{ fontSize: 115, top: 250, right: "5%" }}
              />
            </div>
          )}
          {children}
          {!hideBg && (
            <div className="flex-1 relative hidden xl:block overflow-hidden">
              <SvgIcon
                inheritViewBox
                component={YellowArrow}
                className="absolute hidden xl:block"
                sx={{
                  fontSize: 90,
                  top: 200,
                  left: "20%",
                }}
                color="primary"
              />
              <SvgIcon
                inheritViewBox
                component={StarIcon}
                className="absolute left-0 hidden xl:block text-transparent"
                sx={{
                  fontSize: 430,
                  top: 400,
                }}
              />
            </div>
          )}
        </div>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </>
  );
};

export default GeneralLayout;
