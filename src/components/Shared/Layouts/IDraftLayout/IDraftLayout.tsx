import dynamic from "next/dynamic";
import React, { Suspense } from "react";
import Nav from "../GeneralLayout/Nav/Nav";
import ImageSection from "./ImageSection/ImageSection";

const Footer = dynamic(() => import("@shared/Footer/Footer"));

interface IProps {
  children: React.ReactNode;
}

const IDraftLayout = ({ children }: IProps) => {
  return (
    <main className="flex flex-col">
      <Nav color="inherit" position="static" />
      <ImageSection />
      {children}
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </main>
  );
};

export default IDraftLayout;
