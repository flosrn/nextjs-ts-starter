import React from 'react';
import Link from 'next/link';
import { signIn, signOut, useSession } from 'next-auth/react';

import ButtonLink from '@/components/links/ButtonLink';
import UnstyledLink from '@/components/links/UnstyledLink';

const links = [
  { href: '/', label: 'Route 1' },
  { href: '/', label: 'Route 2' },
];

const Header: React.FC = () => {
  const { data: session, status } = useSession();
  const loading = status === 'loading';
  return (
    <header className="sticky top-0 z-50 bg-tw-background">
      <div className="layout flex h-14 items-center justify-between">
        <UnstyledLink href="/" className="font-bold hover:text-gray-600">
          Home
        </UnstyledLink>
        <div className="">
          {!session && (
            <>
              <span className="mr-2">You are not signed in</span>
              <ButtonLink
                href={`/auth/signin`}
                className=""
                // onClick={(e) => {
                //   e.preventDefault();
                //   signIn();
                // }}
              >
                Sign in
              </ButtonLink>
            </>
          )}
          {session?.user && (
            <>
              {session.user.image && (
                <span
                  style={{ backgroundImage: `url('${session.user.image}')` }}
                  className=""
                />
              )}
              <span className="">
                <small>Signed in as</small>
                <br />
                <strong>{session.user.email ?? session.user.name}</strong>
              </span>
              <ButtonLink
                href={`/api/auth/signout`}
                variant="dark"
                onClick={(e) => {
                  e.preventDefault();
                  signOut();
                }}
                className="ml-4"
              >
                Sign out
              </ButtonLink>
            </>
          )}
        </div>
        <nav>
          <ul className="flex items-center justify-between space-x-4">
            {links.map(({ href, label }) => (
              <li key={`${href}${label}`}>
                <UnstyledLink href={href} className="hover:text-gray-600">
                  {label}
                </UnstyledLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
