import { ToastContainer } from 'react-toastify';
import { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import { ThemeProvider } from 'next-themes';

import '@/styles/globals.css';
import 'react-toastify/dist/ReactToastify.css';
// !STARTERCONF This is for demo purposes, remove @/styles/colors.css import immediately
import '@/styles/colors.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <ThemeProvider defaultTheme="light" attribute="data-theme">
        <Component {...pageProps} />
        <ToastContainer
          position="bottom-right"
          autoClose={8000}
          hideProgressBar={false}
          newestOnTop={false}
          rtl={false}
          draggable
          closeOnClick
          pauseOnFocusLoss
          pauseOnHover
        />
      </ThemeProvider>
    </SessionProvider>
  );
}

export default MyApp;
