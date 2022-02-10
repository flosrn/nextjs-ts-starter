import React from 'react';

import AsideMenu from '@/components/navigation/asidemenu/AsideMenu';

import Header from './Header';
import MainLayout from './MainLayout';

const UserAccountLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className="mx-auto max-w-7xl pb-10 lg:py-12 lg:px-8">
      <div className="lg:grid lg:grid-cols-12 lg:gap-x-5">
        <AsideMenu />
        <div className="sm:px-6 lg:col-span-9 lg:px-0">{children}</div>
      </div>
    </div>
  );
};

export const getLayout = (page: React.ReactElement) => (
  <MainLayout>
    <UserAccountLayout>{page}</UserAccountLayout>
  </MainLayout>
);

export default UserAccountLayout;
