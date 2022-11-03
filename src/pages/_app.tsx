import { CacheProvider, type EmotionCache } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import AOS from "aos";
import "aos/dist/aos.css";
import { Provider, useCreateStore } from "app/user.store";
import type { NextPage } from "next";
import NextProgress from "next-progress";
import { AppProps } from "next/app";
import { useEffect } from "react";
import "styles/globals.css";
import theme from "styles/themes/theme";
import createEmotionCache from "utils/create-emotion-cache";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
  const createStore = useCreateStore(pageProps.initialZustandState);

  useEffect(() => {
    AOS.init();
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
        <Provider createStore={createStore}>
          {getLayout(<Component {...pageProps} />)}
        </Provider>
        <ToastContainer />
      </ThemeProvider>
    </CacheProvider>
  );
}
