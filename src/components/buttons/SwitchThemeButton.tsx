import React from 'react';

import cx from 'classnames';

type SwitchThemeButtonProps = {
  mode?: string;
  themeHandler?: () => void;
  className?: string;
};

const SwitchThemeButton: React.FC<SwitchThemeButtonProps> = ({
  mode,
  themeHandler,
  className,
}) => {
  const Button = themeHandler ? 'button' : 'div';
  const isDarkMode = mode === 'dark';
  return (
    <Button
      aria-label="Toggle Dark Mode"
      type="button"
      className={cx(
        'absolute relative left-2/4 left-0 order-2 order-3 h-12 w-12 -translate-x-2/4 transform transform-none p-3',
        className
      )}
      onClick={themeHandler}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        stroke="currentColor"
        className="h-6 w-6 text-tw-background"
      >
        {isDarkMode ? (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        ) : (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        )}
      </svg>
    </Button>
  );
};

export default SwitchThemeButton;
