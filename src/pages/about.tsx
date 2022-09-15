import React from 'react';

import { getLayout } from '@/components/layout/MainLayout';
import Seo from '@/components/seo/Seo';

function AboutPage() {
  return (
    <>
      <Seo title="About" />
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
