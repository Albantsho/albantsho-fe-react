import { CacheProvider, type EmotionCache } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import AOS from "aos";
import "aos/dist/aos.css";
import type { NextPage } from "next";
import NextProgress from "next-progress";
import { AppProps } from "next/app";
import { useEffect, useState } from "react";
import "styles/globals.css";
import theme from "styles/themes/theme";
import createEmotionCache from "utils/create-emotion-cache";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { DotLoader } from "react-spinners";

const clientSideEmotionCache = createEmotionCache();

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: React.ReactElement) => React.ReactNode;
};
interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
  Component: NextPageWithLayout;
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const getLayout = Component.getLayout ?? ((page) => page);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    AOS.init();
    setIsLoading(false);
  }, []);

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <NextProgress
          delay={100}
          color="#FDD038"
          height="3px"
          options={{ showSpinner: false }}
        />
        {isLoading ? (
          <div className="min-h-screen flex items-center">
            <DotLoader color="#7953B5" className="mx-auto mt-10" />
          </div>
        ) : (
          getLayout(<Component {...pageProps} />)
        )}
        <ToastContainer />
      </ThemeProvider>
    </CacheProvider>
  );
}
