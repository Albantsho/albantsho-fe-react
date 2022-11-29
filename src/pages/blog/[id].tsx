import { Typography } from "@mui/material";
import Footer from "@shared/Footer/Footer";
import Nav from "@shared/Layouts/GeneralLayout/Nav/Nav";
import useWeblogApi from "apis/Weblog.api";
import { IWeblog } from "interfaces/weblog";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { DotLoader } from "react-spinners";
import errorHandler from "utils/error-handler";
import parse from "html-react-parser";

const BlogPost = () => {
  const { query } = useRouter();
  const { getWeblog } = useWeblogApi();
  const [oneWeblog, setOneWeblog] = useState<IWeblog | null>(null);

  useEffect(() => {
    async function getOneWeblogFunc() {
      try {
        if (query.id !== undefined) {
          const res = await getWeblog(query.id);
          setOneWeblog(res.data.weblog);
        }
      } catch (error) {
        errorHandler(error);
      }
    }

    getOneWeblogFunc();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query.id]);

  return (
    <>
      <Head>
        <title>Albantsho || {oneWeblog?.title}</title>
      </Head>
      <Nav color="inherit" position="static" />
      {oneWeblog === null ? (
        <div className="min-h-screen flex items-center justify-center">
          <DotLoader color="#7953B5" className="mx-auto mt-10" />
        </div>
      ) : (
        <>
          <Image
            src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${oneWeblog.media}`}
            alt={oneWeblog.title}
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
              {oneWeblog.title}
            </Typography>
            <article className="prose-img:block prose-img:w-full prose-img:ml-auto prose-img:mr-auto">
              {oneWeblog.content && parse(oneWeblog.content)}
            </article>
          </div>
        </>
      )}
      <Footer />
    </>
  );
};

export default BlogPost;
