import React from 'react';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Put Header or Footer Here
  return <div className='bg-tw-background text-tw-primary'>{children}</div>;
};

export default Layout;
