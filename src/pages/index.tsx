import React from 'react';

import GlowCard from '@/components/card/GlowCard';
import { getLayout } from '@/components/layout/MainLayout';
import ArrowLink from '@/components/links/ArrowLink';
import UnstyledLink from '@/components/links/UnstyledLink';
import HomeSeo from '@/components/seo/HomeSeo';

import cards from '@/content/cards';

import SvgVercel from '~/svg/vercel.svg';

function HomePage() {
  return (
    <>
      <HomeSeo />
      <section>
        <div className="layout flex-center flex-col text-center">
          <div className="my-36 flex flex-col items-center space-y-4">
            <SvgVercel className="h-16 w-16 text-5xl" />
            <h1 className="mt-4">
              Next.js + Tailwind CSS + TypeScript Starter
            </h1>
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
        </div>
        <div className="layout flex-center mb-36 flex-col text-center">
          <div id="cards" className="flex max-w-[916px] flex-wrap gap-[8px]">
            {cards.map((card) => (
              <GlowCard key={card.title} {...card} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

HomePage.getLayout = getLayout;

export default HomePage;
