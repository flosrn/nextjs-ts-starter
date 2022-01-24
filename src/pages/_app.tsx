import { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';

import { FronteggProvider } from '@frontegg/nextjs';

import '@/styles/globals.css';
// !STARTERCONF This is for demo purposes, remove @/styles/colors.css import immediately
import '@/styles/colors.css';

import Layout from '@/components/layout/Layout';

const contextOptions = {
  baseUrl: 'https://app-3ahtwd0m9jk9.frontegg.com', // Your backend base URL (frontegg will direct the requests to it)
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider defaultTheme="light" attribute="data-theme">
      <FronteggProvider contextOptions={contextOptions}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </FronteggProvider>
    </ThemeProvider>
  );
}

export default MyApp;
