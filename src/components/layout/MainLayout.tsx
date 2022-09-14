import React from 'react';

import UnderlineLink from '@/components/links/UnderlineLink';
import Navbar from '@/components/navigation/navbar/Navbar';

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <footer className="fixed left-1/2 bottom-2 -translate-x-1/2">
        © {new Date().getFullYear()}, made with ❤️ and with ☕️ by{' '}
        <UnderlineLink href="https://flosrn.com?ref=next-ts-starter">
          Flosrn
        </UnderlineLink>
      </footer>
    </>
  );
};

export const getLayout = (page: React.ReactElement) => (
  <MainLayout>{page}</MainLayout>
);

export default MainLayout;
