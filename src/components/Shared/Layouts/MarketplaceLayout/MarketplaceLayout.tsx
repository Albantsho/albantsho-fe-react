import Footer from "@shared/Footer/Footer";
import React, { Suspense } from "react";
import Nav from "../GeneralLayout/Nav/Nav";
import HeroSection from "./HeroSection/HeroSection";

interface IProps {
  children: React.ReactNode;
  description: string;
}

const MarketplaceLayout = ({ children, description }: IProps) => {
  return (
    <>
      <Nav color="inherit" />
      <main>
        <HeroSection description={description} />
        {children}
      </main>
      <Suspense fallback={null}>
        <Footer  />
      </Suspense>
    </>
  );
};

export default MarketplaceLayout;
