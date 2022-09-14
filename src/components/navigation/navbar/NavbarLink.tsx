import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import cx from 'classnames';

export type NavItem = {
  name: string;
  href: string;
  passHref?: boolean;
};

const NavbarLink: React.FC<{ item: NavItem }> = ({ item }) => {
  const { pathname, asPath } = useRouter();
  const isCurrent = item.href === pathname || item.href === asPath;
  return (
    <Link href={item.href}>
      <a
        href={item.href}
        className={cx(
          'cursor-pointer select-none hover:text-blue-700',
          isCurrent
            ? 'text-gray-900 dark:text-white'
            : 'text-gray-600 dark:text-gray-300'
        )}
      >
        {item.name}
      </a>
    </Link>
  );
};

export default NavbarLink;
