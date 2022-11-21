import React from 'react';

import GlowCard from '@/components/card/GlowCard';
import { getLayout } from '@/components/layout/MainLayout';
import ArrowLink from '@/components/links/ArrowLink';
import UnstyledLink from '@/components/links/UnstyledLink';
import HomeSeo from '@/components/seo/HomeSeo';

import cards from '@/content/cards';

import SvgLogo from '~/svg/logo.svg';
import SvgNextjstwts from '~/svg/nextjstwts.svg';

function HomePage() {
  return (
    <>
      <HomeSeo />
      <main className="bg-radial-gradient">
        <div className="container">
          <div className="flex-center relative flex-col text-center">
            <div className="relative z-10 mt-24 flex flex-col items-center">
              <SvgLogo className="h-24 w-24" />
              <SvgNextjstwts className="ml-2 mt-6 h-16 fill-current" />
              <h1 className="mt-20 text-6xl font-bold">
                Next.js + Tailwind CSS + TypeScript Starter
              </h1>
              <p className="text-gradient letter mt-8 text-3xl font-bold tracking-wider">
                Meet the new standard for modern software development.
              </p>
              <p className="text-tw-primary-medium mt-6 text-sm">
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
            <div className="z-1 flex-center relative mt-16">
              <div className="max-w-[600px]">
                <p className="text-[rgb(208, 214, 224)] text-center text-[18px] leading-[1.7]">
                  With its meticulous design, the breathtaking speed of Next.js
                  13 and the opinionated way of building websites with Tailwind
                  CSS, this starter is the perfect starting point for your next
                  project.
                </p>
              </div>
            </div>
          </div>
          <div className="layout flex-center mt-12 flex-col text-center">
            <div
              id="cards"
              className="grid w-full max-w-[916px] grid-cols-1 gap-[8px] px-10 sm:grid-cols-2 md:grid-cols-3"
            >
              {cards.map((card) => (
                <GlowCard key={card.title} {...card} />
              ))}
            </div>
          </div>
          <div className="flex-center mt-8 mb-16">
            <div className="max-w-[600px]">
              <p className="text-[rgb(208, 214, 224)] text-center text-[18px] leading-[1.7]">
                <span className="text-gradient">Nextjstwts</span>{' '}
                {`increase your
                developer experience as never before and unleashes your workflow
                to it's full potential.`}
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

HomePage.getLayout = getLayout;

export default HomePage;
