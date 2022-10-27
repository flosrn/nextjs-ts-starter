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
    <Link
      href={item.href}
      className={cx(
        isCurrent
          ? 'block rounded bg-blue-700 py-2 pr-4 pl-3 text-white dark:text-white md:bg-transparent md:p-0 md:text-blue-700'
          : 'block rounded py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-100 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white'
      )}
    >
      {item.name}
    </Link>
  );
};

export default NavbarLink;
