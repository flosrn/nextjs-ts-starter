import React from 'react';
import { useRouter } from 'next/router';

import cx from 'classnames';
import {
  HiOutlineBell,
  HiOutlineCog,
  HiOutlineCreditCard,
  HiOutlineKey,
  HiOutlineUserCircle,
  HiOutlineViewGridAdd,
} from 'react-icons/hi';

const subNavigation = [
  {
    name: 'Profile',
    href: '/user/profile',
    icon: HiOutlineUserCircle,
    current: false,
  },
  {
    name: 'Account',
    // href: '/user/settings',
    icon: HiOutlineCog,
    current: false,
  },
  {
    name: 'Password',
    // href: '/user/settings',
    icon: HiOutlineKey,
    current: false,
  },
  {
    name: 'Notifications',
    // href: '/user/settings',
    icon: HiOutlineBell,
    current: false,
  },
  {
    name: 'Plan & Billing',
    href: '/user/settings',
    icon: HiOutlineCreditCard,
    current: true,
  },
  {
    name: 'Integrations',
    href: '#',
    icon: HiOutlineViewGridAdd,
    current: false,
  },
];

type AsideMenuProps = {
  className?: string;
};

const AsideMenu: React.FC<AsideMenuProps> = ({ className }) => {
  const { pathname, asPath } = useRouter();
  return (
    <aside
      className={cx('py-6 sm:px-6 lg:col-span-3 lg:py-0 lg:px-0', className)}
    >
      <nav className="space-y-1 bg-white shadow sm:overflow-hidden sm:rounded-md">
        {subNavigation.map((item) => {
          const isCurrent = item.href === pathname || item.href === asPath;
          return (
            <a
              key={item.name}
              href={item.href}
              className={cx(
                isCurrent
                  ? 'bg-gray-50 text-orange-600 hover:bg-white'
                  : 'text-gray-900 hover:bg-gray-50 hover:text-gray-900',
                'group flex items-center rounded-md px-3 py-2 text-sm font-medium'
              )}
              aria-current={isCurrent ? 'page' : undefined}
            >
              <item.icon
                className={cx(
                  isCurrent
                    ? 'text-orange-500'
                    : 'text-gray-400 group-hover:text-gray-500',
                  '-ml-1 mr-3 h-6 w-6 flex-shrink-0'
                )}
                aria-hidden="true"
              />
              <span className="truncate">{item.name}</span>
            </a>
          );
        })}
      </nav>
    </aside>
  );
};

export default AsideMenu;
