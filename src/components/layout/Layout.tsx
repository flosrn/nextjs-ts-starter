import React from 'react';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="bg-tw-background text-tw-primary transition-colors duration-500">
      {children}
    </div>
  );
};

export default Layout;
