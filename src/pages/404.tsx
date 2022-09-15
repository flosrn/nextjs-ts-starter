import React from 'react';

import { RiAlarmWarningFill } from 'react-icons/ri';

import MainLayout from '@/components/layout/MainLayout';
import ArrowLink from '@/components/links/ArrowLink';
import Seo from '@/components/seo/Seo';

function NotFoundPage() {
  return (
    <MainLayout>
      <Seo title="Not Found" />

      <section>
        <div className="layout flex-center min-h-screen flex-col text-center">
          <RiAlarmWarningFill
            size={60}
            className="drop-shadow-glow animate-flicker text-red-500"
          />
          <h1 className="mt-8 text-4xl md:text-6xl">Page Not Found</h1>
          <ArrowLink className="mt-4 md:text-lg" href="/">
            Back to Home
          </ArrowLink>
        </div>
      </section>
    </MainLayout>
  );
}

export default NotFoundPage;
