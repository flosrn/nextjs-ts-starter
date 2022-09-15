import React from 'react';

import { getLayout } from '@/components/layout/MainLayout';
import ArrowLink from '@/components/links/ArrowLink';
import UnstyledLink from '@/components/links/UnstyledLink';
import Seo from '@/components/seo/Seo';

import SvgVercel from '~/svg/vercel.svg';

function HomePage() {
  return (
    <>
      <Seo title="Home" />
      <section>
        <div className="layout flex-center min-h-screen flex-col text-center">
          <SvgVercel className="h-16 w-16 text-5xl" />
          <h1 className="mt-4">Next.js + Tailwind CSS + TypeScript Starter</h1>
          <p className="mt-2 text-sm text-tw-primary-dark">
            A minimal template for Next.js, Tailwind CSS, and TypeScript with
            NextAuth authentication, Seo, and more{' '}
          </p>
          <p className="mt-2 text-sm text-tw-primary-medium">
            <ArrowLink href="https://github.com/flosrn/nextjs-ts-starter">
              See the repository
            </ArrowLink>
          </p>

          <UnstyledLink
            href="https://vercel.com/new/clone?repository-url=https://github.com/flosrn/nextjs-ts-starter"
            className="mt-4"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              width="92"
              height="32"
              src="https://vercel.com/button"
              alt="Deploy with Vercel"
            />
          </UnstyledLink>
        </div>
      </section>
    </>
  );
}

HomePage.getLayout = getLayout;

export default HomePage;
