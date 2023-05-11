//? Importing required modules and libraries
import Nav from "@shared/Nav/Nav"; //? Navigation bar component
import Head from "next/head"; //? Page head element component for metadata & title
import Image from "next/image"; //? Next.js optimized image component
import routes from "utils/routes"; //? Collection of routes

//? Array of links to be shown on the nav bar component
const links = [
  { title: "Home", href: routes.home.url },
  { title: "About Us", href: routes.aboutUs.url },
  { title: "Blog", href: routes.blog.url },
  { title: "FAQ", href: routes.FAQs.url },
];

//? NotfoundPage component
const NotfoundPage = () => {
  return (
    <>
      <Head>
        {/* Setting page title */}
        <title>Albantsho || 404</title>
      </Head>
      <main className="min-h-screen w-full">
        {/* Rendering navigation component with passed props */}
        <Nav
          className="shadow-primary"
          position="static"
          links={links}
          secondaryUnderLineColor={false}
        />
        <div className="w-full h-full flex items-center justify-center">
          {/* Next.js optimized image component */}
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

export default NotfoundPage; //? Exporting NotfoundPage component for external
