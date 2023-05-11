import Nav from "@shared/Nav/Nav";
import dynamic from "next/dynamic";
import React, { Suspense } from "react";
import routes from "utils/routes";
import ImageSection from "./ImageSection/ImageSection";

const Footer = dynamic(() => import("@shared/Footer/Footer"));

interface IProps {
  children: React.ReactNode;
}

const links = [
  { title: "Home", href: routes.home.url },
  { title: "About Us", href: routes.aboutUs.url },
  { title: "Blog", href: routes.blog.url },
  { title: "FAQ", href: routes.FAQs.url },
];

const IDraftLayout = ({ children }: IProps) => {
  return (
    <main className="flex flex-col">
      <Nav links={links} secondaryUnderLineColor position="static" />
      <ImageSection />
      {children}
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </main>
  );
};

export default IDraftLayout;
