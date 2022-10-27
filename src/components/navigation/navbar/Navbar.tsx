import Link from 'next/link';
import { signOut, useSession } from 'next-auth/react';

import { ArrowLongRightIcon } from '@heroicons/react/20/solid';
import {
  Avatar,
  Button,
  DarkThemeToggle,
  Dropdown,
  Navbar as FlowbiteNavbar,
} from 'flowbite-react';

import NavbarLink, { NavItem } from './NavbarLink';

const fallbackImageBaseUrl =
  'https://eu.ui-avatars.com/api/?background=random&name=';

export const navigation: NavItem[] = [
  { name: 'Home', href: '/' },
  {
    name: 'About',
    href: '/about',
  },
  {
    name: 'Playground',
    href: '/playground',
  },
];

const Navbar = () => {
  const { data: session } = useSession();
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
      <div className="flex space-x-3 md:order-2">
        <DarkThemeToggle />
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
