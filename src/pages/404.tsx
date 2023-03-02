import Nav from "@shared/Nav/Nav";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import routes from "routes/routes";

const links = [
  { title: "Home", href: routes.home.url },
  { title: "About Us", href: routes.aboutUs.url },
  { title: "Blog", href: routes.blog.url },
  { title: "FAQ", href: routes.FAQs.url },
];

const NotfoundPage = () => {
  return (
    <>
      <Head>
        <title>Albantsho || 404</title>
      </Head>
      <main className="min-h-screen w-full">
        <Nav position="static" links={links} secondaryUnderLineColor={false} />
        <div className="w-full h-full flex items-center justify-center">
          <Image
            src="/assets/images/404.webp"
            width={5200}
            height={3467}
            priority
            alt="404 image"
          />
        </div>
      </main>
    </>
  );
};

export default NotfoundPage;
