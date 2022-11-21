import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';

import useSound from 'use-sound';

import NavbarLink, { NavItem } from './NavbarLink';

import switchSound from '~/sounds/switch-on.mp3';
import SvgLogo from '~/svg/logo.svg';
import SvgNextjstwts from '~/svg/nextjstwts.svg';

export const navigation: NavItem[] = [
  { name: 'Home', href: '/' },
  {
    name: 'About',
    href: '/about',
  },
  {
    name: 'Portfolio',
    href: '/portfolio',
  },
  {
    name: 'Playground',
    href: '/playground',
  },
];

const Navbar = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [play] = useSound(switchSound);
  const isDark = theme === 'dark';

  const toggleTheme = () => {
    setTheme(isDark ? 'light' : 'dark');
    play();
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <header className="bg-filter fixed top-0 z-50 h-[var(--header-height)] w-full backdrop-blur-[5px]">
      <nav className="container relative flex h-full items-center justify-between border-b border-white/10 xl:px-0">
        <div className="flex h-full items-center space-x-8">
          <Link href="/" className="flex shrink-0 items-center">
            <SvgLogo className="h-8 w-8" />
            <SvgNextjstwts className="ml-2 h-8 w-16 fill-current pt-1" />
          </Link>
          <div className="hidden space-x-8 lg:flex">
            {navigation.map((item) => (
              <NavbarLink key={item.name} item={item} />
            ))}
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="ml-1 h-8 cursor-pointer rounded-full bg-zinc-300 ring-zinc-400 transition-all hover:bg-zinc-300 hover:ring-1 dark:bg-zinc-700 dark:ring-white dark:hover:bg-zinc-800">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label="Toggle Dark Mode"
              className="flex h-8 w-8 items-center justify-center p-2"
            >
              <svg
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 20 20"
                className="h-4 w-4 hover:animate-spin"
              >
                {isDark ? (
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                ) : (
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                )}
              </svg>
            </button>
          </div>
          <button
            type="button"
            className="-my-1 ml-6 -mr-1 flex h-8 w-8 items-center justify-center lg:hidden"
          >
            <span className="sr-only">Open navigation</span>
            <svg viewBox="0 0 24 24" className="h-6 w-6 stroke-slate-200">
              <path
                d="M3.75 12h16.5M3.75 6.75h16.5M3.75 17.25h16.5"
                fill="none"
                strokeWidth="1.5"
                strokeLinecap="round"
              ></path>
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
