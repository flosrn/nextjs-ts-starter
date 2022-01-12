import { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';

import '@/styles/globals.css';
// !STARTERCONF This is for demo purposes, remove @/styles/colors.css import immediately
import '@/styles/colors.css';

import Layout from '@/components/layout/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider defaultTheme='light' attribute='data-theme'>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
