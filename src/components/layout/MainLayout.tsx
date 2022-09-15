import React from 'react';

import UnderlineLink from '@/components/links/UnderlineLink';
import Navbar from '@/components/navigation/navbar/Navbar';

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <footer className="flex-center fixed left-1/2 bottom-2 w-full -translate-x-1/2">
        <p>
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
