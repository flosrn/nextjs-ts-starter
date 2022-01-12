import React from 'react';

import cx from 'classnames';

type SwitchThemeButtonProps = {
  mode?: string;
  themeHandler: () => void;
  className?: string;
};

const SwitchThemeButton: React.FC<SwitchThemeButtonProps> = ({
  mode,
  themeHandler,
  className,
}) => {
  const isDarkTheme = mode === 'dark';
  return (
    <button
      aria-label='Toggle Dark Mode'
      type='button'
      className={cx(
        'absolute left-2/4 order-2 p-3 w-12 h-12 transform -translate-x-2/4 md:relative md:left-0 md:order-3 lg:transform-none',
        className
      )}
      onClick={themeHandler}
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
        fill='currentColor'
        stroke='currentColor'
        className='text-tw-background w-6 h-6'
      >
        {isDarkTheme ? (
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z'
          />
        ) : (
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z'
          />
        )}
      </svg>
    </button>
  );
};

export default SwitchThemeButton;
