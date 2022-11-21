import React from 'react';

import { getLayout } from '@/components/layout/MainLayout';
import Seo from '@/components/seo/Seo';

function AboutPage() {
  return (
    <>
      <Seo title="About" />
      <main>
        <div className="flex-center mb-36 min-h-screen flex-col text-center">
          About page
        </div>
      </main>
    </>
  );
}

AboutPage.getLayout = getLayout;

export default AboutPage;
