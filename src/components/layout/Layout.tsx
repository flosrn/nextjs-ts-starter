import React from 'react';

import Header from '@/components/layout/Header';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Put Header or Footer Here
  return (
    <div className="bg-tw-background text-tw-primary transition-colors duration-500">
      <Header />
      {children}
    </div>
  );
};

export default Layout;
