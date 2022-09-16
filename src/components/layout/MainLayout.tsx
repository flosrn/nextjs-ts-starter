import React from 'react';

import UnderlineLink from '@/components/links/UnderlineLink';
import Navbar from '@/components/navigation/navbar/Navbar';

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <footer className="flex-center fixed left-1/2 bottom-0 left-0 z-20 w-full -translate-x-1/2 border-t border-gray-200 bg-white px-2 py-2.5 dark:border-gray-600 dark:bg-gray-900 sm:px-4">
        <p className="text-xs">
          © {new Date().getFullYear()}, made with ❤️ and with ☕️ by{' '}
          <UnderlineLink href="https://github.com/flosrn">flosrn</UnderlineLink>
        </p>
      </footer>
    </>
  );
};

export const getLayout = (page: React.ReactElement) => (
  <MainLayout>{page}</MainLayout>
);

export default MainLayout;
