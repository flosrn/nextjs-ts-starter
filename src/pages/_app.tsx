import type { ReactElement, ReactNode } from 'react';
import { NextPage } from 'next';
import { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';

import { Flowbite } from 'flowbite-react';
import { SWRConfig } from 'swr';

import swrConfig from '@/config';
import theme from '@/theme';

import '@/styles/globals.css';
import '@/styles/colors.css';

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
      <Flowbite theme={theme}>
        <SWRConfig value={swrConfig}>{layout}</SWRConfig>
      </Flowbite>
    </SessionProvider>
  );
}

export default MyApp;
