import { Typography } from "@mui/material";
import Footer from "@shared/Footer/Footer";
import Nav from "@shared/Layouts/GeneralLayout/Nav/Nav";
import useWeblogApi from "apis/Weblog.api";
import parse from "html-react-parser";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import { DotLoader } from "react-spinners";
import errorHandler from "utils/error-handler";

const BlogPost = () => {
  const { query } = useRouter();
  const { getWeblog } = useWeblogApi();

  const { data, isLoading } = useQuery(
    ["weblog", query.slug],
    () => getWeblog(`${query.slug}`),
    {
      onError: (err) => {
        errorHandler(err);
      },
    }
  );

  return (
    <>
      <Head>
        <title>Albantsho || {data?.weblog.title}</title>
      </Head>
      <Nav color="inherit" position="static" />
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
        <div className="min-h-screen flex items-center justify-center">
          <DotLoader color="#7953B5" className="mx-auto mt-10" />
        </div>
      )}
      <Footer />
    </>
  );
};

export default BlogPost;
