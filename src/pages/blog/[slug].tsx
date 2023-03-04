// Importing necessary modules/components/libraries
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

// Defining the links to be used in the navigation bar
const links = [
  { title: "Home", href: routes.home.url },
  { title: "About Us", href: routes.aboutUs.url },
  { title: "Blog", href: routes.blog.url },
  { title: "FAQ", href: routes.FAQs.url },
];

const BlogPost = () => {
  //? Getting the URL query object from next.js router
  const { query } = useRouter();

  //? Using a custom hook to fetch data using React Query
  const { getWeblog } = useWeblogApi(); // Fetch API function from custom hook

  const { data, isLoading } = useQuery(
    ["weblog", query.slug], //? Query key - unique identifier for the query
    () => getWeblog(`${query.slug}`), //? Function to perform the actual fetching, it takes current slug of the blog post as an argument and returns the API call
    {
      onError: (err) => {
        errorHandler(err); //? Global error handling function defined externally
      },
    }
  );

  return (
    <>
      <Head>
        <title>Albantsho || {data?.weblog.title}</title>
        <meta
          name="description"
          content={`weblog about ${data?.weblog.title}`}
        ></meta>
        <meta property="og:title" content={`${data?.weblog.title}`}></meta>
        <meta
          property="og:description"
          content={`${data?.weblog.description}`}
        ></meta>
        <meta
          property="og:url"
          content={`www.albantsho.com/blog/${data?.weblog.title}`}
        ></meta>
      </Head>
      <Nav links={links} secondaryUnderLineColor={false} />
      {!isLoading && data ? ( // Checking if data has loaded
        <>
          <Image
            src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${data.weblog.media}`} //? Concatenating public API URL with the image url from the fetched data
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
              {/* Using html-react-parser library to render the blog's content which is in HTML format */}
            </article>
          </div>
        </>
      ) : (
        <Loader /> //* If data is still loading, displaying a loading spinner/loader
      )}
      <Footer />
    </>
  );
};

export default BlogPost; // Exporting the component by default
