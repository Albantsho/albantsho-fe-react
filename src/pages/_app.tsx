import { CacheProvider, type EmotionCache } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import AOS from "aos";
import "aos/dist/aos.css";
import Authorization from "components/Authorization/Authorization";
import type { NextPage } from "next";
import NextProgress from "next-progress";
import { AppProps } from "next/app";
import "normalize.css";
import { useEffect, useState } from "react";
import { QueryClientProvider, QueryClient } from "react-query";
import "styles/globals.css";
import theme from "styles/themes/theme";
import createEmotionCache from "utils/create-emotion-cache";
import { ReactQueryDevtools } from "react-query/devtools";
import { Toaster } from "react-hot-toast";
import Loader from "@shared/Loader/Loader";
import Script from "next/script";

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

  const [queryClient] = useState(() => new QueryClient());

  useEffect(() => {
    AOS.init();
    setIsLoading(false);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <CacheProvider value={emotionCache}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <NextProgress
            delay={100}
            color="#FDD038"
            height="3px"
            options={{ showSpinner: false }}
          />
          <Authorization>
            <Script
              src="https://www.googletagmanager.com/gtag/js?id=G-35SD81MYSZ"
              strategy="afterInteractive"
            />
            <Script id="google-tag-manager" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', 'G-35SD81MYSZ');`}
            </Script>
            <Script id="hotjar-tracking" strategy="afterInteractive">
              {`(function(h,o,t,j,a,r){
                h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                h._hjSettings={hjid:3410388,hjsv:6};
                a=o.getElementsByTagName('head')[0];
                r=o.createElement('script');r.async=1;
                r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                a.appendChild(r);
                })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`}
            </Script>

            {isLoading ? <Loader /> : getLayout(<Component {...pageProps} />)}
          </Authorization>
          <Toaster />
        </ThemeProvider>
      </CacheProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
