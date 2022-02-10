import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

import Button from '@/components/buttons/Button';
import SwitchThemeButton from '@/components/buttons/SwitchThemeButton';
import MainLayout from '@/components/layout/MainLayout';
import ArrowLink from '@/components/links/ArrowLink';
import ButtonLink from '@/components/links/ButtonLink';
import PrimaryLink from '@/components/links/PrimaryLink';
import UnderlineLink from '@/components/links/UnderlineLink';
import UnstyledLink from '@/components/links/UnstyledLink';
import NextImage from '@/components/NextImage';
import Select from '@/components/select/Select';
import Seo from '@/components/Seo';

function ComponentsPage() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  const mode = theme?.split(' ')[0] || theme;
  const accentColor = theme?.split(' ')[1] || 'blue';
  const isDarkMode = mode === 'dark';

  // When mounted on client, now we can show the UI
  // useEffect(() => setMounted(true), []);
  //
  // if (!mounted) return null;

  const handleTheme = () => {
    setTheme(isDarkMode ? `light ${accentColor}` : `dark ${accentColor}`);
  };

  const handleAccentColor = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setTheme(`${mode} ${event.target.value as typeof colorList[number]}`);
  };

  return (
    <MainLayout>
      <Seo
        templateTitle="Components"
        description="Pre-built components with awesome default"
      />

      <main>
        <section>
          <div className="layout min-h-screen py-20">
            <h1>Built-in Components</h1>
            <ArrowLink direction="left" className="mt-2" href="/">
              Back to Home
            </ArrowLink>

            <div className="mt-8 flex flex-wrap gap-2">
              <Button
                onClick={handleTheme}
                variant={isDarkMode ? 'light' : 'dark'}
                className="!py-0"
              >
                Set to {isDarkMode ? 'light' : 'dark'}
                <SwitchThemeButton mode={mode} />
              </Button>
            </div>

            <ol className="mt-8 space-y-6">
              <li className="space-y-2">
                <h2 className="text-lg md:text-xl">Customize Colors</h2>
                <p className="!mt-1 text-sm">
                  You can change primary color to any Tailwind CSS colors. See
                  globals.css to change your color.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Select
                    itemsList={colorList}
                    value={accentColor}
                    selectHandler={handleAccentColor}
                  />
                  <ButtonLink href="https://github.com/flosrn/nextjs-ts-starter/blob/master/src/styles/colors.css">
                    Check list of colors
                  </ButtonLink>
                </div>
                <div className="flex flex-wrap gap-2 text-xs font-medium">
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-primary-50 text-black">
                    50
                  </div>
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-primary-100 text-black">
                    100
                  </div>
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-primary-200 text-black">
                    200
                  </div>
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-primary-300 text-black">
                    300
                  </div>
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-primary-400 text-black">
                    400
                  </div>
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-primary-500 text-black">
                    500
                  </div>
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-primary-600 text-white">
                    600
                  </div>
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-primary-700 text-white">
                    700
                  </div>
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-primary-800 text-white">
                    800
                  </div>
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-primary-900 text-white">
                    900
                  </div>
                </div>
              </li>
              <li className="space-y-2">
                <h2 className="text-lg md:text-xl">UnstyledLink</h2>
                <p className="!mt-1 text-sm">
                  No style applied, differentiate internal and outside links,
                  give custom cursor for outside links.
                </p>
                <div className="space-x-2">
                  <UnstyledLink href="/">Internal Links</UnstyledLink>
                  <UnstyledLink href="https://flosrn.com">
                    Outside Links
                  </UnstyledLink>
                </div>
              </li>
              <li className="space-y-2">
                <h2 className="text-lg md:text-xl">PrimaryLink</h2>
                <p className="!mt-1 text-sm">
                  Add styling on top of UnstyledLink, giving a primary color to
                  the link.
                </p>
                <div className="space-x-2">
                  <PrimaryLink href="/">Internal Links</PrimaryLink>
                  <PrimaryLink href="https://flosrn.com">
                    Outside Links
                  </PrimaryLink>
                </div>
              </li>
              <li className="space-y-2">
                <h2 className="text-lg md:text-xl">UnderlineLink</h2>
                <p className="!mt-1 text-sm">
                  Add styling on top of UnstyledLink, giving a dotted and
                  animated underline.
                </p>
                <div className="space-x-2">
                  <UnderlineLink href="/">Internal Links</UnderlineLink>
                  <UnderlineLink href="https://flosrn.com">
                    Outside Links
                  </UnderlineLink>
                </div>
              </li>
              <li className="space-y-2">
                <h2 className="text-lg md:text-xl">ArrowLink</h2>
                <p className="!mt-1 text-sm">
                  Useful for indicating navigation, I use this quite a lot, so
                  why not build a component with some whimsy touch?
                </p>
                <div className="flex flex-wrap items-center gap-4">
                  <ArrowLink href="/" direction="left">
                    Direction Left
                  </ArrowLink>
                  <ArrowLink href="/">Direction Right</ArrowLink>
                  <ArrowLink
                    as={UnstyledLink}
                    className="inline-flex items-center"
                    href="/"
                  >
                    Polymorphic
                  </ArrowLink>
                  <ArrowLink
                    as={ButtonLink}
                    variant="light"
                    className="inline-flex items-center"
                    href="/"
                  >
                    Polymorphic
                  </ArrowLink>
                </div>
              </li>
              <li className="space-y-2">
                <h2 className="text-lg md:text-xl">ButtonLink</h2>
                <p className="!mt-1 text-sm">
                  Button styled link with 3 variants.
                </p>
                <div className="flex flex-wrap gap-2">
                  <ButtonLink variant="primary" href="https://flosrn.com">
                    Primary Variant
                  </ButtonLink>
                  <ButtonLink
                    variant="outline"
                    isDarkBg={mode === 'dark'}
                    href="https://flosrn.com"
                  >
                    Outline Variant
                  </ButtonLink>
                  <ButtonLink
                    variant="ghost"
                    isDarkBg={mode === 'dark'}
                    href="https://flosrn.com"
                  >
                    Ghost Variant
                  </ButtonLink>
                  <ButtonLink variant="dark" href="https://flosrn.com">
                    Dark Variant
                  </ButtonLink>
                  <ButtonLink variant="light" href="https://flosrn.com">
                    Light Variant
                  </ButtonLink>
                </div>
              </li>
              <li className="space-y-2">
                <h2 className="text-lg md:text-xl">Button</h2>
                <p className="!mt-1 text-sm">Ordinary button with style.</p>
                <div className="flex flex-wrap gap-2">
                  <Button variant="primary">Primary Variant</Button>
                  <Button variant="outline" isDarkBg={mode === 'dark'}>
                    Outline Variant
                  </Button>
                  <Button variant="ghost" isDarkBg={mode === 'dark'}>
                    Ghost Variant
                  </Button>
                  <Button variant="dark">Dark Variant</Button>
                  <Button variant="light">Light Variant</Button>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Button disabled variant="primary">
                    Disabled
                  </Button>
                  <Button disabled variant="outline" isDarkBg={mode === 'dark'}>
                    Disabled
                  </Button>
                  <Button disabled variant="ghost" isDarkBg={mode === 'dark'}>
                    Disabled
                  </Button>
                  <Button disabled variant="dark">
                    Disabled
                  </Button>
                  <Button disabled variant="light">
                    Disabled
                  </Button>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Button isLoading variant="primary">
                    Disabled
                  </Button>
                  <Button
                    isLoading
                    variant="outline"
                    isDarkBg={mode === 'dark'}
                  >
                    Disabled
                  </Button>
                  <Button isLoading variant="ghost" isDarkBg={mode === 'dark'}>
                    Disabled
                  </Button>
                  <Button isLoading variant="dark">
                    Disabled
                  </Button>
                  <Button isLoading variant="light">
                    Disabled
                  </Button>
                </div>
              </li>
              <li className="space-y-2">
                <h2 className="text-lg md:text-xl">Custom 404 Page</h2>
                <p className="!mt-1 text-sm">
                  Styled 404 page with some animation.
                </p>
                <div className="flex flex-wrap gap-2">
                  <ButtonLink href="/404">Visit the 404 page</ButtonLink>
                </div>
              </li>
              <li className="space-y-2">
                <h2 className="text-lg md:text-xl">Next Image</h2>
                <p className="!mt-1 text-sm">
                  Next Image with default props and skeleton animation
                </p>
                <NextImage
                  useSkeleton
                  className="w-32 md:w-40"
                  src="/favicon/apple-icon-180x180.png"
                  width="180"
                  height="180"
                  alt="Icon"
                />
              </li>
            </ol>
          </div>
        </section>
      </main>
    </MainLayout>
  );
}

export default ComponentsPage;

const colorList = [
  'rose',
  'pink',
  'fuchsia',
  'purple',
  'violet',
  'indigo',
  'blue',
  'sky',
  'cyan',
  'teal',
  'emerald',
  'green',
  'lime',
  'yellow',
  'amber',
  'orange',
  'red',
  'slate',
  'gray',
  'zinc',
  'neutral',
  'stone',
];
