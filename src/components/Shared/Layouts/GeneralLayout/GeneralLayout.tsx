import GreenArrow from "@assets/icons/green-arrow.svg";
import StarIcon from "@assets/icons/star.svg";
import YellowArrow from "@assets/icons/yellow-arrow.svg";
import { Icon } from "@mui/material";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import HeroSection from "./HeroSection/HeroSection";
import Nav from "./Nav/Nav";

interface IProps {
  children: React.ReactNode;
  title: string;
  hideBg?: boolean;
}

const Footer = dynamic(() => import("@shared/Footer/Footer"));

const GeneralLayout = ({ children, title, hideBg }: IProps) => {
  return (
    <>
      <Nav />
      <main>
        <HeroSection title={title} />
        <div className="flex justify-center">
          {!hideBg && (
            <div className="flex-1 relative hidden xl:block overflow-hidden">
              <Icon
                className="absolute"
                sx={{
                  rotate: "-120deg",
                  top: 50,
                  right: "10%",
                  fontSize: 60,
                }}
              >
                <GreenArrow />
              </Icon>
              <Icon
                className="absolute hidden xl:block"
                sx={{ fontSize: 115, top: 250, right: "5%" }}
              >
                <StarIcon />
              </Icon>
            </div>
          )}
          {children}
          {!hideBg && (
            <div className="flex-1 relative hidden xl:block overflow-hidden">
              <Icon
                className="absolute hidden xl:block"
                sx={{
                  fontSize: 90,
                  top: 200,
                  left: "20%",
                  "svg path": { fill: "#7953B5 !important" },
                }}
              >
                <YellowArrow />
              </Icon>
              <Icon
                className="absolute left-0 hidden xl:block"
                sx={{
                  fontSize: 430,
                  top: 400,
                }}
              >
                <StarIcon />
              </Icon>
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
