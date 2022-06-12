import React from 'react';

import { getLayout } from '@/components/layout/MainLayout';
import ArrowLink from '@/components/links/ArrowLink';
import ButtonLink from '@/components/links/ButtonLink';
import UnderlineLink from '@/components/links/UnderlineLink';
import UnstyledLink from '@/components/links/UnstyledLink';
import Seo from '@/components/Seo';

import Vercel from '~/svg/Vercel.svg';

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

function HomePage() {
  return (
    <>
      <Seo title="Home" />

      <main>
        <section>
          <div className="layout flex min-h-screen flex-col items-center justify-center text-center">
            <Vercel className="h-16 w-16 text-5xl" />
            <h1 className="mt-4">
              Next.js + Tailwind CSS + TypeScript Starter
            </h1>
            <p className="mt-2 text-sm text-tw-primary-dark">
              A starter for Next.js, Tailwind CSS, and TypeScript with Absolute
              Import, Seo, Link component, pre-configured with Husky{' '}
            </p>
            <p className="mt-2 text-sm text-tw-primary-medium">
              <ArrowLink href="https://github.com/flosrn/nextjs-ts-starter">
                See the repository
              </ArrowLink>
            </p>

            <ButtonLink className="mt-6" href="/components" variant="light">
              See all components
            </ButtonLink>

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
            <footer className="absolute bottom-2">
              © {new Date().getFullYear()} By{' '}
              <UnderlineLink href="https://flosrn.com?ref=next-ts-starter">
                Flosrn
              </UnderlineLink>
            </footer>
          </div>
        </section>
      </main>
    </>
  );
}

HomePage.getLayout = getLayout;

export default HomePage;
