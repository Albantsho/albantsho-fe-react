import Nav from "@shared/Nav/Nav";
import Head from "next/head";
import Image from "next/image";
import routes from "routes/routes";

const links = [
  { title: "Home", href: routes.home.url },
  { title: "About Us", href: routes.aboutUs.url },
  { title: "Blog", href: routes.blog.url },
  { title: "FAQ", href: routes.FAQs.url },
];

const ServerErrorPage = () => {
  return (
    <>
      <Head>
        <title>Albantsho || 500</title>
      </Head>
      <main className="min-h-screen w-full">
        <Nav
          className="shadow-primary"
          position="static"
          links={links}
          secondaryUnderLineColor={false}
        />
        <div className="w-full h-full flex items-center justify-center">
          <Image
            src="/assets/images/500.webp"
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

export default ServerErrorPage;
