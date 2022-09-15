import React from 'react';

import { getLayout } from '@/components/layout/MainLayout';
import HomeSeo from '@/components/seo/HomeSeo';

function AboutPage() {
  return (
    <>
      <HomeSeo />
      <section>
        <div className="layout flex-center min-h-screen flex-col text-center">
          About page
        </div>
      </section>
    </>
  );
}

AboutPage.getLayout = getLayout;

export default AboutPage;
