import Nav from "@shared/Nav/Nav";
import dynamic from "next/dynamic";
import React, { Suspense } from "react";
import routes from "routes/routes";
import HeroSection from "./HeroSection/HeroSection";

const Footer = dynamic(() => import("@shared/Footer/Footer"));

interface IProps {
  children: React.ReactNode;
  description: string;
}

const links = [
  { title: "Home", href: routes.home.url },
  { title: "Story base", href: routes.marketplace.url },
  { title: "Blog", href: routes.blog.url },
];

const MarketplaceLayout = ({ children, description }: IProps) => {
  return (
    <>
      <Nav links={links} secondaryUnderLineColor={false} />
      <main>
        <HeroSection description={description} />
        {children}
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </>
  );
};

export default MarketplaceLayout;
