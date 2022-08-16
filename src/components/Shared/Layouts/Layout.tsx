import Nav from "@shared/Nav/Nav";
import dynamic from "next/dynamic";
import { Suspense } from "react";

interface IProps {
  children: React.ReactNode;
}

const Footer = dynamic(() => import("@shared/Footer/Footer"));

const Layout = ({ children }: IProps) => {
  return (
    <>
      <Nav />
      <main>{children}</main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </>
  );
};

export default Layout;
