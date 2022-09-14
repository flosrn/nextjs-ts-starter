import React from 'react';

import { getLayout } from '@/components/layout/MainLayout';
import Seo from '@/components/Seo';

function AboutPage() {
  return (
    <>
      <Seo title="About" />

      <section>
        <div className="layout -mt-16 flex min-h-screen flex-col items-center justify-center text-center">
          About page
        </div>
      </section>
    </>
  );
}

AboutPage.getLayout = getLayout;

export default AboutPage;
