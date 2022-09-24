import Footer from "@shared/Footer/Footer";
import React from "react";
import Nav from "../GeneralLayout/Nav/Nav";
import ImageSection from "./ImageSection/ImageSection";

interface IProps {
  children: React.ReactNode;
}

const IDraftLayout = ({ children }: IProps) => {
  return (
    <main className="flex flex-col">
      <Nav color="inherit" position="static" />
      <ImageSection />
      {children}
      <Footer />
    </main>
  );
};

export default IDraftLayout;
