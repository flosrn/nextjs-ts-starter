import React from 'react';

import { getLayout } from '@/components/layout/MainLayout';
import Seo from '@/components/seo/Seo';

function PortfolioPage() {
  return (
    <>
      <Seo title="Portfolio" />
      <section>
        <div className="layout flex-center min-h-screen flex-col text-center"></div>
      </section>
    </>
  );
}

PortfolioPage.getLayout = getLayout;

export default PortfolioPage;
