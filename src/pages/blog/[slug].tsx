import { Typography } from "@mui/material";
import Footer from "@shared/Footer/Footer";
import Loader from "@shared/Loader/Loader";
import Nav from "@shared/Nav/Nav";
import useWeblogApi from "apis/Weblog.api";
import parse from "html-react-parser";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import routes from "routes/routes";
import errorHandler from "utils/error-handler";

const links = [
  { title: "Home", href: routes.home.url },
  { title: "About Us", href: routes.aboutUs.url },
  { title: "Blog", href: routes.blog.url },
  { title: "FAQ", href: routes.FAQs.url },
];

const BlogPost = () => {
  const { query } = useRouter();
  const { getWeblog } = useWeblogApi();

  const { data, isLoading } = useQuery(
    ["weblog", query.slug],
    () => getWeblog(`${query.slug}`),
    {
      onError: (err) => {
        errorHandler(err);
        console.log(err);
      },
    }
  );

  return (
    <>
      <Head>
        <title>Albantsho || {data?.weblog.title}</title>
      </Head>
      <Nav links={links} secondaryUnderLineColor={false} />
      {!isLoading && data ? (
        <>
          <Image
            src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${data.weblog.media}`}
            alt={data.weblog.title}
            width={1920}
            height={500}
            className="object-cover object-center max-h-[500px]"
          />
          <div className="py-6 md:py-14 max-w-screen-lg mx-auto px-5 sm:px-10">
            <Typography
              variant="h3"
              className="leading-normal mb-2 md:mb-14 md:text-center"
              color="primary.main"
            >
              {data.weblog.title}
            </Typography>
            <article className="prose-img:block prose-img:w-full prose-img:ml-auto prose-img:mr-auto">
              {data.weblog.content && parse(data.weblog.content)}
            </article>
          </div>
        </>
      ) : (
        <Loader />
      )}
      <Footer />
    </>
  );
};

export default BlogPost;
