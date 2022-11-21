import React from 'react';

import UnderlineLink from '@/components/links/UnderlineLink';
import Navbar from '@/components/navigation/navbar/Navbar';

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <footer className="flex-center w-full border-t border-gray-200 border-white/10 px-2 py-2.5 sm:px-4">
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
