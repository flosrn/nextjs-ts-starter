import React from 'react';

import Navbar from '@/components/navigation/navbar/Navbar';

import Header from './Header';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Put Header or Footer Here
  return (
    <div className="bg-tw-background text-tw-primary transition-colors duration-500">
      <Navbar />
      {/*<Header />*/}
      {children}
    </div>
  );
};

export default Layout;
