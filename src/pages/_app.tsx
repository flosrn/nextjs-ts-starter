import type { ReactElement, ReactNode } from 'react';
import { NextPage } from 'next';
import { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import { ThemeProvider } from 'next-themes';

import localFont from '@next/font/local';
import { SWRConfig } from 'swr';

import swrConfig from '@/config';

const SFProDisplayFont = localFont({
  src: '../../public/fonts/sf-pro-display-medium.woff2',
  variable: '--font-SFProDisplay',
});

import '@/styles/globals.css';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  const layout = getLayout(<Component {...pageProps} />);

  return (
    <SessionProvider session={session}>
      <ThemeProvider attribute="class">
        <SWRConfig value={swrConfig}>
          <style jsx global>{`
            html {
              font-family: ${SFProDisplayFont.style.fontFamily};
            }
          `}</style>
          {layout}
        </SWRConfig>
      </ThemeProvider>
    </SessionProvider>
  );
}

export default MyApp;
