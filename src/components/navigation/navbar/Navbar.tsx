import { useEffect, useState } from 'react';
import Link from 'next/link';
import { signOut, useSession } from 'next-auth/react';
import { useTheme } from 'next-themes';

import { ArrowLongRightIcon } from '@heroicons/react/20/solid';
import {
  Avatar,
  Button,
  Dropdown,
  Navbar as FlowbiteNavbar,
} from 'flowbite-react';
import useSound from 'use-sound';

import NavbarLink, { NavItem } from './NavbarLink';

import switchSound from '~/sounds/switch-on.mp3';

const fallbackImageBaseUrl =
  'https://eu.ui-avatars.com/api/?background=random&name=';

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
  const { data: session } = useSession();
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
    <FlowbiteNavbar fluid rounded border>
      <Link href="/" className="flex items-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://flowbite.com/docs/images/logo.svg"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Demo
        </span>
      </Link>
      <div className="flex items-center space-x-3 md:order-2">
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
        {session?.user ? (
          <Dropdown
            arrowIcon={false}
            inline={true}
            label={
              <Avatar
                alt="User settings"
                img={
                  session.user?.image ||
                  `${fallbackImageBaseUrl}${session.user?.name}`
                }
                onError={({ currentTarget }) => {
                  const image = currentTarget as HTMLImageElement;
                  // eslint-disable-next-line unicorn/prefer-add-event-listener
                  image.onerror = null;
                  image.src = `${fallbackImageBaseUrl}${session.user?.name}`;
                }}
                rounded={true}
              />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">{session.user.username}</span>
              <span className="block truncate text-sm font-medium">
                {session.user.email}
              </span>
            </Dropdown.Header>
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item onClick={signOut}>Sign out</Dropdown.Item>
          </Dropdown>
        ) : (
          <Link href="/login">
            <Button>
              Login <ArrowLongRightIcon className="ml-1 h-4 w-4" />
            </Button>
          </Link>
        )}
        <FlowbiteNavbar.Toggle />
      </div>
      <FlowbiteNavbar.Collapse>
        {navigation.map((item) => (
          <NavbarLink key={item.name} item={item} />
        ))}
      </FlowbiteNavbar.Collapse>
    </FlowbiteNavbar>
  );
};

export default Navbar;
