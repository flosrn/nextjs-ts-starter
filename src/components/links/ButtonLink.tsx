import React from 'react';

import cx from 'classnames';

import UnstyledLink, {
  UnstyledLinkProps,
} from '@/components/links/UnstyledLink';

enum ButtonVariant {
  'primary',
  'outline',
  'ghost',
  'light',
  'dark',
}

type ButtonLinkProps = {
  isDarkBg?: boolean;
  variant?: keyof typeof ButtonVariant;
} & UnstyledLinkProps;

const ButtonLink = React.forwardRef<HTMLAnchorElement, ButtonLinkProps>(
  (
    { children, variant = 'primary', isDarkBg = false, className, ...rest },
    ref
  ) => {
    return (
      <UnstyledLink
        ref={ref}
        {...rest}
        className={cx(
          'inline-flex items-center rounded px-4 py-2 font-semibold',
          'focus:outline-none focus-visible:ring focus-visible:ring-primary-500',
          'shadow-sm',
          'transition-colors duration-75',
          //#region  //*=========== Variants ===========
          [
            variant === 'primary' && [
              'bg-primary-500 text-white',
              'border border-primary-600',
              'hover:bg-primary-600 hover:text-white',
              'active:bg-primary-500',
              'disabled:bg-primary-400 disabled:hover:bg-primary-400',
            ],
            variant === 'outline' && [
              'text-primary-500',
              'border border-primary-500',
              'disabled:bg-primary-100 hover:bg-primary-50 active:bg-primary-100',
              isDarkBg &&
                'disabled:bg-gray-800 hover:bg-gray-900 active:bg-gray-800',
            ],
            variant === 'ghost' && [
              'text-primary-500',
              'shadow-none',
              'disabled:bg-primary-100 hover:bg-primary-50 active:bg-primary-100',
              isDarkBg &&
                'disabled:bg-gray-800 hover:bg-gray-900 active:bg-gray-800',
            ],
            variant === 'light' && [
              'bg-white text-dark ',
              'border border-gray-300',
              'hover:bg-gray-100 hover:text-dark',
              'disabled:bg-gray-200 active:bg-white/80',
            ],
            variant === 'dark' && [
              'bg-gray-900 text-white',
              'border border-gray-600',
              'disabled:bg-gray-700 hover:bg-gray-800 active:bg-gray-700',
            ],
          ],
          //#endregion  //*======== Variants ===========
          'disabled:cursor-not-allowed',
          className
        )}
      >
        {children}
      </UnstyledLink>
    );
  }
);

export default ButtonLink;
